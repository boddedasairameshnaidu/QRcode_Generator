// User Input URL
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
// var qr = require('qr-image');

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        message: "Enter your URL",
        name: "url",
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    // console.log(answers);
    const res = answers.url;
    // console.log(res);
    var qr_svg = qr.image(res);
    qr_svg.pipe(fs.createWriteStream('myLinkedin.png'));
    // Store the qr prompts of user 
    fs.writeFile('URLs.txt', res, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      }); 
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });


