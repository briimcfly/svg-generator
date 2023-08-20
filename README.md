## User Story
`AS` a freelance web developer <br>
`I WANT` to generate a simple logo for my projects <br>
`SO THAT` I don't have to pay a graphic designer <br>

## Acceptance Criteria 
`GIVEN` a command-line application that accepts user input <br>
`WHEN` I am prompted for text <br>
`THEN` I can enter up to three characters <br>
`WHEN` I am prompted for the text color <br>
`THEN` I can enter a color keyword (OR a hexadecimal number) <br>
`WHEN` I am prompted for a shape <br>
`THEN` I am presented with a list of shapes to choose from: circle, triangle, and square <br>
`WHEN` I am prompted for the shape's color <br>
`THEN` I can enter a color keyword (OR a hexadecimal number) <br>
`WHEN` I have entered input for all the prompts <br>
`THEN` an SVG file is created named `logo.svg` <br>
`AND` the output text "Generated logo.svg" is printed in the command line <br>
`WHEN` I open the `logo.svg` file in a browser <br>
`THEN` I am shown a 300x200 pixel image that matches the criteria I entered <br>

## Overview
The goal of this project is to create an SVG Generator that runs in teh command line that dynamically generates an SVG logo from the the user's input. This project utilizes the Inquirer package and Jest for testing. 

![readme image](images/svggenerator.png)

A demo video walkthrough can be viewed [here](https://drive.google.com/file/d/1OdKkS4F_gK5xgbdeXQWw9YlVaSJwWT5-/view)

## Installation
To get started with the SVG generator, clone the respository. Then, enter the project directory and use your preferred package manager to install the necesarry dependencies. 

## Usage
After completing the installation, start the application and follow the prompts. 

## Technologies Used
* NPM
* Inquirer Package
* Prompt
* Chalk
* Jest

## Reflection 
This project has allowed me to apply the core skills I have recently learned and put them into practice. During development, I had the opportunity to deepen my understanding of NPM and creating tests with Jest. Additionally, I developed a deeper appreciation for for the importance code commenting, and the development principal DRY. (Don't repeat yourself). In the future, I would like to give users the ability to set their font-family. 

## Questions
If you have any questions or need further assistance, feel free to reach out to me:<br>
- **Email:** bickel@hey.com
- **GitHub:** [@briimcfly](https://github.com/briimcfly)




