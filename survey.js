const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [ 'What\'s your name? Nicknames are also acceptable :)',
 'What\'s an activity you like doing?',
 'What do you listen to while doing that?',
 'Which meal is your favourite (eg: dinner, brunch, etc.)',
 'What\'s your favourite thing to eat for that meal?',
 'Which sport is your absolute favourite?',
 'What is your superpower? In a few words, tell us what you are amazing at!'];

let answers = [];

const askQuestions = (i) => {
  rl.question(questions[i], (answer) => {
    answers.push(answer);
    if(i === questions.length - 1) {
      rl.close();
      const aboutMe = `My name is ${answers[0]}. I enjoy ${answers[1]} and listening to ${answers[2]}. My favorite meal of the day is ${answers[3]} and I like to eat ${answers[4]} for that meal. My absolute favorite sport is ${answers[5]} and my superpower is ${answers[6]}.`;
      console.log(aboutMe);
    } else {
      askQuestions(i + 1);
    }
  });
};
askQuestions(0);