var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var guestList = ["Ramsha", "Rafia", "Uzair", "Arbaz"];
console.log("Dinner Invitations:");
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner with me. It would be an honor to have your company."));
});
var guestWhoCantMakeIt = "Arbaz";
console.log("".concat(guestWhoCantMakeIt, " can't make it to the dinner."));
var newGuest = "Sara";
var index = guestList.indexOf(guestWhoCantMakeIt);
if (index !== -1) {
    guestList[index] = newGuest;
}
console.log("\nUpdated Dinner Invitations:");
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner with me. It would be an honor to have your company."));
});
// More guests to invite
var moreGuests = ["Mazhar", "Hassan", "Rohaan"];
guestList.splice.apply(guestList, __spreadArray([-3, 3], moreGuests, false));
console.log("\nAdditional Dinner Invitations:");
moreGuests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner with me. It would be an honor to have your company."));
});
console.log("\nGood news! We found a bigger dinner table.");
guestList.unshift("AUROBA");
guestList.splice(Math.floor(guestList.length / 2), 0, "MUSKAN");
guestList.push("IQRA");
console.log("\nFinal Dinner Invitations:");
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner with me. It would be an honor to have your company."));
});
// Printing the number of people invited to dinner
console.log("\nNumber of people invited to dinner: ".concat(guestList.length));
