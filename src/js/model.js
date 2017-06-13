/* model.js -- stores our appointments, the current time, and will
   have methods for retrieving the list of days to render
*/
/* jshint esversion:6 */

import moment from 'moment';

export default class Model {
    
    constructor() {
        // instance property defaults to the 15th to avoid a bug that skips a
        // month if the current day of the month is, for instance, the 31st
        this.now = moment().day(15);
    }
    
    setDate(month, year) {
        // sets 'now' moment instance to specified month & year
        this.now.month(month).year(year);
    }
    
    getDays() {
        const days          = [],
              calendarStart = moment(this.now).startOf('month'),
              calendarEnd   = moment(this.now).endOf('month'),
              timeRange     = calendarEnd.valueOf() - calendarStart.valueOf(),
              daysInView    = Math.floor(moment.duration(timeRange).asDays());
        
        for (let i = 0; i <= daysInView; i += 1) {
            days.push({
                iso: moment(calendarStart).add(i, 'days').toISOString()
            });
        }
        return days;
    }
    
    toJSON() {
        const iso  = this.now.toISOString();
        const days = this.getDays();
        
        return { iso, days };
    }
    
}
