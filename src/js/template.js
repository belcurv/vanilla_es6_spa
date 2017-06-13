/* template.js -- where our template functions will live */
/* jshint esversion:6 */


import moment from 'moment';


/* utility method for easy templating of repeating html elements
 * such as lists.
 *
 * 'tagged template literals' are strings that are first passed
 * through a custom function which returns the processed string.
 *
 * @params  [array]  literal     [array of all the literal secti
 * @params  [array]  ...cooked   [rest param: all the proccessed expressions]
 * @returns [string]             [the processed string]
*/
const html = (literal, ...cooked) => {
    let result = '';
    
    cooked.forEach( (cook, i) => {
        let lit = literal[i];
        if (Array.isArray(cook)) {
            cook = cook.join('');
        }
        result += lit;
        result += cook;
    });
    result += literal[literal.length - 1];
    return result;
};


/* tempate that returns the current month and year and exposes some buttons
 * to move the date forward and backward. Uses moment.js and the 'data' obj
 * from our model > template
*/
const controls = (data) => {
    const curr = moment(data.iso);
    const next = moment(data.iso).add(1, 'month');
    const prev = moment(data.iso).subtract(1, 'month');
    return html`
        <div id="controls">
          <a class="item" href="#/${prev.format('MM')}/${prev.format('YYYY')}">
            Back one month
          </a>
          <p class="item">${curr.format('MMMM')}, ${curr.format('YYYY')}</p>
          <a class="item" href="#/${next.format('MM')}/${next.format('YYYY')}">
            Forward one month
          </a>
        </div>`;
};


/* template that returns a 'li'
*/
const day = (data) => html`
    <li data-iso="${data.iso}">
        <p class="date"> ${moment(data.iso).format('D')}</p>
    </li>
`;


/* template that loops over the array of days and adds a 'li' for each day
*/
const calendar = (data) => html`
    ${controls(data)}
    <ul id="calendar" class="full-width weeks-${data.weekCount}">
        ${data.days.map(data => day(data))}
    </ul>
`;


export { calendar };
