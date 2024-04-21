// Quiz Questions

// Array of question with nested array of answers [1]
let questions = [
  {
    question:
      "Which of these country-inspired activities sounds like a perfect day to you?",
    answers: [
      {
        text: "Horseback riding through open fields",
        image:
          "https://images.unsplash.com/photo-1532876075969-8c016daf9242?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Horse Riding",
        tag: "lover",
      },
      {
        text: "Sitting around a bonfire with friends",
        image:
          "https://images.unsplash.com/photo-1619537903549-0981d6bca911?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "friends around a campfire",
        tag: "lover",
      },
      {
        text: "Going on a hayride through the countryside",
        image:
          "https://images.unsplash.com/photo-1623356300559-def50f7b0b37?q=80&w=2108&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "hay ride on a field",
        tag: "lover",
      },
      {
        text: "Visiting a local county fair and enjoying the festivities",
        image:
          "https://images.unsplash.com/photo-1536331014686-7c8210a64010?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "fairground rides",
        tag: "lover",
      },
    ],
  },
  {
    question: "Which of these romantic gestures appeals to you the most?",
    answers: [
      {
        text: "Writing love letters",
        image:
          "https://images.unsplash.com/photo-1529251333259-d36cccaf22ea?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "love letter",
        tag: "lover",
      },
      {
        text: "Going on a spontaneous road trip",
        image:
          "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "road trip",
        tag: "lover",
      },
      {
        text: "Having a picnic under the stars",
        image:
          ".https://images.unsplash.com/photo-1596241913242-b20788b3dfeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "picnic",
        tag: "lover",
      },
      {
        text: "Sending flowers with a heartfelt note",
        image:
          "https://images.unsplash.com/photo-1567696153798-9111f9cd3d0d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "flowers",
        tag: "lover",
      },
    ],
  },
  {
    question: "If you had to interrupt a wedding, what would be your reason?",
    answers: [
      {
        text: "Professing your love for someone",
        image:
          "https://images.unsplash.com/photo-1579208575657-c595a05383b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "hands holding heart",
        tag: "lover",
      },
      {
        text: "Stopping a mismatched marriage",
        image:
          "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "bride and groom",
        tag: "lover",
      },
      {
        text: "Rekindling an old flame",
        image:
          "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "friends on bikes",
        tag: "lover",
      },
      {
        text: "Objecting for a friend's happiness",
        image:
          "https://images.unsplash.com/photo-1588696191779-61dde1b83475?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "friends hugging",
        tag: "lover",
      },
    ],
  },
  {
    question:
      "If you could pick a colour to represent a significant chapter of your life, which would it be?",
    answers: [
      {
        text: "Fiery red for passion and intensity",
        image:
          "https://images.unsplash.com/photo-1518893063132-36e46dbe2428?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "red",
        tag: "lover",
      },
      {
        text: "Cool blue for tranquility and introspection",
        image:
          "https://images.unsplash.com/photo-1464618663641-bbdd760ae84a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "blue",
        tag: "lover",
      },
      {
        text: "Vibrant yellow for joy and optimism",
        image:
          "https://images.unsplash.com/photo-1455659817273-f96807779a8a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "sunflowers",
        tag: "lover",
      },
      {
        text: "Mysterious black for depth and mystery",
        image:
          "https://images.unsplash.com/photo-1554050857-c84a8abdb5e2?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "black",
        tag: "lover",
      },
    ],
  },
  {
    question: "Pick a setting for a night out with friends:",
    answers: [
      {
        text: "Trendy nightclub in the city",
        image:
          "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "night club",
        tag: "lover",
      },
      {
        text: "Cozy coffee shop with live music",
        image:
          "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "coffee shop",
        tag: "lover",
      },
      {
        text: "Retro-themed roller skating rink",
        image:
          "https://images.unsplash.com/photo-1640100800695-a055a94ca576?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "roller skates",
        tag: "lover",
      },
      {
        text: "Rooftop bar overlooking the skyline",
        image:
          "https://images.unsplash.com/photo-1613066697301-d7dccfc86bb5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "rooftop bar",
        tag: "lover",
      },
    ],
  },
  {
    question:
      "Which of these best describes your approach to handling rumours or gossip about you?",
    answers: [
      {
        text: "Confronting the source directly",
        image: "./img/something.png",
        alt: "#",
        tag: "lover",
      },
      {
        text: "Ignoring it and letting it die down",
        image: "./img/something.png",
        alt: "#",
        tag: "lover",
      },
      {
        text: "Addressing it through art or music",
        image: "./img/something.png",
        alt: "#",
        tag: "lover",
      },
      {
        text: "Embracing it and turning it into a joke",
        image: "./img/something.png",
        alt: "#",
        tag: "lover",
      },
    ],
  },
  {
    question: "Which symbol of love holds the most significance for you?",
    answers: [
      {
        text: "Exchanging promise rings with your partner",
        image:
          "https://images.unsplash.com/photo-1626546468211-04e9beb78d4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "promise rings",
        tag: "lover",
      },
      {
        text: "Planting a tree together as a symbol of growth and commitment",
        image:
          "https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "blossom tree",
        tag: "lover",
      },
      {
        text: "Creating a scrapbook of shared memories and adventures",
        image:
          "https://images.unsplash.com/photo-1677658287194-2208467d7280?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "scrapbook",
        tag: "lover",
      },
      {
        text: "Writing love notes and hiding them in unexpected places for your partner to find",
        image:
          "https://images.unsplash.com/photo-1527168027773-0cc890c4f42e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "love notes",
        tag: "lover",
      },
    ],
  },
  {
    question: "If you were to write a fictional story, what genre would it be?",
    answers: [
      {
        text: "Romance",
        image:
          "https://images.unsplash.com/photo-1524194838522-6264794f485d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "couple holding hands",
        tag: "lover",
      },
      {
        text: "Mystery",
        image:
          "https://images.unsplash.com/photo-1560005490-8ce6d5357ffa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "light on notebook",
        tag: "lover",
      },
      {
        text: "Fantasy",
        image:
          "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2094&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "ship in the sky",
        tag: "lover",
      },
      {
        text: "Historical fiction",
        image:
          "https://images.unsplash.com/photo-1472173148041-00294f0814a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "old books",
        tag: "lover",
      },
    ],
  },
  {
    question:
      "If you could escape to a secluded cabin in the woods for a weekend, what would you bring with you?",
    answers: [
      {
        text: "A journal and pen to capture your thoughts and inspirations",
        image:
          "https://images.unsplash.com/photo-1579017308347-e53e0d2fc5e9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "journal and pen",
        tag: "lover",
      },
      {
        text: "A stack of your favourite books to get lost in",
        image:
          "https://images.unsplash.com/photo-1509266272358-7701da638078?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Ym9va3N8ZW58MHx8MHx8fDI%3D",
        alt: "books",
        tag: "lover",
      },
      {
        text: "A guitar or musical instrument to create melodies surrounded by nature",
        image:
          "https://images.unsplash.com/photo-1621784166258-c6fdfff31879?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "girl playing guitar",
        tag: "lover",
      },
      {
        text: "Ingredients for baking or cooking cozy meals by the fireplace",
        image:
          "https://images.unsplash.com/photo-1540660290370-8aa90e451e8a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "baking",
        tag: "lover",
      },
    ],
  },
  {
    question:
      "What's your favorite way to spend a late-night moment of solitude?",
    answers: [
      {
        text: "Stargazing alone on a quiet rooftop",
        image:
          "https://images.unsplash.com/photo-1609000142140-fb449c139c82?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "telescope",
        tag: "lover",
      },
      {
        text: "Taking a solitary walk under the moonlight",
        image:
          "https://images.unsplash.com/photo-1530172888244-f3520bbeaa55?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "girl in city at night",
        tag: "lover",
      },
      {
        text: "Writing poetry or journaling by candlelight",
        image:
          "https://images.unsplash.com/photo-1640095889747-2090ee12fa7d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "candle",
        tag: "lover",
      },
      {
        text: "Listening to music with headphones on, lost in your thoughts",
        image:
          "https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "headphones",
        tag: "lover",
      },
    ],
  },
];

