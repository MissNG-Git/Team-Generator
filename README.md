# 10 Object-Oriented Programming: Team Profile Generator

⋘ ──── ∗⋅◦∘◈\[[MissNG Team Generator](#mock-up)\]◈∘◦⋅∗ ──── ⋙

Use my Team Profile generator straight from your terminal to easily create an HTML containing details of your software engineering team! The HTML file will be dynamically generated based on the user's input and has already been styled with a simple yet clean CSS.

Technologies utilised include...
+ Javascript
+ [GitBash](https://gitforwindows.org/)
+ Node
+ [Inquirer package](https://www.npmjs.com/package/inquirer)
+ [Jest package](https://www.npmjs.com/package/jest)

## ≫ ──── ≪•◦ Objectives ◦•≫ ──── ≪
```
+ Assist companies & managers in creating a team profile page
+ Run a Team Profile generator from Terminal using node.js
+ Dyanmically generate an HTML that displays team contact information at a glance

```

## Mock-Up

The following image demonstrates the application functionality:

![Team Generator demo](./assets/demoTeamGen.gif)

Video also available [here](https://github.com/MissNG-Git/Team-Generator/tree/main/assets/demoTeamGen.mp4).

### ≫ ──── ≪•◦ Overview of Code Functionality ◦•≫ ──── ≪

1. Command-line application runs when initiated, prompts questions to user (ie contact details) & accepts user input.

2. Application generates Team Profile HTML from user-requested information and includes relevant details like Name, Role, ID #, Email, Office #, GitHub & School.

3. Application takes in email address entered by user and populates into the Email field which opens default email program & populates the TO field.

4. Application registers user GitHub username and populates GitHub field which will direct user to team member's GitHub page.

5. Application also prompts user to confirm once completing one member's profile if they would like to add another member or not.

6. Application will also ask additional questions depending on what Role is selected.

7. Once user confirms all members added, application will generate HTML & console log a confirmation message.

### ≫ ──── ≪•◦ Usability ◦•≫ ──── ≪

* Create a clone of [this repository](https://github.com/MissNG-Git/Team-Generator)

* Navigate to directory containing cloned repository

* Invoke the application by using the "_node index.js_" command in GitBash/Terminal

* Answer the prompts displayed in terminal

* Once user confirms all members added, a "Thank you" confirmation message will display in terminal to advise successful creation of HTML
**Note:** _the HTML file will be generated in the dist folder_

* Navigate to the **dist** folder and open the _team.html_ file to see your generated HTML! 😎