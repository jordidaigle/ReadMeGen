  // Generate README with structure and markdown based on the user inputs
function generateMarkdown({ username, email, projecttitle, description, installation, usage, testing, license}) {
  projecttitleDashed = projecttitle.replace(/\s+/g, '-');
  return `
  [contributors-shield]: https://img.shields.io/github/contributors/${username}/${projecttitleDashed}.svg?style=flat-square
  [contributors-url]: https://github.com/${username}/${projecttitleDashed}/graphs/contributors
  [forks-shield]: https://img.shields.io/github/forks/${username}/${projecttitleDashed}.svg?style=flat-square
  [forks-url]: https://github.com/${username}/${projecttitleDashed}/network/members
  [stars-shield]: https://img.shields.io/github/stars/${username}/${projecttitleDashed}.svg?style=flat-square
  [stars-url]: https://github.com/${username}/${projecttitleDashed}/stargazers
  [issues-shield]: https://img.shields.io/github/issues/${username}/${projecttitleDashed}.svg?style=flat-square
  [issues-url]: https://github.com/${username}/${projecttitleDashed}/issues
  [license-shield]: https://img.shields.io/github/license/${username}/${projecttitleDashed}.svg?style=flat-square
  [license-url]: https://github.com/${username}/${projecttitleDashed}/blob/master/LICENSE.txt
  [![Contributors][contributors-shield]][contributors-url] [![Forks][forks-shield]][forks-url] [![Stargazers][stars-shield]][stars-url] [![Issues][issues-shield]][issues-url] [![License.txt][license-shield]][license-url]
  # ${projecttitleDashed}
  ## Description
  ${description}
  ## Table of Contents
  - [Title](#title)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Screenshots](#screenshots)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#testing)
  - [Additional Information](#additional-information)
  - [License](#license)
  - [Contributing](#contributing)
  - [Questions and Feedback](#questions-and-feedback)
  ## Installation
  Download (and unpack) or clone the repo, then using a CLI run the ${installation} command.
  ## Usage
  Run the application with the CLI command ${usage} and follow the prompts.
  ## Testing
  Run the tests with the CLI command ${testing}.
  ## License
  This project is licensed under the ${license} License - see the [LICENSE.txt](https://github.com/${username}/${projecttitleDashed}/blob/master/LICENSE.txt) file for details
  ## Contributing
  Please read [CONTRIBUTING.md](https://github.com/${username}/${projecttitleDashed}/blob/master/CONTRIBUTING.md) for details on the code of conduct, and the process for submitting pull requests.
  ## Questions and Feedback
  Please contact me using one of the following:
  |---|---|
  - | Github: [${username}](https://gist.github.com/${username}) |
  |---|---|
  - Email: ${email}
  `
}

// Parse the markdown README
module.exports = generateMarkdown;