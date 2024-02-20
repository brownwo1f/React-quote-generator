import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [quote, setQuote] = useState(
    "If you want to lift yourself up, lift up someone else."
  );
  const [author, setAuthor] = useState("Booker T. Washington");

  const getQuote = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    let url = "https://type.fit/api/quotes";
    const response = await fetch(url);
    const allQuotes = await response.json();
    const indx = Math.floor(Math.random() * allQuotes.length);
    const qresult = allQuotes[indx].text;
    const auth = allQuotes[indx].author;
    const filterAuth = auth.replace(", type.fit", "");
    setQuote(qresult);
    setAuthor(filterAuth);
  };

  return (
    <div id="quote-box">
      <p id="text">{quote}</p>
      <p id="author">~{author}</p>
      <div id="btns">
        <button type="button" className="btn">
          <a id="tweet-quote" href="twitter.com/intent/tweet">
            Tweet
          </a>
        </button>
        <button type="button" className="btn" id="new-quote" onClick={getQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
};

export default App;
