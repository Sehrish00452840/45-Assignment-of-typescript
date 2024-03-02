var guestlist = ["Sehar", "Kiran", "Noor", "Haya"];
var dontCome = guestlist[0];
console.log(dontCome, "nahi aa sakti");
guestlist.splice(0, 1, "Sundus;");
guestlist.forEach(function (guest) { return console.log("Asaalam U Alikum, ".concat(guest, ", would u like to take dinner with me?")); });
