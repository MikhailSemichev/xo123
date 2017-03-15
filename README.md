# xo123 cross-platform app on React 

## Running Node Express Web Service (Back-End of the app with web-sockets)

Make sure you have [Node.js](http://nodejs.org/).

```
$ git clone https://github.com/MikhailSemichev/xo123.git
$ cd xo123
$ npm install
$ npm start
```

Service will now be running on [http://localhost:3333/](http://localhost:3333/).


## Running React Front-End Application

```
$ cd ReactApp
$ npm install
$ npm start
```

Web-site will now be running on [http://localhost:3000/](http://localhost:3000/).
It communicates with Node Express Web Service [http://localhost:3333/](http://localhost:3333/) via web-sockets.


## Deploy on hosting (Heroku)

[How to deploy NodeJS on Heroku Tutorial](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)

```
$ npm run build_h
  commit_and_push_you_code_to_git_repository
```


## Running Mobile Application using Cordova
Install Cordova [https://cordova.apache.org/docs/ru/latest/guide/cli/](https://cordova.apache.org/docs/ru/latest/guide/cli/)

```
$ cd MobileApp
$ npm install -g cordova
```

Install Android SDK (and/or iOS SDK).
[https://developer.android.com/studio/index.html](https://developer.android.com/studio/index.html)

Install JDK (Java Development Kit)[http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)



Install platforms:
```
$ cordova platform add browser
$ cordova platform add android
```

Run in Android emulator (as example):
```
$ cordova run android
```

## Electron Application


Install Electron:
```
$ cd ElectronApp
$ npm install -g electron
$ npm install
```


## Documentation

For more information on technologies:
- [React.js documentation](https://facebook.github.io/react/docs/hello-world.html)
- [Mobx.js - best state management for React](https://mobx.js.org/)

- [Node.js documentation](https://nodejs.org/en/)
- [Express documentation](https://expressjs.com/en/api.html)
- [Socket.io documentation](http://devdocs.io/socketio/)
- [Hosting Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)

- [Cordova documentation](https://cordova.apache.org/docs/ru/latest/guide/cli/index.html)

