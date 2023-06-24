//Timezones are a mess, they are a developer nightmare. It could be 6 in the morning for you while it's already 8 hours later in Tokyo, and its still yesterday's date in New York.

//To try to solve this problem, developpers came with a concept called timezone offset : when using a date in javascript (and in many other programming languages), you'll often see a number at the end of the date. This is the number of hours ahead or behind the Coordinated Universal Time (UTC, in short).

//For example in Brussels, we are one hour ahead of UTC, we would write:

//2020-11-24T16:00+01:00
//To say we are the 24th of November at 16h, Brussels time (UTC +1h)

//Creating a Date object
//Handling and displaying dates in javascript always starts with a new Date() declaration, this object will allow you to initialize a reference to a certain point in time. If you do not pass arguments to the function it gives you today's date at the exact time you initialized the variable (up to a milisecond of precision)

let now = new Date() // Today's date
let dateInThePast = new Date("1990-12-25") // 25th December of 1990 (at midnight, since we do not set the time)
//Getting values
//Once you created your date object. There are several ways to display informations from it.

//Display the full date
//There are a lot if different methods for just displaying the date as a text. You can check these out on MDN :

toDateString()
toISOString()
toLocaleDateString()
toLocaleString()
toLocaleTimeString()
toString()
toTimeString()
toUTCString()
//They all have their advantages and disadvantages, it could be really useful for debug, but they're not what we will focus on.

//A simple example before we move on:

//let dateInThePast = new Date("1990-12-25")

console.log(dateInThePast.toISOString()) // 1990-12-25T00:00:00.000Z
console.log(dateInThePast.toUTCString()) // Tue, 25 Dec 1990 00:00:00 GMT
console.log(dateInThePast.toString()) // Tue Dec 25 1990 01:00:00 GMT+0100 (Central European Standard Time)
//There are is a method for extracting every information of the date Object. You want to retrieve the day ? Use getDate() ! You want the day of the week ? 0 being sunday, 6 being saturday use getDay().

//date decomposition credits: toptal

//An example is worth a thousand words :

//let dateInThePast = new Date("1990-12-25")

console.log(dateInThePast.getDate()) // 25
console.log(dateInThePast.getDay()) // 2 ( = tuesday)
console.log(dateInThePast.getFullYear()) // 1990
console.log(dateInThePast.getHours()) // 1 (midnight, UTC+1)
console.log(dateInThePast.getMilliseconds()) // 0
console.log(dateInThePast.getMinutes()) // 0
console.log(dateInThePast.getMonth()) // 11 (! Months start at 0 !)
console.log(dateInThePast.getSeconds()) // 0
//If you want to display the dates in UTC time (minus the UTC offset), there is an equivalent for each of these methods, for example getHours() becomes getUTCHours(), et caetera...

//Timestamps
//Among these functions there is a special one called getTime(), this gives you a special value called epoch, it's the number of miliseconds since the 1st of January 1970.

//This is a universal number that you can use across a number of languages and that is particularly useful for date conversion and manipulation.

let christmas1995 = new Date("1995-12-25")
let halloween2002 = new Date("2002-10-30")

console.log(
  halloween2002.getTime() / 1000 +
    " seconds have passed betweeen halloween 2002 and 1/1/1970"
)
console.log(
  (halloween2002.getTime() - christmas1995.getTime()) / (1000 * 60) +
    " minutes have passed betweeen halloween 2002 and c"
)
//You can do wonderful things with timestamps...

//let halloween2002 = new Date("2002-10-30")
let threeDays = 1000 * 60 * 60 * 24 * 3 // 1000 miliseconds * 60 seconds * 60 minutes * 24 hours * 3 days

let threeDaysPastHalloween2002 = new Date(halloween2002.getTime() + threeDays)

console.log(threeDaysPastHalloween2002.toString())
