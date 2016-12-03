---
layout: post
title:  "A Usable Bootstrap With React Slingshot"
date:   2016-12-03 11:11:00
author:
  display_name: Andrew Lombardi
  login: kinabalu
  email: andrew@mysticcoders.com
  url: http://www.mysticcoders.com
comments: true
---

<svg xmlns="http://www.w3.org/2000/svg" width="300" viewBox="0 0 100 100">
  <g fill="#764ABC">
    <path d="M65.6 65.4c2.9-.3 5.1-2.8 5-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 1.5.7 2.8 1.6 3.7-3.4 6.7-8.6 11.6-16.4 15.7-5.3 2.8-10.8 3.8-16.3 3.1-4.5-.6-8-2.6-10.2-5.9-3.2-4.9-3.5-10.2-.8-15.5 1.9-3.8 4.9-6.6 6.8-8-.4-1.3-1-3.5-1.3-5.1-14.5 10.5-13 24.7-8.6 31.4 3.3 5 10 8.1 17.4 8.1 2 0 4-.2 6-.7 12.8-2.5 22.5-10.1 28-21.4z"/>
    <path d="M83.2 53c-7.6-8.9-18.8-13.8-31.6-13.8H50c-.9-1.8-2.8-3-4.9-3h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 3 2.6 5.4 5.6 5.4h.2c2.2-.1 4.1-1.5 4.9-3.4H52c7.6 0 14.8 2.2 21.3 6.5 5 3.3 8.6 7.6 10.6 12.8 1.7 4.2 1.6 8.3-.2 11.8-2.8 5.3-7.5 8.2-13.7 8.2-4 0-7.8-1.2-9.8-2.1-1.1 1-3.1 2.6-4.5 3.6 4.3 2 8.7 3.1 12.9 3.1 9.6 0 16.7-5.3 19.4-10.6 2.9-5.8 2.7-15.8-4.8-24.3z"/>
    <path d="M32.4 67.1c.1 3 2.6 5.4 5.6 5.4h.2c3.1-.1 5.5-2.7 5.4-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-.2 0-.5 0-.7.1-4.1-6.8-5.8-14.2-5.2-22.2.4-6 2.4-11.2 5.9-15.5 2.9-3.7 8.5-5.5 12.3-5.6 10.6-.2 15.1 13 15.4 18.3 1.3.3 3.5 1 5 1.5-1.2-16.2-11.2-24.6-20.8-24.6-9 0-17.3 6.5-20.6 16.1-4.6 12.8-1.6 25.1 4 34.8-.5.7-.8 1.8-.7 2.9z"/>
  </g>
</svg>

Getting started with [React](https://facebook.github.io/react/) can be a bit daunting, and as with using things like AngularJS I've found that using a bootstrap is a great way to start. With that in mind, I've chosen the wonderful [react-slingshot](https://github.com/coryhouse/react-slingshot) from [@housecor](https://twitter.com/housecor). It contains a demo which can be removed with an `npm script` and from which we'll extract what I feel is most useful including: integration with redux, react-router, and redux-thunk.

Most [React](https://facebook.github.io/react/) repositories seem to dispense with build tools and instead use a mixture of npm scripts and webpack to achieve what it needs to achieve. Just recently a new package manager came out to unseat the stalwart in `npm`, we're using [yarn](https://yarnpkg.com), please follow the install instructions for your particular environment.
<!--more-->
Clone the `react-slingshot` repository using the following `git` command:

```shell
% git clone git@github.com:coryhouse/react-slingshot.git
```

First thing we'll do after cloning `react-slingshot` locally is remove the demo as it isn't useful any longer

```shell
yarn remove-demo
```

## Main entrypoint

Let's add the necessary items for using redux and integrating react-router. Open up the `src/index.js` and paste the following in:

```javascript
/* eslint-disable import/default */
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from './routes';
import configureStore from './store/configureStore';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
```

Let's take this in chunks, the eslint bit is because there's no default export in this file and we want eslint to ignore that. Then we have imports for bringing in react, redux, and the integration with react-router and redux.

```javascript
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
```

The bootstrap already contains a working version to configure the store, and has the integration with `redux‐thunk` for the middleware. We call the exported function to configure the store, and then `syncHistoryWithStore(browserHistory, store)` will save our router state in the redux store.

```javascript
import routes from './routes';
import configureStore from './store/configureStore';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
```

This snippet is the entrypoint for our application. The `Provider` component is offered by `redux` and allows us to wrap all other components with access to our store, and inside that we add the `Router` component with access to our store-saved history, and the routes which we will define in the next section. That's it for our index module, let's move on to defining some simple routing.

```javascript
render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
```

## Routes
Now we'll define our routes module which was referenced in the index file. Create a new file in `src/routes.js` and paste the following in.

```javascript
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import HomePage from './pages/HomePage';

export default (
  <Route path="/">
    <IndexRoute component={HomePage}/>
  </Route>
);
```

This is a typical [react-router](https://github.com/ReactTraining/react-router) file, and you can browse the documentation to find more ways to customize things.

## Pages
You may have notice we've identified another missing file `src/pages/HomePage.js`, which we will create now.

```javascript
import React from 'react';

const HomePage = () => {
  return (
    <h1>Hello, World!</h1>
  );
};

export default HomePage;
```

This is the simplest of components, a functional stateless component which merely outputs Hello, World! wrapped in an H1 tag. If you attempt to run things now you will still receive errors in the reducers directory. While out of the scope of this quick tutorial, reducers are how an application's state changes in response to something happening, you can [read more in the Redux docs](http://redux.js.org/docs/basics/Reducers.html).

Let's open `src/reducers/index.js` and modify with the following:

```javascript
import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  routing: routerReducer,
});

export default rootReducer;
```

Remember, we added `react-router-redux` to our index module, so as our first reducer we need to at the routerReducer to the list of reducers offered up in the `combineReducers` call. It's in this file that you can define more reducers to be included in your `redux` stack.

## Fin

With that, browse to http://localhost:3000 and see the familiar "Hello, World!". There is so much more to be done, we can dip into the `redux` portion and start defining actions, action creators, reducers, and use `redux-thunk` for the inevitable need for asyncronous calls in our action creators. This is a first step, stay tuned and we'll dig even deeper into the React / Redux stack.

And if you weren't in Sofia, Bulgaria for [CodeMonsters](http://codemonsters.pro/)/[Java2Days](http://2016.java2days.com) this year, my presentation on [React and Redux](http://www.slideshare.net/kinabalu/react-and-redux) is available on slideshare. Thanks to everyone who was in attendance, 
