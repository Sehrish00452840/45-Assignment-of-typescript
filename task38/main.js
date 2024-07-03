"use strict";
//making function of two parameters
function describe_city(city, country = "Pakistan") {
    //message by heading case
    console.log(`${city.replace(/\b\w/g, ch => ch.toUpperCase())} is in ${country}`);
}
//call the function by three different cities
describe_city("karachi");
describe_city("lahore");
describe_city("ankara", "Turkiye");
