function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love Typescript"; }
    console.log("You selected \"".concat(size, "\" size shirt with the \"").concat(message, "\" prints on it."));
}
make_shirt();
make_shirt("medium");
make_shirt("small", "Doremoon");
make_shirt("medium", "Avengers The Kand Dynasty");
make_shirt("large", "old fashion");
