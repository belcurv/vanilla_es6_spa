/* view.js 
   handles rendering and DOM events.
   uses the template strings, feeds them data, and adds their output
   to the right DOM elements.
*/
/* jshint esversion:6, browser: true */

import { calendar } from './template';

export default class View {
    
    constructor() {
        this.el = document.getElementById('target');
    }
    
    render(data) {
        this.el.innerHTML = calendar(data);
    }
}
