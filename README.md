# What is Hacky
This is a serious game to raise awareness of good IT security practices

## DEMO
A demo of the game is available [here](https://hacky-the-serious-game.herokuapp.com/).
Have fun !!

## DEVELOPPEMENT
### Install project
In **this folder**, run :
`npm install`
or
`yarn`

In the **client**, run :
`npm install`
or
`yarn`

### Config project
### Backend
In folder server/config, create `.env` file, with configuration like that :
```
PORT=
NODE_ENV="development"
DATABASE=
DATABASE_TEST=
CLIENT_URL=
```
Complete this variable for running the server :

PORT= The port on which the server will run (default : 5000)

DATABASE The adress of mongo database

DATABASE_TEST = The adress of mongo database we using for unit test

CLIENT_URL= The client adress for cors (example : http://localhost:3000)

### Front
In client folder, add `.env` file with this config
```
VITE_REACT_APP_API_URL=http://localhost:5000
```
VITE_REACT_APP_API_URL is the url of backend

And create `.env.production` with **this exact configuration** :
```
VITE_REACT_APP_API_URL=
```

### Run project
In **this folder**, run :
`npm run start`
or
`yarn start`

And in same time, open other terminal and in client folder, run :
`npm run dev`
or
`yarn dev`

## PRODUCTION
### Build interface
In client folder, run :
`npm run build`
or
`yarn build`

