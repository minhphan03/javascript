A promise in JavaScript is exactly what it sounds like - you use it to make a promise to do something, usually asynchronously. When the task completes, you either fulfill your promise or fail to do so. Promise is a constructor function, so you need to use the new keyword to create one. It takes a function, as its argument, with two parameters - resolve and reject. These are methods used to determine the outcome of the promise. The syntax looks like this:

```js
const makeServerRequest = new Promise((resolve,reject) => {});
```

we pass an object with parameters like that. Just a reminder on how to pass objects and parameters into constructors.

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

//if true (go to resolve)
makeServerRequest.then(result => console.log(result));
//if false (go to reject)
makeServerRequest.catch(error => console.log(error));
```
