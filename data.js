export var data = {
  // An array with the full names of months starting
  // with January.
  monthNames: [
    'January', 'February', 'March', 'April', 'May',
    'June', 'July', 'August', 'September',
    'October', 'November', 'December'
  ],

  // An array of weekday names starting with Sunday. Used
  // in screen reader announcements.
  weekdays: [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday'
  ],

  // An array of short weekday names starting with Sunday.
  // Displayed in the calendar.
  weekdaysShort: [
    'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
  ],

  // An integer indicating the first day of the week
  // (0 = Sunday, 1 = Monday, etc.).
  firstDayOfWeek: 0,

  // Used in screen reader announcements along with week
  // numbers, if they are displayed.
  week: 'Week',

  // Translation of the Calendar icon button title.
  calendar: 'Calendar',

  // Translation of the Clear icon button title.
  clear: 'Clear',

  // Translation of the Today shortcut button text.
  today: 'Today',

  // Translation of the Cancel button text.
  cancel: 'Cancel',

  // A function to format given `Object` as
  // date string. Object is in the format `{ day: ..., month: ..., year: ... }`
  // Note: The argument month is 0-based. This means that January = 0 and December = 11.
  formatDate: d => {
    // returns a string representation of the given
    // object in 'MM/DD/YYYY' -format
  },

  // A function to parse the given text to an `Object` in the format `{ day: ..., month: ..., year: ... }`.
  // Must properly parse (at least) text formatted by `formatDate`.
  // Setting the property to null will disable keyboard input feature.
  // Note: The argument month is 0-based. This means that January = 0 and December = 11.
  parseDate: text => {
    // Parses a string in 'MM/DD/YY', 'MM/DD' or 'DD' -format to
    // an `Object` in the format `{ day: ..., month: ..., year: ... }`.
  },

  // A function to format given `monthName` and
  // `fullYear` integer as calendar title string.
  formatTitle: (monthName, fullYear) => {
    return monthName + ' ' + fullYear;
  }
}