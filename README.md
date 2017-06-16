# Club solo project

#### Independent Project week 4 Javascript w/ Angular2

#### By _**Zach Beecher**_

## Description

Club Manager
Create a website that manages the roster of a club, team, or group. This could be anything from an intramural sports league, paint night, book club, pokemon collectors, AA or NA meetup, skateboard crew, hiking group, tribal activity, extracurricular course, basset hound aficionados, activist group, or hack-a-thon team. The choice is yours. Take some time to consider the activities you, your family, or friend group do regularly, and what kind of a site would be beneficial to you or someone you care about.

# Planning

* As a user, I'd like to visit a page to see a list of all team or club members.
* As a user, I'd like to click a team or club member's entry in the list to  visit their profile page, which should include more details about them.
* As a user, I'd like the option to visit an "About" page that explains what the club is, and what they do.
* As a user, I'd like all data persisted in a database, so it's always there when I need it.
* As a user, I'd like to filter the list of users by their particular role in the group, or some other information/category. (For instance, a club may have a treasurer, president, and/or secretary. A sports team may have a goalie, forward, or striker, a book club may have founders and attendees. You're also welcome to filter by something other than role, if it's more relevant to your project.)
* As an administrator, I want to add new users to the club. (User authentication is not required).
* As an administrator, I want to edit user profiles, in case I make a mistake, or need to update their details.
* As an administrator, need the option to delete a user, in case they leave the club or team.

# Stretch goals:
Further Exploration
If you're able to complete the project with time to spare, implement additional features such as:

Add functionality to keep track of stats, if relevant. Is your roster for a sports club? Keep track of the individual players' scoring percentage. An extracurricular course or seminar? Keep track of attendance or grades. A hiking group? Keep track of the number of miles each person has hiked with the club, etc.
Add a message board area, where club members may chat with each other.
Include an area called "announcements", "events", "games", etc. where users can post what events, matches, or meetings the club has planned.
Deploy your application. Include a link to the live site in your project's README.
Consider implementing AngularFire/Firebase user authentication (Note that this goes beyond the scope of our curriculum, and will require you to complete outside research. Begin with the AngularFire documentation on User Authentication.)
Anything else that would be relevant to the group your application manages!

## Specs / Planning

1. Model will contain: Club members, names, location, likes / dislikes, job in the organization, etc. Persistent data.
2. Components:
  member-new
  member-list
  member-edit
3. Filtering / pipes:
  Geo Location filtering / pipe by job function (treasurer)
4. Admin abilities: add or delete members without authentication.

## Known Bugs

_No known bugs, yet_

## Setup/Installation Requirements

* `Download or clone project files:https://github.com/ziggity/week4_angular `
* $`cd week4_angular`
* $`npm install`
* $`bower install`

## Running the app:
* $`ng serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Support and contact details:

@zachbeecher on twitter

# Club

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
