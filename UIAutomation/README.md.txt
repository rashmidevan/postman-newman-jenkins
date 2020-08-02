/* 
 * Licensed Materials - Property of IBM
 *
 * IBM Financial Crimes Insight, PID 5900-A0H
 * IBM Financial Crimes Insight for IBM Cloud Pak for Data, PID 5737-E41
 *
 * (c) Copyright IBM Corporation 2020
 *
 * U.S. Government Users Restricted Rights:  Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp. 
 */




Folder structure
================
These folders hold end-to-end tests and supporting files for the Cypress Test Runner.

* fixtures holds optional JSON data for mocking
* integration holds the actual test files. All the test spec files are located here 
* plugins allow you to customize how tests are loaded.
* support file runs before all tests and is a great place to write or load additional custom commands.
  For testing the complaints dashbaord, below listed custom commands have been added 
	- loginWithUI [login with 
	- selectCompaintsSupervisorConf

Quick start
============
Clone this repository and run npm install to pull down the dependencies
Launch the Cypress Test Runner by running npm run cypress:open By default the tests will run against the QA server 
Run test against test server npm run cypress:server
Click Run all specs in the UI
If you have a test spec running it will automatically re-run if you modify (and save) the corresponding .spec.js file

More information
=================
    https://github.com/cypress.io/cypress
    https://docs.cypress.io/

