// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
${data.description}

## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [Lisence](#lisence)
* [Contributing](#contributing)
* [Test](#test)
* [Questions](#questions)

## Installation
The technologies used for this project include ${data.tech}. ${data.installation} 

## Usage
${data.usage}

## Lisence 
${data.license}

## Contributing
${data.contributions}

## Test
${data.test}

## Questions
If you have any questions or would like further information on this project, 
please contact ${data.email} or find me on [Github](https://github.com/${data.username}).
`;
}

module.exports = generateMarkdown;
