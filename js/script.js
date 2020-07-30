

var quotes = [
  {
  quote: 'Fear? I know not fear. There are only moments of confusion.',
  source: '-Hunter S. Thompson'
  
  },
  {
    quote: 'I have no special talent. I am only passionately curious.',
    source:'-Albert Einstein'
  },
  {
    quote: 'Is it not pleasure to learn and to repeat or practice from time to time what has been learned?',
    source:'-Confucius',
    citation:'Analects of Confucius'
  },
  {
    quote:'Failure is another stepping stone to greatness.',
    source: '-Oprah Winfrey'
  },
  {
    quote:'Happiness is not a goal, it is a by-product.',
    source:'-Eleanor Roosevelt',
    citation: 'You learn by living',
    year: 1961
  }
  
  ];
  // Function to generate random quote
  function getRandomQuote (){
  var randomNumber = Math.floor(Math.random () * quotes.length) ;
  
  return quotes[randomNumber];
    
  
  };
  
  // function to print random quote
  function printQuote (){
  var randQuote = getRandomQuote();
  var html = '';
  
    html+= '<p class = "quote">' +  randQuote.quote +  ' </p>';
    html+= '<p class = "source">'+ randQuote.source;
  
  if(quotes.citations){
    
      html+= '<span class = "citation">' + randQuote.citation + '</span>';
    }
  if(quotes.year){
  
    html+= '<span class = "year"> ' + randQuote.year + '</span>';
  
  }
  html+= '</p>';
  
  document.getElementById('quote-box').innerHTML= html;
   
  
    
  return html;
  }
  console.log(printQuote());
   document.getElementById('loadQuote').addEventListener("click", printQuote, false);
  
    