// Quiz Questions

// Array of question with nested array of answers [1]
let questions = [
  {
    question: "Which of these country-inspired activities sounds like a perfect day to you?",
    answers: [
      {
        text: "Horseback riding through open fields",
        image:"https://images.unsplash.com/photo-1532876075969-8c016daf9242?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: 'Horse Riding',
        tag:"lover"
      },
      {
        text: "Sitting around a bonfire with friends",
        image:"./img/something.png",
        tag:"lover"
      },
      {
        text: "Going on a hayride through the countryside",
        image:"./img/something.png",
        tag:"lover"
      },
      {
        text: "Visiting a local county fair and enjoying the festivities",
        image:"./img/something.png",
        tag:"lover"
      }
    ]
  },
  {
    question: "Which of these romantic gestures appeals to you the most?",
    answers: [
      {
        text: "Writing love letters",
        image:"./img/something.png",
        tag:"lover"
      },
      {
        text: "Going on a spontaneous road trip",
        image:"./img/something.png",
        tag:"lover"
      },
      {
        text: "Having a picnic under the stars",
        image:"./img/something.png",
        tag:"lover"
      },
      {
        text: "Sending flowers with a heartfelt note",
        image:"./img/something.png",
        tag:"lover"
      }
    ]
  },
  {
    question: "If you had to interrupt a wedding, what would be your reason?",
    answers: [
      {
        text: "Professing your love for someone",
        image:"./img/something.png",
        tag:"lover"
      },
      {
        text: "Stopping a mismatched marriage",
        image:"./img/something.png",
        tag:"lover"
      },
      {
        text: "Rekindling an old flame",
        image:"./img/something.png",
        tag:"lover"
      },
      {
        text: "Objecting for a friend's happiness",
        image:"./img/something.png",
        tag:"lover"
    }
    ]
  },
  {
    question: "If you could pick a colour to represent a significant chapter of your life, which would it be?",
    answers: [
      {
        text: "Fiery red for passion and intensity",
        image:"./img/something.png",
        tag:"lover"
      },
      {
        text: "Cool blue for tranquility and introspection",
        image:"./img/something.png",
        tag:"lover"
      },
      {
        text: "Vibrant yellow for joy and optimism",
        image:"./img/something.png",
        tag:"lover"
      },
      {
        text: "Mysterious black for depth and mystery",
        image:"./img/something.png",
        tag:"lover"
      }
    ]
  },
  {
    question: "Pick a setting for a night out with friends:",
    answers: [
      {
        text: "Trendy nightclub in the city",
        image:"./img/something.png",
        tag:"lover"
      },
      {
        text: "Cozy coffee shop with live music",
        image:"./img/something.png",
        tag:"lover"
      },
      {
        text: "Retro-themed roller skating rink",
        image:"./img/something.png",
        tag:"lover"
      },
      {
        text: "Rooftop bar overlooking the skyline",
        image:"./img/something.png",
        tag:"lover"
      }
    ]
  },
  {
    question: "Which of these best describes your approach to handling rumours or gossip about you?",
    answers: [
      {
        text: "Confronting the source directly",
        image:"./img/something.png",
        tag:"lover"
      },
      {
        text: "Ignoring it and letting it die down",
        image:"./img/something.png",
        tag:"lover"
      },
      {
        text: "Addressing it through art or music",
        image:"./img/something.png",
        tag:"lover"
      },
      {
        text: "Embracing it and turning it into a joke",
        image:"./img/something.png",
        tag:"lover"
      }
    ]
  },
  {
    question: "Which symbol of love holds the most significance for you?",
    answers: [
      {
        text: "Exchanging promise rings with your partner",
        image:"./img/something.png",
        tag:"lover"
      },
      {
        text: "Planting a tree together as a symbol of growth and commitment",
        image:"./img/something.png",
        tag:"lover"
      },
      {
        text: "Creating a scrapbook of shared memories and adventures",
        image:"./img/something.png",
        tag:"lover"
      },
      {
        text: "Writing love notes and hiding them in unexpected places for your partner to find",
        image:"./img/something.png",
        tag:"lover"
      }
    ]
  },
  {
    question: "If you were to write a fictional story, what genre would it be?",
    answers: [
      {
        text: "Romance",
        image:"./img/something.png",
        tag:"lover"
      },
      {
        text: "Mystery",
        image:"./img/something.png",
        tag:"lover"
      },
      {
        text: "Fantasy",
        image:"./img/something.png",
        tag:"lover"
      },
      {
        text: "Historical fiction",
        image:"./img/something.png",
        tag:"lover"
      }
    ]
  },
  {
    question: "If you could escape to a secluded cabin in the woods for a weekend, what would you bring with you?",
    answers: [
      {
        text: "A journal and pen to capture your thoughts and inspirations",
        image:"./img/something.png",
        tag:"lover"
      },
      {
        text: "A stack of your favourite books to get lost in",
        image:"./img/something.png",
        tag:"lover"
      },
      {
        text: "A guitar or musical instrument to create melodies surrounded by nature",
        image:"./img/something.png",
        tag:"lover"
      },
      {
        text: "Ingredients for baking or cooking cozy meals by the fireplace",
        image:"./img/something.png",
        tag:"lover"
      }
    ]
  },
  {
    question: "What's your favorite way to spend a late-night moment of solitude?",
    answers: [
      {
        text: "Stargazing alone on a quiet rooftop",
        image:"./img/something.png",
        tag:"lover"
      },
      {
        text: "Taking a solitary walk under the moonlight",
        image:"./img/something.png",
        tag:"lover"
      },
      {
        text: "Writing poetry or journaling by candlelight",
        image:"./img/something.png",
        tag:"lover"
      },
      {
        text: "Listening to music with headphones on, lost in your thoughts",
        image:"./img/something.png",
        tag:"lover"
      }
    ]
  }
];

