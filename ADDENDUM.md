# Addendum  (The Story of This App)

Whats up? I'm Nick. I'm going to go a little bit into what I did here, what I did not do here, and a little bit further into why I did it or did not do it. I'll try to keep this chronological, because it may help illuminate some of my thought processes when writing code.  

So I was handed a blank slate CRA app with a single network call (managed by react-query, which was great, react query is awesome.) and a Figma file. I implemented a more opinionated, modularized folder structure (services, and query hooks). I installed axios (isomorphic network request util dep) because it plays nicely in both client and server runtimes and the end goal of this stream of work is to migrate off CRA and to migrate over to a custom express/http node server which will prepare the pages on the server (SSR). Im sure you're thinking, "That's pretty unnecessary for a SPA with a single view and most of that view being dyanmic, also its just a takehome demo.", well yeah that's all true. However, react-query has some pretty awesome prefetching abilities intended for node runtime use. When we prefetch our queries on a per-request basis, we introduce some extended calc time in the server handler, but we trade this off for an excessively faster load on the client, because the data is being hydrated as opposed to fetched. This is a big plus in terms of user experience even if we don't get all the awesome SEO benefits afforded with server side content-crawling.  

Ok so I added axios, then I added eslint and prettier. Just feels pretty standard to offlift devX tooling like formatting and code linting to proven tools. Eslint can be pretty opinionated with certain recommended defaults but if youre willing to take the time to shut off the stupid ones, it can play pretty nice. I debated adding Husky and Lint-Staged but there's going to be max 10 commits in this package so I felt that was a waste. I created some common utils, like a logger (I debated using Pino or Winston but these logs arent going anywhere so I ultimately opted not to add a dep, did add chalk because its better to crawl server logs when theyre in color, and its so small.), and a shared axios instance to pass around for network calls in network service clients.

Then I developed the component inventory to construct the page. I defaulted to using `styled-components`. There's a ton of benefits with theming (which I did not really tap into here, Ill be honest) and it plays very nicely with a react prop passing pattern. It parses scss syntax and allows for some cool abstractions doing prop based mixins in JS. Its probably the best and only good css in js option that Ive been able to try so far. The figma was extremely well done layer by layer, so the component development was super straight forward. Tried to be reusable where appropriate with fundamental elements like Input and Icon. In component development, I typically adhere to the following file pattern, which Im sure you'll notice:

```yaml
Component:
    - component.tsx - Contains component logic, renders views.
    - views.tsx - Contains styled-component views to be used in larger constructs i.e. Component. Purely markup.
    - index.ts - Manages exports
    - component.stories.tsx - Storybook CSF file
    - component.test.tsx - React testing lib component tests (May not get to this one because there's not a ton of exciting tests to write here that wouldnt just be capturing prop passing. I swear I can write tests.)
```

Ok moving on. Got the UI layer fleshed out. Then began on some of the client based logic, i.e. the sort functionality, sort by functionality, the filter functionality, and the search functionality. I ended up opting to use react context here. Its really not an awesome pattern to have to drill a ton of common props to components, and this seemed an appropriate use case. If we didnt use some abstracted state tool, we end up having to manage a ton of extra state and logic in the card grid, and its best to keep minimalist view components abstracted a layer away from intensive logic. Essentially this context will accept the tokens from the collections query and manage updating them should we configure react-query to refetch the token data after a certain interval. It will also manage a coagulative state for filters, search terms, and sort by criteria and direction.  

Then I focused on responsive design. The card grid was already flex wrapped so that plays pretty nicely on smaller devices. I threw together some scss media queries for tablet and mobile on a per component basis.  

Then after I felt like it was in a good spot for CRA/CSR, I did what anyone would do. I branched off and ripped all the CRA/CSR out and migrated to a server side preparatory pattern. Didnt make sense to go static as most of the data is dynamically loaded on a per request basis. Set up a super basic express server, light middleware for req tracing, and set up some static served routes to support asset fetching after the app reaches the client.

I wrote a light abstraction over reactDomServer/rendertoString api which allows you to render dehydrated components to markup on the server and pass around react-query state/props to the client. Theres some string manipulation in that file
to prep the end html file to be served with all the JS it needs to hydrate/be interactive.  

Flushed out a handler for the page, the handler instantiates a query client on a per req basis and prefetches the collection we use in the view layer. FCP (First Contentful Paint) and LCP (Largest Contentful Paint) are super quick when we establish a pattern like this.  

Ran into some issues with MSW when we'd try to fetch from the client to invalidate a now stale query cache but was able to work around it by setting up a proxy handler in the node server.  

Ported styled-components to SSR deterministic rendering, this contributes to a fast LCP/FCP.

Added some accessibility based attributes to markup to allow for screen-reader assistance/tab navigation.

## Things I debated doing but then didnt

- unit tests
  - Would have been great to write tests, however I chose to prioritize SSR, Responsive Layout Design, Accessibility, & React Optimizations over test writing. Unit tests catch bugs, theyre a necessary evil. Im not anti-test. Just chose to prioritize other facets of development here.
  - Couple places could have called for unit tests, I'll list them below
    - View Components could have used unit/snapshot tests
    - Sorting/Filtering logic could have used some test/edge cases
    - prerender - this fn does a lot and is the crux of page serving, definitely should be tested for edge cases in page rendering capabilities
    - network requests/data fetching should likely also have been tested

- wanted to dockerize the whole thing
  - Reasons why I wanted to do this
    - Setting up an NGINX load balancer (reverse proxy) is extremely simple and minimal lift and helps a ton with managing high traffic loads
    - Docker-Compose makes it super easy to spin up n instances of a service to tuck behing the LB.
    - Wanted to setup a supporting rust/actix-web sidecar to listen for metric emission
    - Docker Compose would have made managing/running several interdependent services pretty easy with DNS resolution and dependent task defintions.
  - Reasons why i did not
    - I dont know if its necessary to setup a whole pg/mysql image for fake mocked metrics
    - There is minimal interaction with pods right now so we dont have a ton of metrics that we'd actually care about capturing
    - I dont imagine were expecting to throttle 10000tps on this server, its likely going to be a few devs reviewing the app  
