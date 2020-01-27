const quote = document.getElementById("quote");
const season = document.getElementById("season");
// const photo = document.getElementById("photo").src;
const author = document.getElementById("author");
const getNewQuote = document.getElementById("get_quote");

getNewQuote.addEventListener("click", getMantra);

//Get quotes
async function getMantra() {
  const response = await fetch("officequotes.json");
  const myJson = await response.json();
  //const myJsonSize = JSON.stringify(myJson).length;
  const keyCount = Object.keys(myJson).length;
  //console.log(myJsonSize);
  console.log(keyCount);
  //let num = Math.floor(Math.random() * Math.floor(myJsonSize));
  let num = Math.floor(Math.random() * keyCount) + 1;
  console.log(myJson[num].quote);

  if (
    myJson[num].quote === null ||
    myJson[num].character === null ||
    myJson[num].pic === null
  ) {
    quote.textContent = "What's the scuttlebutt?";
    author.textContent = "Dwight Schrute";
    document.getElementById("pic").src = "./img/dwight.png";
  } else {
    quote.textContent = "'" + myJson[num].quote + "'";
    author.textContent = myJson[num].character;
    document.getElementById("pic").src = myJson[num].pic;
    //season.textContent = "from "+ myJson[num].season;
  }
}

getMantra();
