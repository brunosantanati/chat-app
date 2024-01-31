# chat-app
Node.js application which uses sockets. One of the applications built in this course: https://www.udemy.com/course/the-complete-nodejs-developer-course-2/  

## Make sure to use the right version

<code>nvm install 11.0.0</code>  
<code>nvm use 11.0.0</code>  

I started getting this error when trying to run the application using Node v11.0.0:  
<code>Segmentation fault (core dumped)</code>  
So, I found the closest LTS version and used it instead:  
<code>nvm ls-remote --lts</code>  
<code>nvm install v12.13.0</code>  
<code>nvm use v12.13.0</code>  

## Commands used
```
npm init
npm i express@4.16.4
node src/index.js
npm i nodemon@1.18.7 --save-dev
npm run start
npm run dev
npm i socket.io@2.2.0
npm i bad-words@3.0.0
```

## Links

[socket.io](https://socket.io/)  
[geolocation](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)  
[bad-words](https://www.npmjs.com/package/bad-words)  
[Moment.js](https://momentjs.com/)  
[Moment.js - Display](https://momentjs.com/docs/#/displaying/)  

## Resources Links

[chatlibs](http://links.mead.io/chatlibs) ([Gist link](https://gist.github.com/andrewjmead/3e3e310aea27f10f7f1ce506b39dfcbe))  
[chat assets](http://links.mead.io/chatassets) ([the same as this](https://files.mead.io/35188b9dfb61))  

## Other branches

[count](https://github.com/brunosantanati/chat-app/tree/count)  