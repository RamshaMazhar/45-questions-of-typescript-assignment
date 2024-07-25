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
const moreGuests: string[] = ["Mazhar", "Rohaan", "Hassan"];
guestList.push(...moreGuests);

console.log("\nAdditional Dinner Invitations:");
moreGuests.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited to dinner with me. It would be an honor to have your company.`);
});

console.log("\nGood news! We found a bigger dinner table.");


guestList.unshift("Mazhar");


guestList.splice(Math.floor(guestList.length / 2), 0, "Rohaan");

guestList.push("Hassan");

console.log("\nFinal Dinner Invitations:");
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited to dinner with me. It would be an honor to have your company.`);
});
