// Define an interface for the album object
interface Album {
    artist: string;
    title: string;
    tracks?: number; // Optional property
}

// Define the function to create an album object
function make_album(artist: string, title: string, tracks?: number): Album {
    // Create an album object
    const album: Album = {
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
const album1 = make_album('Atif Aslam', 'Doorie');
const album2 = make_album('Shreya Ghoshal', 'Teri Meri Kahaani', 10);
const album3 = make_album('Neha Kakkar', 'Manali Trance', 8);

console.log(album1); // { artist: 'Atif Aslam', title: 'Doorie' }
console.log(album2); // { artist: 'Shreya Ghoshal', title: 'Teri Meri Kahaani', tracks: 10 }
console.log(album3); // { artist: 'Neha Kakkar', title: 'Manali Trance', tracks: 8 }
