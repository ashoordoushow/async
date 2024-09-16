// function firstTask() {
//   console.log('first task completed');
// }

// function secondTask() {
//   console.log('second task completed');
// }

// setTimeout(firstTask, 2000); //this is the method used to run this function with a 2 second delay
// // firstTask() 
// // When putting '()' after the function Ex. firstTask(), it's saying run the function right now. when using the method to print out after 2 seconds we dont involve the paranthesis after the function because we dont want it to run right away, we're sending it to the future (after waiting 2 second), then it'll print out the output

// secondTask();
// // setTimeout(secondTask, 2000)

// function firstTask() {
//   console.log('first task completed');
// }

// setTimeout(firstTask, 2000); 

// function secondTask() {
//   console.log('second task completed');
// }

// setTimeout(secondTask, 2000); 

// function thirdTask() {
//   console.log('third task completed');
// }

// setTimeout(secondTask, 2000);

// First task
setTimeout(function() {                 //This is how you write the code to run first task wait 2 seconds, second task wait 2 seconds, then third task wait to seconds
  console.log('First task done!');

  // Second task
  setTimeout(function() {
    console.log('Second task done!');

    // Third task
    setTimeout(function() {
      console.log('Third task done!');
    }, 2000); // Wait another 2 seconds
  }, 2000); // Wait 2 seconds
}, 2000); // Wait 2 seconds




  
  