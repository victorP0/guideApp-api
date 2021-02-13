# Guide App Backend

This is the backend for the Guide App. 

The frontend can be found at https://github.com/victorP0/GuideApp.
## API Documentation

guide-router.js has 2 routes on the "/" path. The `GET` route is used to fetch the all guides currently in the app. The `POST` route allows the user to publish new guides to the gallery.

The "/:id" path has 2 routes. The `PATCH` route is used to edit content in existing guides. The `DELETE` route allows users to delete guides.

The validate-bearer-token.js file is created and used to ensure only clients with the valid bearer token can acesss and send data to the database.
## Description

This is a guides app that allows Users to write and publish guides on the internet.

## Technologies used

Node, Express, PostgreSQL, Mocha, Chai, Supertest, Knex.js
