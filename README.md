# ATG Case Readme
This repository contains a coding exercise application for ATG. Below are the instructions for running, testing, and linting the application.

### Prerequisites
Make sure you have the following software installed on your machine:

- `Node.js (version 12 or above)`
- `NPM (Node Package Manager)`

### Installation

#### Clone this repository to your local machine using the following command:

`git clone <repository-url>`

#### Navigate to the project directory:

`cd <project-directory>`

#### Install the required dependencies by running the following command:

`npm install`

#### Running the Application
To start the application locally, follow these steps:

Make sure you are in the project directory.

Run the following command:

`npm start`

This will start the development server and the application will be accessible at `http://localhost:3000` in your web browser.

#### Testing the Application
This application uses the Jest testing framework for running unit tests. To run the tests, follow these steps:

Make sure you are in the project directory.

Run the following command:

`npm test`

This will execute all the test cases and display the results in your console.

#### Linting the Application
Linting helps ensure code quality and adherence to coding standards. This application uses ESLint for linting JavaScript code and Prettier for code formatting.

To lint the application, follow these steps:

Make sure you are in the project directory.

Run the following command:

`npm run format`

This will analyze your code and first run prettier to format the code using below command:

`npm run prettier:fix`

and then it run `npm run lint:fix` to fix the linting error(s).

### Additional Scripts
In addition to the commands mentioned above, this project provides a few additional scripts that you can use:

npm run build:client: Builds the FE application for production deployment.
npm run test: Runs tests and generates test coverage reports.
npm run format: Formats the code using Prettier and validates with ESLint rules.
Feel free to explore the package.json file for more information about the available scripts.

### Contributing
If you would like to contribute to this project, please follow these steps:

Fork the repository and clone it to your local machine.

Create a new branch for your changes:

`git checkout -b my-feature`

Make your desired changes and commit them.

Push the changes to your forked repository.

Create a pull request to the original repository.

Please ensure that your changes align with the project’s coding standards and guidelines.

### Enhancements
Below are the few things which can be enhanced after delivery of MVP:

1. Add loader state/component.
2. Show empty list page when the data is not found.
3. Implement the Snapshot testing.
4. Show error(s) to the user if present in the FE due to any event(s).

### License
This project is licensed under the [MIT License](https://www.mit.edu/~amini/LICENSE.md).

