# weatherApp - Service

This application is meant to provide weather information and forecast under a wrapper model.

---

## Architectural decisions

For a better and easier coding experience I have used [**nodemon**](https://nodemon.io/), [**Express**](https://expressjs.com) to manage routes, [**Helmet**](https://helmetjs.github.io/) for security enforcements, [**axios**](https://axios-http.com/) for external calls, [**dotenv**](https://dotenv.org/) for environmental variables handling, [**Open Weather**](https://openweathermap.org/)*(1)* for climate information and [**IP API**](https://ip-api.com/)*(1)* for client localization.

*(1) As recommended by the requester*

I could have created self-signed certificates (same as nothing) to handle https connections, although most of current architectures have a Load Balancer or CDN in front which already encrypt communication.

## Assets reusage

Besides the usage of frameworks, libraries and the files *.eslintrc*, *.gitignore* and *babel.config.js*, everything was created from scratch (haven't copied files nor configurations from anywhere).

## Timeline

From start to finish it took me about 12 hours of work to get up to this point.

I started coding it on Sunday night (about 4 hours to build the directories structure, create tokens needed, start designing routes and implementing current weather and forecast for the client's location), continued it on Tuesday where I made the functions that handle current weather and forecast for any location and finished it on Wednesday night when implemented testing.

## Coding standards

To enforce coding standards I have installed [**Babel**](https://babeljs.io/) and used [**Airbnb's ESLint style guide**](https://github.com/airbnb/javascript).

## Starting up the application

In order to initialize the application you must have [**node**](https://nodejs.org/en/download/) and [**yarn**](https://classic.yarnpkg.com/lang/en/docs/install/) installed on your environment.

Once you have accomplished those prerequisites, just get to the same level where the package.json file for this repository is and execute:
```sh
yarn
yarn start
```

## Testing

For this topic I have picked [**Jest**](https://jestjs.io/) for unit-testing and [**Supertest**](https://github.com/visionmedia/supertest#readme) for integration-testing, enforcing both with **Jest**'s coverage implementation.

For mocking up external calls, I have chosen [**axios-mock-adapter**](https://github.com/ctimmerm/axios-mock-adapter#readme).

To run it locally you can execute:
```sh
yarn test
```

## Known issues

- I had problems with supertest and some of the weather endpoints (/v1/current/* and /v1/forecast/*) which are reacheable from any REST client. Apparently is something that has been reported by users [many times before](https://github.com/visionmedia/supertest/issues/255) but still not addressed.
- Obviously the **.env** file is one of those normally included on .gitignore, although this time I left it on the repository to ease your testing and review. Regarding the "leaked" API is not something I particullary care because this is a coding exercise and once the review finishes I'll completely remove the repository and delete my API credentials.

## Room for improvement

- Although is pretty optimized, both Service and UI could use GraphQL to reduce communication payloads.
- Implement the solution with TypeScript instead of plain JavaScript.
