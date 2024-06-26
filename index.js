const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project:',
  },
  {
    type: 'input',
    name: 'motivation',
    message: 'What was your motivation?',
  },
  {
    type: 'input',
    name: 'problem',
    message: 'What problem does it solve?',
  },
  {
    type: 'input',
    name: 'learning',
    message: 'What did you learn?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use:',
  },
  {
    type: 'input',
    name: 'credits',
    message: 'List your collaborators, if any, with links to their GitHub profiles:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
  },
  {
    type: 'input',
    name: 'badges',
    message: 'Provide any additional badge URLs (comma-separated):',
  },
  {
    type: 'input',
    name: 'features',
    message: 'List your project features:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide contribution guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions:',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
];

inquirer.prompt(questions).then((answers) => {
  const readmeContent = generateREADME(answers);
  fs.writeFileSync('README.md', readmeContent);
  console.log('README.md has been generated!');
});

function generateREADME(answers) {
  const defaultBadges = [
    `![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)`,
    `![JavaScript](https://img.shields.io/badge/language-JavaScript-blue.svg)`
  ];

  const additionalBadges = answers.badges
    ? answers.badges.split(',').map((badge) => badge.trim())
    : [];

  const badges = [...defaultBadges, ...additionalBadges].join(' ');

  return `# ${answers.title}

## Description
${answers.description}

### Motivation
${answers.motivation}

### Problem Solved
${answers.problem}

### What I Learned
${answers.learning}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Credits
${answers.credits}

## License
This project is licensed under the ${answers.license} license.

## Badges
${badges}

## Features
${answers.features}

## How to Contribute
${answers.contributing}

## Tests
${answers.tests}

## Questions
If you have any questions about the project, please feel free to reach out to me at [${answers.email}](mailto:${answers.email}). You can also find more of my work at [${answers.github}](https://github.com/${answers.github}).
  `;
}