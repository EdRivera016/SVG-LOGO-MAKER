 // Inquirer (node package manager) import
const inquirer = require("inquirer");

// File system module (node package manager) import
const fs = require("fs");

// Importing classes from ./lib/shapes directory
const { Triangle, Square, Circle } = require("./lib/shapes");

// Function writes the SVG file using user answers from inquirer prompts
function writeToFile(fileName, answers) {
  // File starts as an empty string
  let svgString = "";
  // Sets width and height of logo container
  svgString =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
  // <g> tag wraps <text> tag so that user font input layers on top of polygon -> not behind
  svgString += "<g>";
  // Takes user input for shape choice and inserts it into SVG file
  svgString += `${answers.shape}`;

  // Conditional check takes users input from choices array and then adds polygon properties and shape color to SVG string
  let shapeChoice;
  if (answers.shape === "Triangle") {
    shapeChoice = new Triangle();
    svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
  } else if (answers.shape === "Square") {
    shapeChoice = new Square();
    svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
  } else {
    shapeChoice = new Circle();
    svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
  }

  // <text> tag gives rise to text alignment, text-content/text-color taken in from user prompt and gives default font size of "40"
  svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
  // Closing </g> tag
  svgString += "</g>";
  // Closing </svg> tag
  svgString += "</svg>";

  // Using file system module to generate svg file, takes in file name given in the promptUser function, the svg string, and a ternary operator which handles logging any errors, or a "Generated logo.svg" message to the console  
  fs.writeFile(fileName, svgString, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg");
  });
}

// This function utilizes inquirer .prompt to prompt the user to answer questions in the command line and save user input
function promptUser() {
  inquirer
    .prompt([
      // Text prompt
      {
        type: "input",
        message:
          "Enter up to three characters:",
        name: "text",
      },
      // Text color prompt
      {
        type: "input",
        message:
          "Enter text color keyword OR a hexadecimal number:",
        name: "textColor",
      },
      // Shape choice prompt
      {
        type: "list",
        message: "What shape would you like the logo to render?",
        choices: ["Triangle", "Square", "Circle"],
        name: "shape",
      },
      // Shape color prompt
      {
        type: "input",
        message:
          "Enter background color keyword OR a hexadecimal number:",
        name: "shapeBackgroundColor",
      },
    ])
    .then((answers) => {
      // Error handling for text prompt (user must enter 3 characters or less for logo to generate)
      if (answers.text.length > 3) {
        console.log("Must enter 1-3 characters...");
        promptUser();
      } else {
        // Calling write file function to generate SVG file
        writeToFile("logo.svg", answers);
      }
    });
}

// Calling promptUser function so inquirer prompts fire off when application is ran
promptUser();


















// const inquirer = require("inquirer");
// const fs = require("fs");
// const { Triangle, Square, Circle } = require("./lib/shapes");

// function writeToFile(fileName, answers) {
//   let svgString = "";
//   svgString =
//     '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';

//   svgString += "<g>";

//   svgString += `${answers.shape}`;

//   let shapeChoice;
//   if (answers.shape === "Triangle") {
//     shapeChoice = new Triangle();
//     svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}"/>`;
//   } else if (answers.shape === "Square") {
//     shapeChoice = new Square();
//     svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeColor}"/>`;
//   } else {
//     shapeChoice = new Circle();
//     svgString += `<circle cs="150" cy="115" r="80" fill="${answers.shapeColor}"/>`;
//   }

//   svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
//   svgString += "<g>";
//   svgString += "</svg>";

//   fs.writeFile(fileName, svgString, (err) => {
//     err ? console.log(err) : console.log("Generated Svg Logo");
//   });
// }

// function promptUser() {
//   inquirer.prompt([
//     {
//       type: "input",
//       name: "text",
//       message: "TEXT: Enter up to (3) Characters:",
//     },
//     {
//       type: "input",
//       name: "text-color",
//       message: "TEXT COLOR: Enter a color keyword (OR a hexadecimal number):",
//     },
//     {
//       type: "input",
//       name: "shape",
//       message: "SHAPE COLOR: Enter a color keyword (OR a hexadecimal number):",
//     },
//     {
//       type: "list",
//       name: "pixel-image",
//       message: "Choose which Pixel Image you would like?",
//       choices: ["Circle", "Square", "Triangle"],
//     },
//   ])

//   .then((answers) => {
//     if(answers.text.length > 3) {
//         console.log("Must enter a 1-3 characters only... ");
//         promptUser();
//     } else {
//         writeToFile("logo.svg", answers);
//     }
//   });
// }
//  promptUser();



















































// const fs = require('fs')
// const inquirer = require("inquirer")
// const {Circle, Square, Triangle} = require("./lib/shapes");

// class Svg{
//     constructor() {
//         this.textElement = ''
//         this.shapeElement = ''
//     }
//     render () {
// return `<svg version="1.1" xmlns = "http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
//     }
//     setTextElement(text,color) {
//         this.textElement = `<text x="150" y="250" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
//     }
//     setShapeElement(shape) {
// this.shapeElement = shape.render(); //ADDED RENDER
//     }
// }

// const questions = [
//    {
//         type: "input",
//         name: "text",
//         message: "TEXT: Enter up to (3) Characters:",
//     },
//     {
//         type: "input",
//         name: "text-color",
//         message: "TEXT COLOR: Enter a color keyword (OR a hexadecimal number):",
//     },
//     {
//         type: "input",
//         name: "shape",
//         message: "SHAPE COLOR: Enter a color keyword (OR a hexadecimal number):",
//     },
//     {
//         type: "list",
//         name: "pixel-image",
//         message: "Choose which Pixel Image you would like?",
//         choices: ["Circle", "Square", "Triangle"],
//     }
// ];
// function writeFile(fileName, data) {
//     console.log("Writing [" + data + "] to file [" + fileName +"]")
//     fs.writeFile(fileName, data , function (err) {
//         if (err) {
//             return console.log(err);
//         }
//         console.log(" Congrats, you've generated a SVG Logo!!")
//     });
// }

// async function init() {
//     console.log("Starting init");
//     var svgString = "";
//     var svg_file = "logo.svg";

//     const answers = await inquirer.prompt(questions);

// var user_text = "";
// if (answers.text.length > 0 && answers.text.length < 4) {
//     user_text = answers.text
// } else {
//     console.log("Invalid user text field detected! Please enter 1-3 Characters");
//     return;
// }
// console.log("Users text: [" + user_text + "]");

// user_font_color = answers["text-color"];
// console.log("User font color: [" + user_font_color + "]");

// user_shape_color = answers.shape;
// console.log("User shape color: [" + user_shape_color + "]");

// user_shape_type = answers["pixel-image"];
// console.log("User entered shape = [" + user_shape_type + "]");

// let user_shape;
// if(user_shape_type === "Square" || user_shape_type === "square") {
//     user_shape = new Square();
//     console.log("User selected Square shape");
// } else if (user_shape_type === "Circle" || user_shape_type === "circle") {
//     user_shape = new Circle();
//     console.log("User selected Circle shape");
// } else if (user_shape_type === "Triangle" || user_shape_type === "triangle") {
//     user_shape = new Triangle();
//     console.log("User selected Triangle shape");
// } else {
//     console.log("Invalid shape!");
// }

// user_shape.setColor(user_shape_color);

// var svg = new Svg();
// svg.setTextElement(user_text, user_font_color);
// svg.setShapeElement(user_shape);

// svgString = svg.render();

// console.log("Displayin shape:\n\n" + svgString);
// console.log("Shape generation complete!");
// console.log("Writing shape to file...");

// writeFile(svg_file, svgString);
// }
// init()
