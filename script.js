document.addEventListener('DOMContentLoaded', function () {
  const quotes = [
    {
      text: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
    },
    {
      text: "Everything you can imagine is real.",
      author: "Pablo Picasso"
    },
    {
      text: "Do one thing every day that scares you.",
      author: "Eleanor Roosevelt"
    },
    {
      text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill"
    },
    {
      text: "You miss 100% of the shots you don’t take.",
      author: "Wayne Gretzky"
    },
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      text: "Happiness is not something ready-made. It comes from your own actions.",
      author: "Dalai Lama"
    },
    {
      text: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius"
    },
    {
      text: "In the middle of every difficulty lies opportunity.",
      author: "Albert Einstein"
    },
    {
      text: "Dream big and dare to fail.",
      author: "Norman Vaughan"
    }
  ];

  let quoteText = document.getElementById('quote-text');
  let quoteAuthor = document.getElementById('quote-author');
  let quoteTimer = document.getElementById('quote-timer');

  let currentIndex = 0;
  let countdown = 5;

  function showQuote(index) {
    quoteText.textContent = `“${quotes[index].text}”`;
    quoteAuthor.textContent = `– ${quotes[index].author}`;
    countdown = 5;
    quoteTimer.textContent = `Next Quote in ${countdown}s`;
  }

  showQuote(currentIndex);

  setInterval(() => {
    countdown--;
    if (countdown <= 0) {
      currentIndex = (currentIndex + 1) % quotes.length;
      showQuote(currentIndex);
    } else {
      quoteTimer.textContent = `Next Quote in ${countdown}s`;
    }
  }, 1000);
});