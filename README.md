# Nick Galante

## Getting Started

> `yarn start` makes use of the linux `cp` shell command to move static artifacts, if you're running this on Windows and not on WSL, you'll likely need to amend the `cp:assets` script to use the native Windows `copy` or you'll notice static assets missing.

```bash
# or yarn install
$ yarn 
$ yarn start
```

## File Structure

- .storybook/** => storybook config (default)
- build/** => static artifacts, generated during yarn start
- configuration/** => app webpack config
- html/** => template for server rendering components
- public/** => static artifacts, tmp directory, ported to build/static in `yarn start` cmd
- src
  - index.ts => app entry point, runs server and msw
  - server.ts => server configuration file
  - server-render.tsx => utility function for rendering react pages into markup on the server
  - handler.ts => Handler function for requests for the webapp page
  - api-proxy.ts => Handler function for requests from the client for collection data
  - fallback.ts => utility fns to generate pod/token data if msw flakes
  - middleware.ts => supplies trace fn for logging req info on requests
  - router.ts => utility fn for getting a handler given a route
  - web/
    - components/** => all components smaller than an entire page
    - contexts/** => react contexts used across the app (token/pod & banner)
    - hydrate-mounts/** => client side js bundles used for page hydration, loaded after initial page is served
    - mocks/** => msw related code
    - pages/** => full views & logic for a given route
    - query-fns/** => react-query custom hooks
    - service-fns/** => async operations used in useQuery() based hooks, supplies query-fns to custom react-query hooks & prefetch
    - styles/** => css & fonts
    - theme/** => styled-components reusable bits (didnt take much shape)
    - types/** => shared types
    - utils/** => common utils, logger, axios instance
    - App.tsx => wrapper around `<LandingPagePod />` (since this is our main app)

## Render Pattern  

Given a route intended to serve a view, the express server will dehydrate a react page (hierarchal component tree) and render it to a markup string on the server. If the view loads dynamic data, the route handler prefetches the query and dehydrates the query result on the server, and passes the QueryClient to a top-level QueryClientProvider, and the dehydrated state to a Hydrate React Query component, which is then included in the prerendered markup and then sent to the client.

## State Management

- React-Query for asynchronous data state management/load
- React Context API for local client state management

## Scripts

- build:client
  - runs a webpack build script that generates static js/css assets to be loaded by the client after the initial html is served
- cp:assets
  - copies static assets from public to the newly generated `build` directory.
- start
  - runs `build:client` and `cp:assets` and then starts the express server, essentially in development mode since it's using ts-node for execution. (`ts-node src/index.ts`)

## Build Tooling

- Webpack
- Babel

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

