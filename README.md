# plan-your-day-away

## Description
We are tasked with creating a simple task calendar application that allows the user to save events for each hour of the day. 

We will need to be modifying the starter code provided to meet the acceptance criteria.


        Acceptance Criteria

        ```md
        GIVEN I am using a daily planner to create a schedule
        WHEN I open the planner
        THEN the current day is displayed at the top of the calendar
        WHEN I scroll down
        THEN I am presented with timeblocks for standard business hours
        WHEN I view the timeblocks for that day
        THEN each timeblock is color coded to indicate whether it is in the past, present, or future
        WHEN I click into a timeblock
        THEN I can enter an event
        WHEN I click the save button for that timeblock
        THEN the text for that event is saved in local storage
        WHEN I refresh the page
        THEN the saved events persist
        ```

 This app runs in the browser and with my additions of jQuery tools to dynamically update HTML and CSS.

 I did the following:

 1. Changed classes on time blocks to display: past, present, and/or future colors from CSS sheet
 2. Saved all the tasks the user input into local storage after the save button was clicked
 3. Returned all saved user input onto the UI by getting back data from local storage, so that the saved information would display even after a refresh

## Install
1. Copy files of starter code from class repository
[CLASS REPO](https://uclax.bootcampcontent.com/UCLA-Coding-Boot-Camp/UCLA-VIRT-FSF-FT-02-2023-U-LOLC)
    Module 5-- Challenge

2. Create new Github repo for Module 5 assingment in personal repository

## Rescources
[JQuery](https://api.jquery.com/click/)


[DayJS](https://day.js.org/docs/en/parse/now)

## Deploy Link
[plan-your-day-away](https://jjjgm.github.io/plan-your-day-away/)

## Assets
![planner](/assets/images/127.0.0.1_5500_index.html.png)


![localstorage](/assets/images/Screen%20Shot%202023-03-20%20at%202.48.55%20PM.png)