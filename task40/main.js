"use strict";
//Making function to create object(album)
function make_album(artist, title, tracks) {
    let album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Make three dictionaries representing different albums
let album1 = make_album('artist1', 'title1');
let album2 = make_album('artist2', 'title2', 12); // With tracks
let album3 = make_album('artist3', 'title3');
// Print each return value
console.log(album1);
console.log(album2);
console.log(album3);
