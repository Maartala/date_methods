// ========================================================
// Lev1_1_js-vertiefung_date_new-date()
// ========================================================


const showDate1 = document.getElementById('showDate1');
const showDate2 = document.getElementById('showDate2');
const showDate3 = document.getElementById('showDate3');
const showDate4 = document.getElementById('showDate4');

// new Date (aktuelles Datum)
let date1 = new Date();  //Mon Mar 27 2023 13:09:13 GMT+0200 (Mitteleuropäische Sommerzeit)
showDate1.innerHTML = date1

let date2 = new Date(0);  //Thu Jan 01 1970 01:00:00 GMT+0100 (Mitteleuropäische Normalzeit)
showDate2.innerHTML = date2

let date3 = new Date(31556908800); 
showDate3.innerHTML = date3

let date4 = new Date(86400000); 
showDate4.innerHTML = date4


// ========================================================
// Lev1_2_js-vertiefung_date_get-date-methods
// ========================================================

let monate = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

let wochenTag = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
];

const div = document.querySelector('div');

//aktuelles Datum
d = new Date(); //Mon Mar 27 2023 13:49:04 GMT+0200 (Mitteleuropäische Sommerzeit)

div.innerHTML += "<br>" + d;

div.innerHTML += "<br>" + d.getFullYear(); // 2023

div.innerHTML += "<br>" + d.getMonth(); // 2

div.innerHTML += "<br>" + d.getDate(); // 27

div.innerHTML += "<br>" + d.getHours(); // 13

div.innerHTML += "<br>" + d.getMinutes(); // 49

div.innerHTML += "<br>" + wochenTag[5], // Freitag

div.innerHTML += "<br>" + monate[1] // Februar


// _____________________
// CSS-Part
const clock = document.getElementById('clock')
const description = document.getElementById('description')
uhr = new Date(2023, 3, 27, 14, 05, 42);

clock.innerHTML = `${wochenTag[5]} ${uhr.getHours()} : ${uhr.getMinutes()} : ${uhr.getSeconds()} PM`
description.innerHTML += `DAY HOURS MINUTES SECONDS PERIOD`
// _____________________


// ========================================================
// Lev1_3_js-vertiefung_date_set-date-methods
// ========================================================

let heute = new Date();
heute.setFullYear(2222);
heute.setMonth(9);
console.log(heute);


// ========================================================
// Lev1_5_js-vertiefung_date_month-name
// ========================================================

let list = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

const monatsName = (datum)=>{
    let date = new Date(datum)

    console.log(date);
    console.log(list[date.getMonth()]);
}

monatsName("2001,3,4");
monatsName("2019, 12, 24");
monatsName("1410,07,15");


// ========================================================
// Lev2_1_js-vertiefung_date_tag-monat-jahr_getDate
// ========================================================

let today = new Date()
console.log(today);

let day = document.getElementById('day');
let month = document.getElementById('month');
let year = document.querySelector('#year');


day.innerHTML = today.getDate();
month.innerHTML += today.getMonth()+1;
year.innerHTML += today.getFullYear();