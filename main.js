let quote = document.querySelector('#quote');
let author =  document.querySelector('#author');
let btn = document.querySelector('#btn');

let getQuote = () => {
    fetch("https://api.quotable.io/random")
        .then((data) => data.json())
        .then((item) => {
            quote.innerText = item.content;
            author.innerText = item.author;
        });
};

/* fetch("https://api.quotable.io/random")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error)); */


window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);