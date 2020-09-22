const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const runSurvey = () => {

  const questions = {
    name: `What's your name?`,
    nickname: `What's your nickname? Pick one for yourself if you don't already have one :)`,
    activity: `What's a fun activity you like to do?`,
    song: `What song do you listen to while doing that?`,
    meal: `What's your favourite meal of the day?`,
    food: `What's your favourite thing to eat for that meal?`,
    sport: `What's your favourite sport to play?`,
    superpower: `What's your superpower? Tell us what you're amazing at :)`
  };
  
  const user = {
    printProfile: function() {
      return console.log(`${this.name} AKA ${this.nickname} loves listening to ${this.song} while ${this.activity}, devouring ${this.food} for ${this.meal}, prefers ${this.sport} over any other sport, and is amazing at ${this.superpower}.`);
    }
  };
  
  const keys = Object.keys(questions);
  
  const askQuestions = (i) => {
    rl.question(`${questions[keys[i]]} `, (answer) => { // asks question at index i
      user[keys[i]] = answer; // adds the answer to user object
      i++; // increments the index to ask the next question
      if (i === keys.length) { // base case runs when questions are done
        user.printProfile(); // prints the user profile
        return rl.close(); // closes the readline
      }
      askQuestions(i); // recursive case to ask a new questions
    });
  };
  
  askQuestions(0); // calls the function starting at the first question
};

runSurvey();