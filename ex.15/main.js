"use strict";
let guestList = ["Ramsha", "Rafia", "Uzair", "Arbaz"];
console.log("Dinner Invitations:");
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited to dinner with me. It would be an honor to have your company.`);
});
const guestWhoCantMakeIt = "Arbaz";
console.log(`${guestWhoCantMakeIt} can't make it to the dinner.`);
const newGuest = "Sara";
const index = guestList.indexOf(guestWhoCantMakeIt);
if (index !== -1) {
    guestList[index] = newGuest;
}
console.log("\nUpdated Dinner Invitations:");
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited to dinner with me. It would be an honor to have your company.`);
});
