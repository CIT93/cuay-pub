My understanding of this code

Breakpoint Steps:

step 1
The script begins by importing necessary functions from the "render.js" and "carbonFootprintModule.js" files.

step 2
The script sets up an event listener that waits for the user to submit the form.
Upon form submission, the event listener triggers and executes its associated function.

step 3
The event listener function prevents the default form submission behavior and retrieves values from the form.
It then calls the start function, which calculates carbon footprint data and populates the cfpData array.
The renderTbl function is then called with the updated cfpData array.

step 4
The script continues to execute the remaining code, including resetting the form, and then waits for future events.

 The code captures form input, calculates carbon footprint data using the start function, and stores the data in the cfpData array.
The renderTbl function dynamically creates and updates a table based on the provided data when the form is submitted.


My Feedback on the video

I think that the video was very helpful. It walked me through all the steps of what the code exactly did and explained everything that it did in detail.I enjoyed this video because it helped give me a better understanding of the code that we created. I feel that I didn't document it as best as the video but I know now how to document codes for future use. Thank you for the video. 

PopulateForm 

 the populateForm function takes an object as an argument and sets the values of the form fields based on the properties of that object.

 Local Storage 

 I am a bit confused on how this local storage works. Not sure if it's me not able to fully grasp what your saying in the video or why I am not able to fully focus on how you are explaining it but from what I was able to gather from the video was that we would use local storage when the user enters their data into the form. We would then want to then get it back once the user deletes the data or refreshes the page. 

 As for JsonStringify if I am understanding correctly that the local storage does not take objects as items to save it can only save in strings. So Json is a code that can help turn our obj into string to store in the local storage. 

 The part where I am lost is how to write it in order for it to be stored in the local storage and how to get it back out. I know you said in the video that we had to enter a key and item we wanted to store. In order to get it out we had to parse it but I am confused how to write the command to store it and get it out. 