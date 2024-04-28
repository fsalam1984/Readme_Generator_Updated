// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const colors = require('colors');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = ["What is your application repository?", "Enter your Project Title:", 
"Enter a Description: ","Enter Istallation instructions: ", "Enter Usage information: " ,"Enter Contribution guidelines: ", "Test instructions: ", 

"Which license do you want to use?", "What is your GitHub username?", "What is your email address?"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    i = 0 ;
    console.log(data)

    let writer = fs.createWriteStream("README-Testing.md");
    let myBadgeLicense = `![LicenseBadge](https://img.shields.io/badge/License-${data.license}-aqua)\n`
    let myTitle = `# ${data.title}\n`
    let myDesc = `## Description\n
    ${data.description}\n`
    let myTOC = `## Table of Contents\n`
    let myToc2 = `- [Installation](#installation)\n- [Usage](#usage)\n- [Credits](#credits)\n- [License](#license)\n`
    let myInstallsec = `## Installation\n 
    ${data.installation}\n`
    let myUsagesec = `## Usage\n
    ${data.usage}\n`
    let myCreditsec = `## Credits\n
    Proudly created by : Faisal Salam!\n`
    let myLicensesec = `## License\n> [!NOTE]\n> Application is covered under license : ${data.license}\n`
    let myBadgessec = `## Badges\n`
    let myBadgeimg = `![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)\n`
    let myFeaturesec = `## Features\n
    If your project has a lot of features, list them here.\n`
    let myContributesec = `## How to Contribute\n
    ${data.contribution}\n`
    let myTestsSec = `## Tests\n
    ${data.tests}\n`
    let myQuesSec = `## Questions\n
    https://github.com/${data.GitHubUsername}\n, You can reach me at: ${data.email}.`
    
    writer.write(myBadgeLicense+ myTitle + myDesc + myTOC +myToc2+myInstallsec+myUsagesec+myCreditsec+myLicensesec+myBadgessec+myBadgeimg+myFeaturesec+myContributesec+myTestsSec+myQuesSec+`\n`);
 


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

              //Enter a description, installation instructions, usage information, contribution guidelines, and test instructions
              {
                type: 'input',
                name: 'description',
                message: colors.bgBlue(questions[i+2]),
              },
              {
                type: 'input',
                name: 'installation',
                message: colors.bgBlue(questions[i+3]),
              },
              {
                type: 'input',
                name: 'usage',
                message: colors.bgBlue(questions[i+4]),
              },
              {
                type: 'input',
                name: 'contribution',
                message: colors.bgBlue(questions[i+5]),
              },
              {
                type: 'input',
                name: 'tests',
                message: colors.bgBlue(questions[i+6]),
              },
              /////
              {
                type: 'checkbox',
                message: colors.bgBlue(questions[i+7]),
                name: 'license',
                choices: ['1.0', '2.0', '3.0', '4.0'],
              },
            
              {
                type: 'input',
                name: 'GitHubUsername',
                message: colors.bgBlue(questions[i+8]),
              },
              {
                type: 'input',
                name: 'email',
                message: colors.bgBlue(questions[i+9]),
              },
    ])
    .then((data) => {
        const filename = `README-Test.md`;

        
        writeToFile(filename,data)

    })
    


}

// Function call to initialize app
init();
