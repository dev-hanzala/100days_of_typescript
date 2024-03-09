var guests = ["Ada Lovelace", "Edward Hubble", "Albert Eienstein", "Amelia Earheart", "Stephen Hawking", "Marie Curie"];
while (guests.length > 2) {
    var removedGuests = guests.pop();
    console.log("Sorry ".concat(removedGuests, ", I can't invite you."));
}
;
guests.forEach(function (guests) {
    console.log(guests);
});
