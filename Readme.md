### Vanilla ES6 Single Page App

Based on this 2-part series: [part 1](http://robinsr.github.io/blog/post/vanilla-es6-spa-1), [part 2](http://robinsr.github.io/blog/post/vanilla-es6-spa-2)

Desparately needs styling. That's purportedly coming in part 3.

The `/src/js/` modules are broken down into the MVC style:

```
/root
  |-/src
    |-/js
      |-main.js
      |-controller.js
      |-view.js
      |-template.js
      |-model.js
      |-service.js
    |-/css
      |-style.scss
  |-/build
    |-bundle.js
    |-bundle.css
  |-index.html
```

*   `main.js` - the entry point to the app, pulls in the other modules
*   `model.js` - manage app data/state. Will store our appointments, the current time, and will have methods for retrieving the list of days to render
*   `template.js` - collection of pure functions for parsing **tagged template strings** into processed html strings. Does not integrate them into our app.
*   `view.js` - handles rendering and DOM events. Responsible for using the template strings, feeding them data, and adding their output to the right DOM elements.
*   `controller.js` - connects our model and view. Sends commands to the model to update the data, and sends commands to the view to change the presentation.
*   `service.js` -  will have code for interacting with a backend service
*   `util.js` -  could also be called `lib.js` since it functions as a library of helper functions

A Gulp task watches files in the `/src/js/` folder for changes and rebundles them, outputting to the `/build` folder.