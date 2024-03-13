// defines a type alias for an object
type item1 = {
    bookname    : string;
    colour      : string;
    price       : number;
    PublishYear : number; 
}

let BookName: item1 = {
    bookname       : "TypescriptBook",
    colour         : "Black",
    price          : 310,
    PublishYear    : 2000

};
console.log(BookName);