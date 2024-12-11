const quetes=[
    {"content": "The best way to predict the future is to create it.", "author": "Peter Drucker"},
    {"content": "Do what you can, with what you have, where you are.", "author": "Theodore Roosevelt"},
    {"content": "The only limit to our realization of tomorrow will be our doubts of today.", "author": "Franklin D. Roosevelt"},
    {"content": "Success usually comes to those who are too busy to be looking for it.", "author": "Henry David Thoreau"},
    {"content": "Don't watch the clock; do what it does. Keep going.", "author": "Sam Levenson"},
    {"content": "You miss 100% of the shots you don’t take.", "author": "Wayne Gretzky"},
    {"content": "Believe you can and you're halfway there.", "author": "Theodore Roosevelt"},
    {"content": "Hardships often prepare ordinary people for an extraordinary destiny.", "author": "C.S. Lewis"},
    {"content": "The way to get started is to quit talking and begin doing.", "author": "Walt Disney"},
    {"content": "Opportunities don't happen. You create them.", "author": "Chris Grosser"},
    {"content": "It is during our darkest moments that we must focus to see the light.", "author": "Aristotle"},
    {"content": "Happiness is not something ready-made. It comes from your own actions.", "author": "Dalai Lama"},
    {"content": "Success is not final, failure is not fatal: It is the courage to continue that counts.", "author": "Winston Churchill"},
    {"content": "Your time is limited, so don’t waste it living someone else’s life.", "author": "Steve Jobs"},
    {"content": "What lies behind us and what lies before us are tiny matters compared to what lies within us.", "author": "Ralph Waldo Emerson"},
    {"content": "It does not matter how slowly you go as long as you do not stop.", "author": "Confucius"},
    {"content": "In the middle of every difficulty lies opportunity.", "author": "Albert Einstein"},
    {"content": "Life is 10% what happens to us and 90% how we react to it.", "author": "Charles R. Swindoll"},
    {"content": "Keep your face always toward the sunshine—and shadows will fall behind you.", "author": "Walt Whitman"},
    {"content": "If you want to achieve greatness stop asking for permission.", "author": "Anonymous"},
    {"content": "Start where you are. Use what you have. Do what you can.", "author": "Arthur Ashe"},
    {"content": "Do one thing every day that scares you.", "author": "Eleanor Roosevelt"},
    {"content": "Dream big and dare to fail.", "author": "Norman Vaughan"},
    {"content": "The harder I work, the luckier I get.", "author": "Gary Player"},
    {"content": "Don’t wait. The time will never be just right.", "author": "Napoleon Hill"},
    {"content": "Don’t be pushed by your problems. Be led by your dreams.", "author": "Ralph Waldo Emerson"},
    {"content": "The secret of getting ahead is getting started.", "author": "Mark Twain"},
    {"content": "The only way to do great work is to love what you do.", "author": "Steve Jobs"},
    {"content": "Act as if what you do makes a difference. It does.", "author": "William James"},
    {"content": "Life is either a daring adventure or nothing at all.", "author": "Helen Keller"},
    {"content": "Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.", "author": "Jamie Paolinetti"},
    {"content": "Do not wait to strike till the iron is hot, but make it hot by striking.", "author": "William Butler Yeats"},
    {"content": "You don’t have to be great to start, but you have to start to be great.", "author": "Zig Ziglar"},
    {"content": "Don't be afraid to give up the good to go for the great.", "author": "John D. Rockefeller"},
    {"content": "I am not a product of my circumstances. I am a product of my decisions.", "author": "Stephen Covey"},
    {"content": "If you're going through hell, keep going.", "author": "Winston Churchill"},
    {"content": "Perseverance is not a long race; it is many short races one after the other.", "author": "Walter Elliot"},
    {"content": "Do not go where the path may lead, go instead where there is no path and leave a trail.", "author": "Ralph Waldo Emerson"},
    {"content": "The best revenge is massive success.", "author": "Frank Sinatra"},
    {"content": "Challenges are what make life interesting and overcoming them is what makes life meaningful.", "author": "Joshua J. Marine"},
    {"content": "Success is walking from failure to failure with no loss of enthusiasm.", "author": "Winston Churchill"},
    {"content": "Don’t count the days, make the days count.", "author": "Muhammad Ali"},
    {"content": "The only person you are destined to become is the person you decide to be.", "author": "Ralph Waldo Emerson"},
    {"content": "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", "author": "Ralph Waldo Emerson"},
    {"content": "Your big opportunity may be right where you are now.", "author": "Napoleon Hill"},
    {"content": "Small deeds done are better than great deeds planned.", "author": "Peter Marshall"},
    {"content": "It always seems impossible until it's done.", "author": "Nelson Mandela"},
    {"content": "What we achieve inwardly will change outer reality.", "author": "Plutarch"},
    {"content": "The only thing standing between you and your goal is the story you keep telling yourself.", "author": "Jordan Belfort"}
  ]
  
const blockquote=document.querySelector("blockquote");
const writer=document.querySelector("span");
const button=document.querySelector("button");

async function getNewQuote(){
    const randomNumber = Math.floor(Math.random() * 50);
    blockquote.innerText=quetes[randomNumber].content;
    writer.innerText=quetes[randomNumber].author;
};

getNewQuote();

button.addEventListener("click",getNewQuote);
