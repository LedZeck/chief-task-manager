# Chief Task Manager

In order to correctly run this project, please make sure that you have the following:

- Local Docker Environment ([Docker Desktop](https://www.docker.com/products/docker-desktop/));
- Local NodeJs Environment ([NodeJs](https://nodejs.org/) - Minimum version 20.x.x);

## Starting the database setup:

- From the project root folder, enter the backend directory
  `cd backend/`;
- Once inside the backend folder, start the database Docker container by running:
  `docker compose up -d`;

## Node/Express Server

- Run `npm install` to install the project dependencies;

- Run the following command to start the Express server:
  `npm start`

- To run the unit tests, the command `npm test` should start the test suite;

At this point, both Database and Express server should be fully running;

## Frontend App

Enter the `frontend` folder in the project root folder;

- Run `npm install` to install the project dependencies;
- Run `npm start` to start the app locally;
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- To run the unit tests, the command `npm test` should start the test suite;

This project it's part of a challenge and has no comercial purposes.
