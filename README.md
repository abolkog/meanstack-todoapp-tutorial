# TODO App

Simple  TODO App built with MEAN stack. This repository is for the tutorial (MEAN Stack for beginners in Arabic) at abolkog.com
You can view the final application deployed at Heroku from the following link [https://mean-app-tutorial.herokuapp.com/#/main](https://mean-app-tutorial.herokuapp.com/#/main)
Note it might take some time to load as I am using the free dynos which sleeps when there is no activity after a certain ammount of time

### Stack Used in this applcation
  - NodeJS
  - ExpressJS
  - MongoDB
  - Angular4

### Setting up & Installation Locally
1- clone this repository and run npm install
```
npm install
```

2- create .env file in the root directory and add the Database and Port settings
example (file .env):
```
MONGODB_URI=mongodb://localhost:27017/todoapp
PORT=3000
SECRET=YOUR_SECRET_HERE
```

3- Create proxy-config.json in the frontend root directory (angular4) and setup the proxy as follow
```
{
  "/": {
    "target": "http://localhost:3000/",
    "secure": false
  }
}
```

3- Start the back-end server using npm start or ``nodemon ``
```
node start
```

4- Start the angular server using the proxy
```
cd frontend
npm start
```
