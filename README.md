# 10) Object-Oriented Programming: Team-Profile-Generator
A Node.js command-line application that receives information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. For this project I utilised HTML, CSS, Tailwind CSS, Javascript and Node.js.

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria
```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```
## Instructions
Firstly make sure all dependencies are installed by typing npm i in the console.
Then to start the app, type node index.js and answer the questions.

When the user runs the application they may choose which team member they would like to add (Manager, Engineer, Intern). They are then asked to enter the employee's name, ID, email address and office number(manager)/github(engineer)/school(intern). A html page is then generated using the information provided by the user.

## Appearance
The image below displays the website's appearance and functionality.

![teamprofilegen](https://user-images.githubusercontent.com/95111780/178106289-70dcfa9d-eb2b-4e18-be9a-b542d3636d3e.PNG)

## Demo


https://user-images.githubusercontent.com/95111780/178108703-34296f0a-00ab-4d75-829a-388b2f6c4964.mp4

## Link
* https://humayra-hayern.github.io/Team-Profile-Generator/


## Credits
University of Birmingham Bootcamp

