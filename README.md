[![Build Status](https://semaphoreci.com/api/v1/commitshappen/dscp-partner-portal-fe/branches/master/shields_badge.svg)](https://semaphoreci.com/commitshappen/dscp-partner-portal-fe) [![GitHub issues](https://img.shields.io/github/issues/commitshappen/DSCP-Partner-Portal-FE.svg)](https://github.com/commitshappen/DSCP-Partner-Portal-FE/issues) [![Waffle Board](https://img.shields.io/badge/waffle.io-Board-b3d4fc.svg)](https://waffle.io/commitshappen/DSCP-Partner-Portal-FE) [![AgileVentures Slack](https://img.shields.io/badge/AgileVentures-%23downtownstcharles-orange.svg)](https://www.agileventures.org/projects/dscp-partner-portal)

# DSCP Partner Portal Front-End
This front end, built on Angular 4 with the [Angular CLI](https://github.com/angular/angular-cli), will consume the DSCP Partner Portal API. All routes for this application should be protected via JWT, with no public API access. You will therefore need to authenticate any users before pulling data from the API.

This project is being built for the Downtown St. Charles Partnership (DSCP), a non-profit focused on the economic viability of downtown St. Charles, IL.

## Project Scope
The purpose of this project is to provide the DSCP with an internal application to manage their contacts and Partners (members). It will also allow them to create groups or committees to which they can add and remove contacts from.

## API
The API for this project is hosted in a separate [GitHub repository](https://github.com/commitshappen/DSCP-Partner-Portal-API). If you're working on building services, you will need to clone the API and run it on your local machine. Simply follow the instructions of that README to get started.

## Contributing
We'd love to have your help! Check out our [Waffle Board](https://waffle.io/commitshappen/DSCP-Partner-Portal-FE) to see where the project currently sits and what we're looking for help on. Do you have an idea that we maybe haven't thought of? That's cool too! Submit a ticket and we'll take a look :)

You can find the design prototype for the front-end by viewing the [design prototype](https://xd.adobe.com/view/287c1243-35f0-49f2-be73-94331ea84aae).

## Project Setup
### Step 1: Install Yarn (if neccessary)
The Angular CLI depends on [yarn](https://yarnpkg.com/en/), so you will need to have it installed on your computer. Simply follow the [installation instructions](https://yarnpkg.com/en/docs/install) provided by yarn for your machine. 

### Step 2: Install Angular CLI (if neccessary)
The Angular CLI installation boils down to having Node v6.9.0 or higher on your machine, as well as NPM 3 or higher, and running the following command:
```bash
$ npm i -g @angular/cli
```

The CLI has tons of great features, including [generators](https://github.com/angular/angular-cli#generating-components-directives-pipes-and-services) for components, modules, services, directives, and more. 

### Step 3: Clone the project
Before you can get started, you need to download the project files. Assuming you have git already installed, simply clone this repo and cd into it using the terminal.
```bash
$ git clone https://github.com/commitshappen/dscp-partner-portal-fe.git
$ cd dscp-partner-portal-fe
```

### Step 4: Install dependencies
Download all of the packages to make sure your clone works like it's supposed to.
```bash
$ yarn
```

### Step 5: Starting the server
The Angular CLI leverages webpack, which mean that there's a live-refresh server build in. Yay! Simply run the following command, which will start the server and open up the app in the browser:
```bash
$ ng serve --open
```
