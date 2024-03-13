// Exercise 14 Guest list
let guestList: string[] = ["Ayesha", "Kiran", "Mairya", "Sundus", "Mahnoor" ];

guestList.forEach(guest =>{
    console.log(`Assalam-u-Alaikum My Dear ${guest}, I would like to invite you to dinner with me`)});

// Inform about the number of guests invited to dinner
let guestlength : number = guestList.length
console.log(`\nI am inviting ${guestlength} people to dinner.`);