/* 
variables naming : we will use camelCase as convention eg. as a name for a function that update the clock you can use clockUpdate or updateClock... DO NOT USE OTHER CONVENTION HERE! 


problem description : 

Is there a UI? one analog and one digital clock in the UI 
does the user input data? NA
where data came from? it came from the user's browser automatically as he access the page 
What is the desired Output? a fully functional digital and analog watch
How we are going to get the desired output? we need to figure out a way to parse the date coming from the browser to get the necessary data for both clocks.  

Pseudo-code / algorithm: 
for digital clock 
WHEN user come 
    get date 
    get necessary data for the clock (hour,minutes,seconds) and store them 
    put the data together in the desired form 
    output the result to the DOM 
For analog clock 
    get date 
    get necessary data for the clock (hour,minutes,seconds) and store them 
    put the data together in the desired form 
    create a function convert data to degrees in the clock circle 
    output result to the DOM

*/