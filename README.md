# SVG Logo Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table Of Contents 
- [SVG Logo Generator](#svg-logo-generator)
  - [Table Of Contents](#table-of-contents)
  - [Description](#description)
  - [Live Screen Recording](#live-screen-recording)
  - [Screenshots](#screenshots)
  - [Technologies Used](#technologies-used)
  - [Installation](#installation)
  - [Features](#features)
  - [Testing](#testing)
  - [License](#license)
  - [Questions](#questions)

## Description
This SVG logo maker is a powerful command-line tool that empowers freelance web developers to effortlessly crate custom logos for theirs projects. With a user-friendly interface powered by Inquirer, developers can input up to three characters, choose text and shape colors and select from a variety of shapes including circles,triangles and squares. The application leverges Object-Oriented Programming(OOP) principles to efficiently generate SVG files named logo.svg, providing a seamless experience for developers.

## Live Screen Recording 

## Screenshots

Generated Logos

<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><g>Square<rect x="73" y="40" width="160" height="160" fill="Black"/><text x="150" y="130" text-anchor="middle" font-size="40" fill="yellow">UCF</text></g></svg>
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><g>Triangle<polygon points="150, 18 244, 182 56, 182" fill="Red"/><text x="150" y="130" text-anchor="middle" font-size="40" fill="White">SEO</text></g></svg>
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><g>Circle<circle cx="150" cy="115" r="80" fill="Purple"/><text x="150" y="130" text-anchor="middle" font-size="40" fill="Green">OOP</text></g></svg>

Examples Of Generated Logos

<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><g>Circle<circle cx="150" cy="115" r="80" fill="purple"/><text x="150" y="130" text-anchor="middle" font-size="40" fill="red">MAP</text></g></svg>
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><g>Triangle<polygon points="150, 18 244, 182 56, 182" fill="grey"/><text x="150" y="130" text-anchor="middle" font-size="40" fill="black">PAR</text></g></svg>
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><g>Square<rect x="73" y="40" width="160" height="160" fill="Blue"/><text x="150" y="130" text-anchor="middle" font-size="40" fill="black">WOK</text></g></svg>

## Technologies Used
Node.js, Inquirer@8.2.4, File System Module, Jest

## Installation 
1. Clone the repository: git@github.com:EdRivera016/SVG-LOGO-MAKER.git
2. Run npm init -y to start a package.json.
3. Install Inquirer: npm i Inquirer@8.2.4
4. Install Jest: npm i jest
5. To run application in command-line type: node index.js
   
## Features
The SVG Logo Maker application code utilizes Node.js, Inquirer, and the File System module to prompt users for input and generate SVG logos based on their choices. The Shapes classes code defines parent and specialized classes for different shapes, showcasing object-oriented programming principles and modularity in creating SVG representations.

## Testing 
To do unit testings, open terminal and use the command npm test.
 screenshotof vs code here

## License 
NOTICE: This application is covered under the MIT License


## Questions 
Please send any questions you may have [here](mailto:edwinrivera016@outlook.com?subject=[Github]%20Dev%20Connect) or visit [github/EdRivera016](https://github.comEdRivera016).