// Array of results
let result = [
  {
    era: "debut",
    description: "dkljfalfjna",
    image: "./img/something.png",
    alt: "Image Alt",
    value: 0
  },
  {
    era: "fearless",
    description: "dkljfalfjna",
    image: "./img/something.png",
    alt: "Image Alt",
    value: 0
  },
  {
    era: "speak now",
    description: "dkljfalfjna",
    image: "./img/something.png",
    alt: "Image Alt",
    value: 0
  },
  {
    era: "red",
    description: "dkljfalfjna",
    image: "./img/something.png",
    alt: "Image Alt",
    value: 0
  },
  {
    era: "1989",
    description: "dkljfalfjna",
    image: "./img/something.png",
    alt: "Image Alt",
    value: 0
  },
  {
    era: "reputation",
    description: "dkljfalfjna",
    image: "./img/something.png",
    alt: "Image Alt",
    value: 0
  },
  {
    era: "lover",
    description: "dkljfalfjna",
    image: "./img/something.png",
    alt: "Image Alt",
    value: 0
  },
  {
    era: "folklore",
    description: "dkljfalfjna",
    image: "./img/something.png",
    alt: "Image Alt",
    value: 0
  },
  {
    era: "evermore",
    description: "dkljfalfjna",
    image: "./img/something.png",
    alt: "Image Alt",
    value: 0
  },
  {
    era: "midnights",
    description: "dkljfalfjna",
    image: "./img/something.png",
    alt: "Image Alt",
    value: 0
  }
]

// Element Selection
const questionTag = document.querySelector('h2');
const startQuiz = document.querySelector('button');

// Button Wrapper
const answersWrapper = document.getElementById('answers');

// Button HTML Tags
const answerOne = document.createElement('div');
const answerOneButton = document.createElement('button');
const answerOneImg = document.createElement('img');
const answerOneQuestion = document.createElement('p');

const answerTwo = document.createElement('div');
const answerTwoButton = document.createElement('button');
const answerTwoImg = document.createElement('img');
const answerTwoQuestion = document.createElement('p');

const answerThree = document.createElement('div');
const answerThreeButton = document.createElement('button');
const answerThreeImg = document.createElement('img');
const answerThreeQuestion = document.createElement('p');

const answerFour = document.createElement('div');
const answerFourButton = document.createElement('button');
const answerFourImg = document.createElement('img');
const answerFourQuestion = document.createElement('p');

// Sets the loop index
let i = 0;

// Element content creation / change function
function displayQuestion(event) {
  // Append new buttons to the wrapper
  if (i == 0) {
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

    i++;
  } else {
    console.log('add result here');
  }
}

// Event Listening to start quiz
startQuiz.addEventListener('click', displayQuestion);