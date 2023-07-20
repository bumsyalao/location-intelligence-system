# Location Intelligence System

This project is a Location Intelligence System that allows users to track and manage vehicle locations. It includes a web-based user interface for interaction and a back-end API for data storage and retrieval. The system utilizes Typescript, React for the front-end development, Node.js and Express for the back-end API, and MongoDB as the database management system. It also integrates with Google Maps Developer APIs for displaying vehicle locations on a map.

⚙️Application features:

    ✨ Add new vehicle
    📲 View vehicle loaction on the map
    📌 Search through list of vehicles
    🛠 Edit vehicle details
    🚀 Delete vehicle

## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [Front-end Development](#Front-endDevelopment)
- [Back-end API](#Back-endAPI)
- [Technologies Used](#TechnologiesUsed)
- [Further Development](#FurtherDevelopment)
- [Deployment](#Deployment)
- [Screenshots](#screenshots)
- [Contributing](#Contributing)
- [License](#License)

## Installation

1. Clone the repository: https://github.com/bumsyalao/location-intelligence-system
2. Install all dependencies
- [Node.js](https://nodejs.org) version 18 or above.
- [MongoDB](https://www.mongodb.com/)
3. Update environment variables
- Rename the .env.example file to .env and add your `DB_URL` MongoDB connection string.
- Rename the client/.env.example file to .env and add your `REACT_APP_GOOGLE_MAP_API_KEY` Google API key string.

4. Install dependencies for the backend-end:
```bash
yarn  or npm install
```
Start server on http://localhost:3030/
```bash
yarn start-dev or npm run start-dev
```

5. Install dependencies for the front-end and start React-Redux app on http://localhost:3000/
```bash
cd client
yarn or npm install
yarn start or npm start 
```


## Front-end Development

The front-end of the Location Intelligence System is built with React, Redux uses redux-persist store, to cache persisted data. The main files and directories are:

- `client/src`
    - `/components`: Contains the various components used in the application.
    - `/layouts`: Contains the various layouts used in the application.
    - `/pages`: Contains the various pages used in the application.
    - `/redux`: Manages the application state using Redux.
    - `/hooks`: Custom React hooks to handle API requests to the back-end server.
    - `/utils`: Contains utility functions and helpers.
    - `/index.tsx`: The main entry point of the React application.

## Back-end API

The back-end API of the Location Intelligence System is built with Node.js and Express. The main files and directories are:
- `server/vehichle/`    
    - `/routes`: Contains the API routes for handling vehicle data.
    - `/controllers`: Implements the logic for handling API requests.
    - `/models`: Defines the data schema for the MongoDB database.
- `server.ts`: The main entry point of the back-end server.
### API Endpoints
    The following API endpoints are available:

- `GET /vehicles` - Get a list of all vehicles.
- `GET /vehicles/:id` - Get a single vehicle by ID.
- `POST /vehicles/create` - Create a new vehicle.
- `PUT /vehicles/:id` - Update an existing vehicle.
- `DELETE /vehicles/:id` - Delete a vehicle.

## Technologies Used

- React
- Redux
- SCSS
- Typescript
- Node.js
- Express
- MongoDB
- Google Maps Developer APIs

## Further Development
This project is a starting point for developing a Location Intelligence System. There are a number of ways that you can further develop the project, such as:

- Adding additional features, such as the ability to track vehicle speed.
- Updating the real-time vehicle location.
- Integrating vehicle tracking system.
- Integrating with other data sources, such as weather data or traffic data.
- Developing a mobile app for the Location Intelligence System.

## Deployment
This project's server is deployed on Heroku App and client is deployed on AWS Amplify

> Time spent developing: 1 week average of 3hours per day.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

## Screenshots
![1](https://res.cloudinary.com/dcpfdxsly/image/upload/v1689812915/Screen_Shot_2023-07-20_at_4.26.10_AM_sl7p3k.png)
![2](https://res.cloudinary.com/dcpfdxsly/image/upload/v1689812915/Screen_Shot_2023-07-20_at_4.25.57_AM_xtivkr.png)
![3](https://res.cloudinary.com/dcpfdxsly/image/upload/v1689812915/Screen_Shot_2023-07-20_at_4.27.04_AM_entgb9.png)
![4](https://res.cloudinary.com/dcpfdxsly/image/upload/v1689812915/Screen_Shot_2023-07-20_at_4.27.44_AM_nvzfry.png)

## License

This project is licensed under the [MIT License](LICENSE).
