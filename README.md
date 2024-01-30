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
```

## Links

[socket.io](https://socket.io/)  


## Other branches

[count](https://github.com/brunosantanati/chat-app/tree/count)  