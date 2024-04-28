// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const colors = require('colors');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = ["What is your application repository?", "Enter your Project Title:", "Enter a Description, Istallation instructions, usage information, contribution guidelines, test instructions: ", 

"Which license do you want to use?", "What is your GitHub username?", "What is your email address?"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    i = 0 ;
    console.log(data)

    let writer = fs.createWriteStream("README-Testing.md");

    let myTitle = `# Title here\n`
    let myDesc = `## Description\n`
    let myTOC = `## Table of Contents\n`
    let myToc2 = `- [Installation](#installation)\n- [Usage](#usage)\n- [Credits](#credits)\n- [License](#license)\n`
    let myInstallsec = `## Installation\n 
    What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.\n`
    let myUsagesec = `## Usage\n
    Provide instructions and examples for use. Include screenshots as needed.\n`
    let myCreditsec = `## Credits\n
    Proudly created by : Faisal Salam!\n`
    let myLicensesec = `## License\n
    The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).\n`
    let myBadgessec = `## Badges\n`
    let myBadgeimg = `![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)\n`
    let myFeaturesec = `## Features\n
    If your project has a lot of features, list them here.\n`
    let myContributesec = `## How to Contribute\n
    If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.\n`
    let myTestsSec = `## Tests\n`
    let myQuesSec = `## Questions`
    
    writer.write(myTitle + myDesc + myTOC +myToc2+myInstallsec+myUsagesec+myCreditsec+myLicensesec+myBadgessec+myBadgeimg+myFeaturesec+myContributesec+myTestsSec+myQuesSec+`\n`);
 


    setTimeout(() => {
 
    writer.end();
    }, 2000);

    writer.on("finish", function () {
    console.log("End program...");
    });

    writer.on("error", function (err) {
    console.log(err);
    });
    
}

// TODO: Create a function to initialize app
function init() {

        i = 0;
        myData = []
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'repository',
                message: colors.bgBlue(questions[i]),
              },
              {
                type: 'input',
                name: 'title',
                message: colors.bgBlue(questions[i+1]),
              },
              {
                type: 'checkbox',
                message: colors.bgBlue(questions[i+2]),
                name: 'description',
                choices: ['HTML', 'CSS', 'JavaScript', 'PostgreSQL'],
              },
              {
                type: 'list',
                message: colors.bgBlue(questions[i+3]),
                name: 'license',
                choices: ['1.0', '2.0', '3.0'],
              },
              {
                type: 'input',
                name: 'GitHubUsername',
                message: colors.bgBlue(questions[i+4]),
              },
              {
                type: 'input',
                name: 'email',
                message: colors.bgBlue(questions[i+5]),
              },
    ])
    .then((data) => {
        const filename = `README-Test.md`;

        data=i;
        writeToFile(filename,data)

    })
    


}

// Function call to initialize app
init();