// Array of results
let result = [
  {
    era: "debut",
    description: "dkljfalfjna",
    image: "https://images.unsplash.com/photo-1532876075969-8c016daf9242?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Image Alt",
    value: 0,
  },
  {
    era: "fearless",
    description: "dkljfalfjna",
    image: "https://images.unsplash.com/photo-1532876075969-8c016daf9242?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Image Alt",
    value: 0,
  },
  {
    era: "speak now",
    description: "dkljfalfjna",
    image: "https://images.unsplash.com/photo-1532876075969-8c016daf9242?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Image Alt",
    value: 0,
  },
  {
    era: "red",
    description: "dkljfalfjna",
    image: "https://images.unsplash.com/photo-1532876075969-8c016daf9242?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Image Alt",
    value: 0,
  },
  {
    era: "1989",
    description: "dkljfalfjna",
    image: "https://images.unsplash.com/photo-1532876075969-8c016daf9242?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Image Alt",
    value: 0,
  },
  {
    era: "reputation",
    description: "dkljfalfjna",
    image: "https://images.unsplash.com/photo-1532876075969-8c016daf9242?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Image Alt",
    value: 0,
  },
  {
    era: "lover",
    description: "dkljfalfjna",
    image: "https://images.unsplash.com/photo-1532876075969-8c016daf9242?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Image Alt",
    value: 0,
  },
  {
    era: "folklore",
    description: "dkljfalfjna",
    image: "https://images.unsplash.com/photo-1532876075969-8c016daf9242?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Image Alt",
    value: 0,
  },
  {
    era: "evermore",
    description: "dkljfalfjna",
    image: "https://images.unsplash.com/photo-1532876075969-8c016daf9242?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Image Alt",
    value: 0,
  },
  {
    era: "midnights",
    description: "dkljfalfjna",
    image: "https://images.unsplash.com/photo-1532876075969-8c016daf9242?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Image Alt",
    value: 0,
  },
];

