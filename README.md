
[![Build Status](https://travis-ci.org/athityakumar/colorls.svg?branch=master)](https://travis-ci.org/athityakumar/colorls)

## Interface Web Application

In the project you will take your newfound knowledge of `Context API` and `React Hooks`

## Scripts

Install node package modules

#### `npm install`

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Accessibility
### This milestone, we again received helpful feedback from our community, which helped us identify and tackle many accessibility issues. Highlights:

## Project Set Up

- [ ] Create a forked copy of this project.
- [ ] Add your team lead as collaborator on Github.
- [ ] Clone your OWN version of the repository in your terminal.
- [ ] CD into the project base directory `cd client-panel-interface`.
- [ ] Download project dependencies by running `npm install`.
- [ ] Start up the app using `npm start`.
- [ ] Create a new branch: git checkout -b `<firstName-lastName>`.
- [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge `<firstName-lastName>` Branch into master (student's repository). **Please don't merge your own pull request**
- [ ] Add your team lead as a reviewer on the pull-request
- [ ] Your team lead will count the project as complete by merging the branch back into master.
- [ ] Do your magic!

# Project - Shopping Cart

## Directions

Before you get started, please take a few minutes and get acquainted with this application. Understand what's going on and how it's working.

- If you look in the `App.js` you'll notice there are currently two state properties - `products` to keep track of all available products, and `cart` that will keep track of all the items in our `cart`.

- You'll also notice inside of our `App.js` we have 3 components. A navigation component and two route based components. Each of those components are all being passed either our `cart` state or `product` state as props, when we start to scale our application and add more props our codebase is going to start to become very cumbersome and will make our application hard to work with.

- To combat this from happening we're going to refactor our application to use `Context API`, making it easier and more effiecent to access data across our application.


