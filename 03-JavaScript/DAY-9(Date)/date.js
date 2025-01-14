// New way of creating a date.
const d = new Date(); // I can give a value in brackets in milliseconds and it will produce the output.
console.log(d); // Now time in this format 2024-12-04T14:20:19.887Z

console.log(d.toString()); // Wed Dec 04 2024 19:50:19 GMT+0530 (India Standard Time)
console.log(d.toDateString()); // Wed Dec 04 2024
console.log(d.toISOString()); // 2024-12-04T14:20:19.887Z

console.log(typeof d); // Object because of new keyword.

// It takes date and time information from the system clock. Date function calculates originally in milli-seconds and then converts itself in seconds and other stuff.

// There is a date - January 1 1970 00:00:00 from where it calculates milli-seconds. Because you will need a basis date from where you could calculate today's date. so January 1 1970 is the date.

console.log(d.getDate()); // Will get you the date value of today.
console.log(d.getDay()); // Will give you day value based on following format.

// Sun, Mon, Tue, Wed, Thu, Fri, Sat
// 0  ,  1 , 2  ,  3 , 4  , 5  , 6

console.log(d.getMonth()); // Will give you month value based on following format.
// Jan, Feb, March, April, May, June, July, August, Sept, Oct, Nov, Dec.
// 0  , 1  , 2,     3,     4,   5,     6,   7,      8,    9,   10,  11.

console.log(d.getFullYear()); // Will get you the full year. [2024]
console.log(d.getMilliseconds()); // Milliseconds based on the minute. [Eg - 256]
console.log(d.getMinutes()); // [Eg - 13]

// Why milli - seconds are used? Somebody is booking a online ticket but 2 person are purchasing at same time then we keep at milli seconds. Then we can create a difference between the 2 persons.
// Milliseconds is very useful in getting minute differences between the time.
// Mathematcial calculations is easy in milliseconds in comparison to date.

// Also add, sub operations would be easier to implement this way. 

console.log(d.getTime()); // Will give you in milli-seconds calculated from January 01 1970 00:00:00. It gives a large value because it's in milli-seconds.

const now = Date.now();
console.log(now); // This will also give you milli-second answer calculated from January 01 1970 00:00:00.

const da = new Date("2022-10-20"); // You can give a specified date as a string.
console.log(da); // Output --> 2022-10-20T00:00:00.000Z

const daT = new Date("2022-10-20T10:00:23"); // T represents time, we can specify time as well.
console.log(daT); // Output --> 2022-10-20T04:30:23.000Z

const daTE = new Date(2024,4,3); // Follow 0th index because 4 represents May month in JS.
// Follow 0th index for month!
console.log(daTE); // Output --> 2024-05-02T18:30:00.000Z, day is still 3 output 2 is due to timezone offset.

// Format -->  year / month / date / hour / minute / second / millisecond
const date_ne = new Date(2024,5,28,10,12,45,231); // Follow 0th index.
console.log(date_ne); // Output --> 2024-06-28T04:42:45.231Z


// Setting Date Components.

const set = new Date();
set.setDate(20);
set.setFullYear(2013);
set.setMonth(3);
console.log(set); // Output --> 2013-04-20T14:20:19.912Z. The time 14:20:19 is due to timezone offset.

console.log(set.toString()); // Output --> Sat Apr 20 2013 19:50:19 GMT+0530 (India Standard Time)

// Date Calculations - V.IMP!

const date1 = new Date(); // Current date
const date2 = new Date("2025-04-21"); 

console.log(date2-date1); // When we subtract, we get the answer in milliseconds. We can even compare, date2>date1 or date2<date1. Difference between dates is in milliseconds. Output --> 11871580088
console.log(date1 > date2); // Output --> false because date1 is less than date2. It is calculated in milliseconds.


// Countdown Timer
// Next Olympics 2028
// Days, Hour, Minute, Seconds will be the output.
// ---------------------------------------------------------------------------
const date_start = new Date(); // Today's date.

const date_end = new Date("2028-07-14T00:00:00"); // Ending date.

const date_result = date_end - date_start; // We are storing the date_result. When two Date objects are subtracted, JavaScript returns the difference in milliseconds. The result is a numeric value representing the time difference.

const days = Math.floor(date_result/(1000*60*60*24)); // 1000ms = 1s, 60s = 1 min, 60 min = 1 hour, 24 hour = 1 day. That's why we are multiply date result with 1000*60*60*24.

const hour = (Math.floor(date_result/(1000*60*60))%24); // Modulo operator remainder ko return karega after days are calculated toh ye remaining hours ko nikalne ke liye use kar rahe hai!.

const minute = (Math.floor(date_result/(1000*60))%60); // Remaining minutes after accounting for days, & hours.

const second = (Math.floor(date_result/(1000))%60); // Now we account for seconds.

console.log(`"Olympics 2028 Time:\nDays Remaining: ${days},\nHours Remaing: ${hour},\nMinutes Remaining: ${minute},\nSeconds Remaining: ${second}"`); // Fetching the values by the previous code.




