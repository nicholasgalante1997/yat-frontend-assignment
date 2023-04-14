# Nick Galante

## Addendum  

Whats up? I'm Nick. I'm going to go a little bit into what I did here, what I did not do here, and a little bit furher into why I did it or did not do it. I'll try to keep this chronological, because it may help illuminate some of my thought processes when writing code.  

So you (all) had basically handed me a blank slate CRA app with a single network call (managed by react-query, which A++++, react query is awesome.) and a Figma file. I implemented a more opinionated, modularized folder structure (services, and query hooks). I installed axios (isomorphic network request util dep) because it plays nicely in both client and server runtimes and the end goal of this stream of work is to migrate off CRA and to migrate over to a custom express/http node server which will prepare the pages on the server (SSR). Im sure you're thinking, "That's pretty unnecessary for a SPA with a single view and most of that view being dyanmic, also its just a takehome demo.", well yeah that's all true. However, react-query has some pretty awesome prefetching abilities intended for node runtime use. When we prefetch our queries on a per-request basis, we introduce some extended calc time in the server handler, but we trade this off for an excessively faster load on the client, because the data is being hydrated as opposed to fetched. This is a big plus in terms of user experience even if we don't get all the awesome SEO benefits afforded with server side content-crawling.  

Ok so I added axios, then I added eslint and prettier. Just feels pretty standard to offlift devX tooling like formatting and code linting to proven tools. Eslint can be pretty opinionated with certain recommended defaults but if youre willing to take the time to shut off the stupid ones, it can play pretty nice. I debated adding Husky and Lint-Staged but there's going to be max 10 commits in this package so I felt that was a waste. I created some common utils, like a logger (I debated using Pino or Winston but these logs arent going anywhere so I ultimately opted not to add a dep, did add chalk because its better to crawl server logs when theyre in color, and its so small.), and a shared axios instance to pass around for network calls in network service clients.

Then I developed the component inventory to construct the page. I defaulted to using `styled-components`. There's a ton of benefits with theming (which I did really tap into here, Ill be honest) and it plays very nicely with a react prop passing pattern. It parses scss syntax and allows for some cool abstractions doing prop based mixins in JS. Its probably the best and only good css in js option. The figma was extremely well done layer by layer, so the component development was super straight forward. Tried to be reusable where appropriate with fundamental elements like Input and Icon. In component development, I typically adhere to the following file pattern, which Im sure you'll notice:

```yaml
Component:
    - component.tsx - Contains component logic, renders views.
    - views.tsx - Contains styled-component views to be used in larger constructs i.e. Component. Purely markup.
    - index.ts - Manages exports
    - component.stories.tsx - Storybook CSF file
    - component.test.tsx - React testing lib component tests (May not get to this one because there's not a ton of exciting non unit tests to write here that wouldnt just be capturing prop passing. I swear I can write tests.)
```

Ok moving on. Got the UI layer fleshed out. Then began on some of the client based logic, i.e. the sort functionality, sort by functionality, the filter functionality, and the search functionality. I ended up opting to use react context here. Its really not an awesome pattern to have to drill a ton of common props to components, and this seemed an appropriate use case. If we didnt use some abstracted state tool, we end up having to manage a ton of extra state and logic in the card grid, and its best to keep minimalist view components abstracted a layer away from intensive logic. Essentially this context will accept the tokens from the collections query and manage updating them should we configure react-query to refetch the token data after a certain interval. It will also manage a coagulative state for filters, search terms, and 

---

<img src="https://api-docs.y.at/img/yat-logo-white.svg" width="25%">

<div style="background: url(https://api-docs.y.at/img/yat-logo-white.svg);background-color: #090719;height:70px;background-repeat:no-repeat;background-size: 100px;background-position: center; border-radius: 10px;border: 1px solid #fff;width: 100%;margin:0; padding:0;">

</div>

# Frontend - ReactJS Assignment

## ✨ Introduction

Hello! Glad to see you here! 👋

This page contains all the information you'll need to run and work on this assignment. If you have any question, you can find ways to contact us at the bottom of this page.

You should fork this repo to be able to work on it.


## 💻 Assignment

### 💣 The Problem

Imagine we just received new designs to build an interface for Yat. It's a page where you can see which collectibles your friends own. We call these groups "Pods":

![Screenshot 2023-02-13 at 11 59 46 PM](https://user-images.githubusercontent.com/1178980/218674647-c9b18d83-2459-4069-bc52-ff7de9cc8a40.png)

As a user, you're able to:

- See the list of collectibles you and your friends own
- Filter collectibles you own
- Sort by price or most recent acquired
- Search by keyword

We would like you to build a functional interface based on this design. The Figma file can be found [here](https://www.figma.com/file/ySw3vbGUssxB811UQY0Qsg/Collection-Page?node-id=267%3A93607&t=PLIrc087lMSf2gxs-1).

We understand this design can take a meaningful amount of time to be implemented. If time is a constraint, focus on areas where you can really showcase your skills. Are you a CSS guru? Show us what you can do. If you prefer to work "under the hood", how do you handle the user actions and optimize the page to allow Pods to contain thousands of collectibles?

You're welcome to use libraries that could help you with this task. Also, feel free to modify any aspect of the code if you think that will make it better.

The data is being provided by [React Query](https://react-query-v3.tanstack.com) in combination with a [Mock Server](https://mswjs.io). The mocked responses can be modified [here](https://github.com/GabeReis/yat-frontend-assignment/blob/main/src/mocks/handlers/pod.ts).


### 📚 Resources

- [Figma file with UI design](https://www.figma.com/file/ySw3vbGUssxB811UQY0Qsg/Collection-Page?node-id=267%3A93607&t=PLIrc087lMSf2gxs-1)
- [React Query](https://react-query-v3.tanstack.com)
- [Mock Service Worker](https://mswjs.io)


### 🌡️ What are we evaluating?

- We want to see how you approach this challenge
- Build this UI for a regular desktop screen, but a responsive design will be a plus
- If you use external libraries, tell us why and the reasoning behind your choice.
- Make sure your solution works on different scenarios (we will try to break it 😇)
- Be creative. We love simple and clever solutions.


### 🚀 Above & Beyond

Are there other aspects that you would consider while building this page? For example, what would you do improve this interface in terms of accessibility?

If you have new ideas or cool tricks to show us, go for it!


### 🛑 Are You Stuck?

If you can't make any progress or feel defeated, try a different approach:
- Can you start with a small component in the UI? Keep iterating!
- Is there something else you could add to make the experience more enjoyable for our users?

Remember: we want to see what you are capable to do. Show off your coding and problem-solving skills. If you can't write even one single line, being a good storyteller can go a long way 🤣


## ▶️ Getting Started

### 🛠️ Installation Steps

1. Fork the repository


3. Install dependencies

```bash
yarn install
```

4. Run the app

```bash
yarn start
```

You should see the following page on your browser:

![Screenshot 2023-02-13 at 11 48 58 PM](https://user-images.githubusercontent.com/1178980/218672436-432f78c6-d6ae-4272-a4d4-8d8299833943.png)

Use this page to build the interface. Don't worry about routes, but you're welcome to re-organize the files any way you prefer.


🌟 You are all set!

## 🎯 What we're looking for

- Clean code
- How you build and reuse components
- Comments (where they make sense)
- Commit history, commit often to show your thought process
- Tests are a plus


## ✉️ Get in Touch

If you have questions, plese reach out to the recruiter or directly to me:
- [Gabe Reis](mailto:rio@tari.com)

