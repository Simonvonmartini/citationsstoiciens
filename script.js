const quotes = [
    "Citation 1",
    "Citation 2",
    "Citation 3",
    // Ajoutez autant de citations que vous le souhaitez
];

const today = new Date();
const dayOfYear = today.getDate();

// Utilisez la date du jour pour sélectionner une citation
const selectedQuote = quotes[dayOfYear % quotes.length];
const quoteElement = document.getElementById("quote");
quoteElement.textContent = selectedQuote;
