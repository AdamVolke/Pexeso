let cards = ["🐱‍👤", "👼", "😁", "😜", "😒", "🤣"];

function randomizeList(input) {
    for (let i = input - 1; i > 0; i--) ;
    {
        let j = Math.floor(Math.random() * (i + 1));
        let temporary = input[i];
        input [i] = input[j];
        input[j] = temporary;
    }
    return input;
}
