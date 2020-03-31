import readline from 'readline';

const rgx = /([a-zA-Z]+) ([a-zA-Z]+) x([0-9]+)/gi;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Waiting for orders: ', answer => {
    const arrayAnswer: {
       dishName: string;
       dishSize: string;
       disNumber: string;
    }[] = [];
    answer.split(';').map(item => {
       const ingredientsSplit = item.split(' ');
       arrayAnswer.push({
          dishName: ingredientsSplit[0],
          dishSize: ingredientsSplit[1],
          disNumber: ingredientsSplit[2],
       });
    });
    rl.close();
    return arrayAnswer;
 });