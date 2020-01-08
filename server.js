const quote = document.getElementById("quote");
const season = document.getElementById("season");
const photo = document.getElementById("photo").src;
const author = document.getElementById("author");
const getNewQuote = document.getElementById("get_quote");


getNewQuote.addEventListener('click', getMantra)

//Get quotes
async function getMantra() {
  const response = await fetch("officequotes.json");
  const myJson = await response.json();
  const myJsonSize = JSON.stringify(myJson).length;
  const keyCount = Object.keys(myJson).length;
  //console.log(myJsonSize);
  console.log(keyCount);
  //let num = Math.floor(Math.random() * Math.floor(myJsonSize));
  let num = Math.floor(Math.random() * 53) + 1  
  //var randChoice = Math.floor(Math.random() * json["data"]["children"].length);
  console.log(num);
 console.log(myJson[num].text)
  if (myJson[num].text === null || myJson[num].from === null) {
    quote.textContent =
      "A hero is one who knows how to hang on for one minute longer.";
    author.textContent = "Norwegian proverb";
  } else {
    quote.textContent = "'"+myJson[num].quote+ "'";
    author.textContent = myJson[num].character;
    document.getElementById("pic").src = myJson[num].pic;
    //season.textContent = "from "+ myJson[num].season;

  }
//   if ( a=== null || mantraData.text) {
//     mantra.textContent = "Inhale love. Exhale gratitude.";
//   } else {

// var json = JSON.parse(myJson);

// console.log(myJson);
// console.log(JSON.stringify(myJson[num].from));
// console.log(JSON.stringify(myJson).length);

// }
}

getMantra()