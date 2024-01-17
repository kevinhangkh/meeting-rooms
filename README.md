# Book a meeting room

It's written in Typescript using React framework.

## Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner

## Dependencies

- React
- Typescript
- React router dom
- Axios 
- Material UI
- Jest

## Overview

This application was built with React as it's the framework I'm the most comfortable with and perfect for single page applications. 

The `Rooms` page is the main page of the application and accessed through `localhost:3000/rooms`

I have created a route to `/rooms` with the react-router-dom library

In order to fetch the rooms data, I have created a hook `useRooms` in which the fetching is made. This hook then returns an object containing the rooms data, the loading state and the error (if any).

The Rooms component will display either the 'loading' component, the 'error' component or the RoomList component according to the state of the fetching.

The RoomList component is mapping through the array of rooms passed via the props and then renders each room using the Room component.

I chose to give feedback to the user in the form of a snackbar notification popping up when a booking is made. That's the simplest form of feedback I could think of. 

I chose not to use any state management libraries because it would be too overkill for this simple application. Normally I would consider using Recoil because of its ease of use. Redux is too heavy for this app and there is too much boilerplate code.

For styling, I have used Material UI which allows to save time in the design of each UI component. Also the responsiveness can be achieved without too many headaches.

## Improvement ideas

If I had more time, I would spend it on the following:

- Modal dialog to ask for confirmation before booking a room (I would consider using a state management solution)
- Split the rooms list into two categories: rooms with available spots and rooms that are full
- Create small and reusable UI components for all the text rendering components (Typography)
- Logging errors
- Internationalization with i18n (if needed)