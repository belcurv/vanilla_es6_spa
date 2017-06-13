/* util.js -- library of helper functions */
/* jshint esversion:6 */

/* attaches a handler function to an event emitted by a target
*/
const $on = (target, event, handler) => {
    return target.addEventListener(event, handler);
};

export { $on };
