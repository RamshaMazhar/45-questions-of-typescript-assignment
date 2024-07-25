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
const moreGuests = ["Mazhar", "Rohaan", "Hassan"];
guestList.push(...moreGuests);
console.log("\nAdditional Dinner Invitations:");
moreGuests.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited to dinner with me. It would be an honor to have your company.`);
});
console.log("\nGood news! We found a bigger dinner table.");
guestList.unshift("MAZHAR");
guestList.splice(Math.floor(guestList.length / 2), 0, "Mazhar");
guestList.push("Rohaan");
console.log("\nFinal Dinner Invitations:");
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited to dinner with me. It would be an honor to have your company.`);
});
console.log("\nSorry, we can only invite two people for dinner.");
while (guestList.length > 2) {
    const removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}
console.log("\nRemaining Guests:");
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});
guestList.splice(-2);
console.log("\nFinal Guest List:");
console.log(guestList);
