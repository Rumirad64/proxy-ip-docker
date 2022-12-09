# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

docker build . -t proxy-web-ui

docker run -p 3000:80 -e REACT_APP_API_URL=https://staging.api.com -t proxy-web-ui