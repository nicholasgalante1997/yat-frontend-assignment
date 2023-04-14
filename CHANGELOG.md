# Changes by SemVer

## 1.0.7

- Updated readme
- locked node version by adding package.json#engine field and .nvmrc

## 1.0.6  

- Very light accessibility layer/polish

## 1.0.5

- General Bug Fixes and Polishing

## 1.0.4

- Migrated off create-react-app
- Migrated onto a custom webpack/babel impl
- set up basic express/http server
  - why did I choose to wrap express in http.createServer()?
  - Its a pretty easy plug and drop for when we want to start issuing certificates and moving to https
- set up some trace middleware fns
- installed cors (needed it for cors)
- set up babel-plugin-styled-components for ssr [@see](https://styled-components.com/docs/advanced#server-side-rendering)
- set up server-render.tsx
  - just a light abstraction over the ReactDOM/server renderToString api. If we were prepping static pages I wouldve probably just resolved the component to a pipeable stream so we could just pipe that stream into a fs write stream and start scaffolding html files. But since we server prep every time the handler gets hit, we render to string here and pipe that string through res.
- Set up a pageHandler for '/' route
- Migrated react-query to an ssr node implementation (I know were on v3 but the docs point to v4 for some reason) [docs](https://tanstack.com/query/v4/docs/react/guides/ssr#server)
- Migrated MSW to a node implementation

## 1.0.3  

- Added Tablet layout with iPad v8/9 as emulator
- Added Mobile layout with Iphone 13 Pro as emulator

## 1.0.2  

- Added component views
- Added component file structure
- Set up sb 7.0
- Set Up Navbar
- Set Up Collection title & Subtext
- Set up Stat Tiles
- Set up loading skeleton for app (needs tweaking)
- Desktop UI done
- Added banner context for displaying banner messages
- Added token provider context after initial data load
- Scaffolded filter & search & sort into provider fn
- Desktop site done

## 1.0.1  

- Added [prettier](https://www.npmjs.com/package/prettier) for code formatting
- Added [eslint](https://www.npmjs.com/package/eslint) for code linting
- Added [chalk@v4](https://www.npmjs.com/package/chalk) for use with internal minimal logger util fn, locked at v4 since v5 is ESM modules and were likely compiling to es5.
- Added [axios](https://www.npmjs.com/package/axios) for ease of typing network req responses
- Altered folder structure to reflect a more modularized app
- Everything functionally is virtually the same

## 1.0.0  

- forked
