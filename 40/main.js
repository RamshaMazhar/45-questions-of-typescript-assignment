// Define the function to create an album object
function make_album(artist, title, tracks) {
    // Create an album object
    var album = {
        artist: artist,
        title: title,
    };
    // Add the number of tracks if provided
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Create and print album objects for specific artists
var album1 = make_album('Atif Aslam', 'Doorie');
var album2 = make_album('Shreya Ghoshal', 'Teri Meri Kahaani', 10);
var album3 = make_album('Neha Kakkar', 'Manali Trance', 8);
console.log(album1); // { artist: 'Atif Aslam', title: 'Doorie' }
console.log(album2); // { artist: 'Shreya Ghoshal', title: 'Teri Meri Kahaani', tracks: 10 }
console.log(album3); // { artist: 'Neha Kakkar', title: 'Manali Trance', tracks: 8 }
