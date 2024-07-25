let guestList: string[] = ["Ramsha", "Rafia", "Uzair", "Arbaz"];

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

// More guests to invite
const moreGuests: string[] = ["Mazhar", "Hassan", "Rohaan"];
guestList.splice(-3, 3, ...moreGuests);

console.log("\nAdditional Dinner Invitations:");
moreGuests.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited to dinner with me. It would be an honor to have your company.`);
});

console.log("\nGood news! We found a bigger dinner table.");

guestList.unshift("AUROBA");
guestList.splice(Math.floor(guestList.length / 2), 0, "MUSKAN");
guestList.push("IQRA");

console.log("\nFinal Dinner Invitations:");
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited to dinner with me. It would be an honor to have your company.`);
});

// Printing the number of people invited to dinner
console.log(`\nNumber of people invited to dinner: ${guestList.length}`);
