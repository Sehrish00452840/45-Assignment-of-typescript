let guestlist = ["Sehar", "Kiran","Noor", "Haya"];

let dontCome = guestlist[0];

console.log(dontCome, "nahi aa sakti");

guestlist.splice(0, 1, "Sundus;");

guestlist.forEach(guest => console.log(`Asaalam U Alikum, ${guest}, would u like to take dinner with me?`));
