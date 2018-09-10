
/* build the textString * to be replaced with input from user
*/
let textString = ''
textString += 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey.'
textString += ' It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos.'
textString += ' It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.'
textString += '  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.'
textString += '  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.'

let overusedWords = ['really', 'very', 'basically'];

// below are 'input words' these will be used to check your writing for custom overused words in the list
//for now 2 add a scaling solution later

let inputOne = 'really';
let inputTwo = 'very';
//
let inputOneCounter = 0;
let inputTwoCounter = 0;

// list of words to be deleted or unecessary
let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let textStringWords = textString.split(' ');

let betterWords = textStringWords.filter(word => !unnecessaryWords.includes(word));

betterWords.forEach(function(word){
  
  for(let i = 0; i < overusedWords.length;i++){  //
    if(word === overusedWords[i]){ 
       let tempString = overusedWords[i]
       
       if(tempString === inputOne){
         inputOneCounter += 1;
       }
       else if(tempString === inputTwo){
         inputTwoCounter += 1;
       }
     }
  }
  
});

/* will count the number of sentences
Add in the ability to check for double sepcial characters '. , / ; '? , . etc and mistypes
*/
let sentences = 0;
betterWords.forEach(word => {
  if (word[word.length-1] === '.' || word[word.length-1] === '!') {
    sentences+=1;
  }
});

// Tests
console.log(betterWords.length);
console.log(inputOneCounter);
console.log(inputTwoCounter);
console.log(sentences)
//console.log(betterWords.length);

/*
####### Future To Do #######
	# Add in custom paramaters for unecessary words
  # redo input for overused words 
  # Add in custom text input to scrub
  # Convert entire script to a function call for 		  larger program
  # Plan other additions
  
*/