// Element Selection
const questionTag = document.querySelector('h2');
const startQuiz = document.querySelector('button');
const introText = document.getElementById('intro-text');
const optionButtons = document.getElementsByClassName('image-button');

// Button Wrapper
const answersWrapper = document.getElementById("answers");

// Button HTML Tags
const answerOne = document.createElement("div");
const answerOneButton = document.createElement("button");
const answerOneImg = document.createElement("img");
const answerOneQuestion = document.createElement("p");

const answerTwo = document.createElement("div");
const answerTwoButton = document.createElement("button");
const answerTwoImg = document.createElement("img");
const answerTwoQuestion = document.createElement("p");

const answerThree = document.createElement("div");
const answerThreeButton = document.createElement("button");
const answerThreeImg = document.createElement("img");
const answerThreeQuestion = document.createElement("p");

const answerFour = document.createElement("div");
const answerFourButton = document.createElement("button");
const answerFourImg = document.createElement("img");
const answerFourQuestion = document.createElement("p");

// Sets the loop index
let i = 0;
let chosenAnswer = null;

// Element content creation / change function
function displayQuestion(event) {
  // Append new buttons to the wrapper
  if (i == 0) {
    introText.style.display = "none";
    startQuiz.textContent = 'Next';

    answersWrapper.appendChild(answerOne);
    answerOne.setAttribute("class", "image-button");
    answerOne.appendChild(answerOneButton);
    answerOneButton.appendChild(answerOneImg);
    answerOne.appendChild(answerOneQuestion);

    answersWrapper.appendChild(answerTwo);
    answerTwo.setAttribute("class", "image-button");
    answerTwo.appendChild(answerTwoButton);
    answerTwoButton.appendChild(answerTwoImg);
    answerTwo.appendChild(answerTwoQuestion);

    answersWrapper.appendChild(answerThree);
    answerThree.setAttribute("class", "image-button");
    answerThree.appendChild(answerThreeButton);
    answerThreeButton.appendChild(answerThreeImg);
    answerThree.appendChild(answerThreeQuestion);

    answersWrapper.appendChild(answerFour);
    answerFour.setAttribute("class", "image-button");
    answerFour.appendChild(answerFourButton);
    answerFourButton.appendChild(answerFourImg);
    answerFour.appendChild(answerFourQuestion);
  }

  // Updates the page content
  if (i <= 9) {
    // For loop for the button on the page
    for (let i = 0; i < optionButtons.length; i++) {
      optionButtons[i].addEventListener('click', function(){
        chosenAnswer = answers[i].tag;
      });
    }

    // forEach over the result array and increment the value property
    result.forEach(function(resultsObject) {
      if (resultsObject.era === chosenAnswer) {
        resultsObject.value++;
      }
    });

    // Updates header H2 to be current question
    questionTag.textContent = questions[i].question;

    // Gets the answers array
    let answers = questions[i].answers;

    // Text Content
    answerOneQuestion.textContent = answers[0].text;
    answerTwoQuestion.textContent = answers[1].text;
    answerThreeQuestion.textContent = answers[2].text;
    answerFourQuestion.textContent = answers[3].text;

    // Image Content
    answerOneImg.src = answers[0].image;
    answerOneImg.alt = answers[0].alt;

    answerTwoImg.src = answers[1].image;
    answerTwoImg.alt = answers[1].alt;

    answerThreeImg.src = answers[2].image;
    answerThreeImg.alt = answers[2].alt;

    answerFourImg.src = answers[3].image;
    answerFourImg.alt = answers[3].alt;

    i++;
  } else {
    // forEach over the result array and increment the value property
    result.forEach(function(resultsObject) {
      if (resultsObject.era === chosenAnswer) {
        resultsObject.value++;
      }
    });

    result.forEach(function(resultsObject) {
      if (resultsObject.era === chosenAnswer) {
        resultsObject.value++;
      }
      
      // console.log(resultsObject.era + ' : ' + resultsObject.value);
    });

    console.log('add result here');
  }
}

// Event Listening to start quiz
startQuiz.addEventListener("click", displayQuestion);
