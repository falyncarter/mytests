buttons.js:

a js file that holds the code for the handleEdit and handleDelete buttons. this is then exported to main.js with the export function.

-handleEdit function is the code written that takes the resuls based on the users input and takes them off of the table...
...and returns the initial user inputs into the input boxes so the user can change them and then submit again

-handleDelete takes the results from the user's input and takes them off of the table so they no longer appear
_______________________________________________________________________________________________________________________________________________
_______________________________________________________________________________________________________________________________________________


global.js:

a js file that holds the code for the consts waterResults foodResults andtreatsResults. this is then exported to main.js with the export function

-waterResults guidance on what to do for the cat based on what the user inputs. ex- "fine" was selected by the user so the result of that input will cause an output of "dont give food"(same for treats/food)
_____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________


index.html:

an html file that defines the text content of the webpage and gives the site structure. this html file uses the main.js file as a source and style.css file as a link to implement into it's structure. also it creates a form for the user to input data

-this creates a box called cat care which you can input multiple options and then select submit to see what you should based upon those options and the results get displayed in a table into their respective columns

-there is also an area where anerror message is displayed if you forget to fill in one of the fields  after clicking submit

-script is for the html to use the instructions from main.js which is the src. defer src is used so that the html is fully loaded before it starts reading and following the instructions in the script
______________________________________________________________________________________________________________________________________________________________
___________________________________________________________________________________________________________________________________________________________


main.js:

a js file that hold most of the instructions for the website to run. 

-imports bring in certain functions and variables from other files such as buttons.js and global.js and allows them to be then used in the main.js file.

-getInputValue is used to get the value of input elements (like text fields and dropdowns) on the webpage. It checks if an input element exists and returns its value. will return null if nothing found

-displayContent takes information about the food level, water level, cat behavior, and a cat behavior summary. It uses this information to provide advice on how to care for cats. The advice is based on pre-defined data about food, water, and treats. It checks the values of foodLevel, waterLevel, and catBehavior in these objects to find the corresponding advice or information. For example, if foodLevel is "fine," it will look up "Don't give food" from the foodResults object .It combines the advice or information from the different objects into an object with four properties: food, water, treats, and catSummary. These properties hold the advice or information related to food, water, treats, and the cat's behavior summary and then returns this combined advice/information object to be displayed

-updateResults selects specific elements from your HTML by their ID using document.querySelector. if found, the content is updated and displayed. loops for each time the user submits a new entry

-addResultsToArray stores information about cat care in an array and also saves it in your web browser's local storage. It also adds rows to a results table in the webpage's HTML. each new row is filled with the proper results.

-onSubButtClick is a function that basically waits for something to happen and then executes a bunch of stuff inside of it. 

-start makes sure everything runs smoothly and sets the stage for the page
_________________________________________________________________________________________________________________________________________________________________
_________________________________________________________________________________________________________________________________________________________________

style.css: 

a css file that gives colors and fonts and styles the appearance of the webpage. it does this to everything you see on the page whater thats title or headers or the table or the input fields. 