const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

//Show loading
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// Hide loading
function complete() {
  if (!loader.hidden) {
    quoteContainer.hidden = false;
    loader.hidden = true;
  }
}

// Get quote from API
async function getQuote() {
  loading();
  const url = "https://type.fit/api/quotes";
  try {
    const response = await fetch(url);
    const data = await response.json();
    let index = Math.floor(Math.random() * data.length);
    const quote = data[index];
    console.log(quote.text);

    if (quote.text.length > 120) {
      quoteText.classList.add("long-quote");
    } else {
      quoteText.classList.remove("long-quote");
    }
    quoteText.innerText = quote.text;

    if (quote.author) {
      authorText.innerText = quote.author;
    } else {
      authorText.innerText = "Unknown";
    }

    // Stop loader, show quote
    complete();
  } catch (error) {
    console.log("Error: no quotes", error);
  }
}

// Tweet Quote
function tweetQuote() {
  const quote = quoteText.innerHTML;
  const author = authorText.innerText;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  window.open(twitterUrl, "_blank");
}

// Event Listeners
newQuoteBtn.addEventListener("click", getQuote);
twitterBtn.addEventListener("click", tweetQuote);

// On load
getQuote();
