const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your nickname? ", (name) => {
  // console.log(`${name}`);
  rl.question("fav activity? ", (activity) => {
    // console.log(`${activity}`);
    rl.question("What do you like to listen to? ", (listen2) => {
      // console.log(`${listen2}`);
      rl.question("fav meal? ", (meal) => {
        // console.log(`${meal}`);
        rl.question("fav food ", (food) => {
          rl.question("fav sport ", (sport) => {
            rl.question("what is ypour superpower? ", (power) => {
           

          console.log(`${name}, ${activity}, ${listen2}, ${meal}, ${food}, ${sport}, ${power}.`);
              rl.close();
            rl.close();
          rl.close();
        rl.close();
      rl.close();
    rl.close();
  rl.close();
            });
          });
        });
      });
    });
  });
});

// What's your name? Nicknames are also acceptable :)
// What's an activity you like doing?
// What do you listen to while doing that?
// Which meal is your favourite (eg: dinner, brunch, etc.)
// What's your favourite thing to eat for that meal?
// Which sport is your absolute favourite?
// What is your superpower? In a few words, tell us what you are amazing at!