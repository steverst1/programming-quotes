let q = document.querySelector('q'),
	c = document.querySelector('cite');

async function getQuotes() {
  const response = await fetch('quotes.json');
  const quotes = await response.json();
  let wisdom = quotes[Math.floor(Math.random() * quotes.length)];
	let [developer, quote] = Object.values(wisdom);
	q.innerText = quote;
	c.innerText = developer;
}

getQuotes();

function copy(e){
  const el = document.createElement('textarea');
   el.value = q.innerText;
   document.body.appendChild(el);
   el.select();
   document.execCommand('copy');
   document.body.removeChild(el);
   e.innerText = 'copied';
   e.style.color='black'
}

function share(){
    let twitter = "https://twitter.com/intent/tweet";
    window.open(twitter+"?text="+q.innerText+" "+c.innerText);
}