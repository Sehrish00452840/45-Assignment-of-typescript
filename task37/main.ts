function make_shirt(size: string = `Large` , message: string = `I love Typescript`) {
    console.log(`You selected "${size}" size shirt with the "${message}" prints on it.`);
}

make_shirt();
make_shirt("medium");
make_shirt("small", "Doremoon");
make_shirt("medium", "Avengers The Kand Dynasty");
make_shirt("large", "old fashion");