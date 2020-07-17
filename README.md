
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

## MVP Requirements:_

- Create a `ProductContext` and a `CartContext`
- Use the Provider Component from `ProductContext` and `CartContext` to provide data to child components
- Consume data using the `useContext` hook from `ProductContext` and `CartContext`

## Stretch Problems

Do not attempt stretch problems until MVP has been reached and a final commit has been made.

- Create a `removeItem` function that allows you to remove an item from your cart with a click of a button. This `removeItem` function should be able to be consumed from your `ShoppingCartItem` component.
  Remember each item has an `id` this will help out a lot while creating your removeItem function!

- Persist Cart Items using `localStorage`. (If you try this one, it will be a bit tricky to get our items to populate the shopping cart on a refresh. You'll have to think about where the data actually lives, and how you can get data there from localStorage when the app is being mounted after a refresh. Good luck!)
