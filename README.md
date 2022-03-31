# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game made to apply for CodePath's SITE Program. 

Submitted by: **Kevin Lafreniere**

Time spent: **~9** hours spent in total

Link to project: [Glitch Code](https://glitch.com/edit/#!/memory-game-site-internship) / [Live Site](https://memory-game-site-internship.glitch.me)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Added settings for button count, mistakes allowed, and pattern length.
- [x] Amount of buttons will appear and disappear to match the selected option.

## Video Walkthrough (GIF/YouTube)
* ### [**YOUTUBE VIDEO:**](https://www.youtube.com/watch?v=54FcTzmOt5Y) Multiple demos **with audio** (best quality)
  * Playback speed increase, randomized patterns, and sound changes demoed.

* Demo of button images and winning game
<img src="https://cdn.glitch.global/05a6ac53-1254-4063-912c-ce4a0d5a5dd1/DemoWin.gif" width="500" />

* Demo of extra buttons and losing game with multiple mistakes
  * implementation of settings to change certain game values
<img src="https://cdn.glitch.global/05a6ac53-1254-4063-912c-ce4a0d5a5dd1/DemoMistake.gif" width="500" />

* Demo of loss by running out of time
<img src="https://cdn.glitch.global/05a6ac53-1254-4063-912c-ce4a0d5a5dd1/DemoTime.gif" width="500" />

## Reflection Questions
_**1.** **If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.**_
* [Browser search](https://s-media-cache-ak0.pinimg.com/originals/92/a7/a8/92a7a861691e29bc15e4f284e11b3195.png): for frequencies of different music notes.
* [linuxhint.com](https://linuxhint.com/find-array-length-javascript/): for getting length of an array in javascript.
* [bobbyhadz.com](https://bobbyhadz.com/blog/javascript-change-text-of-span): how to set text of span element.
* [w3schools.com](https://www.w3schools.com): used for HTML references and attribute explanations.
* [soundbible.com](https://soundbible.com/2009-A-Z-Vocalized.html): used for audio clips for alphabet.
* [javatpoint.com](https://www.javatpoint.com/javascript-setinterval-method): used to understand `setInterval()` and `setTimeout()`.
* [tutorialspoint.com](https://www.tutorialspoint.com/javascript-cleartimeout-and-clearinterval-method): used to learn about `clearInterval()` and `clearTimeout()`.
* [stackoverflow.com](https://stackoverflow.com/questions/13002935/html5-audio-start-over): question about replaying audio clips using JavaScript
* [github.com](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet): Readme markdown cheatsheet

_**2.** **What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)**_
* I struggled with creating the guess function. 
  * I was confused on what if-statement to use for the `Is turn over?` branch of the flowchart. 
  * I solved this issue by going back in the prework document to refresh on what each variable is intended to be used for. 
  * Reading what the `progress` variable is for gave me enough information to create an if-statement to handle the branch.
* I got stuck implementing the timer as I wasn't sure where to tell the timer to start. 
  * I resolved this by referring to how `setTimeout()` was used, which led me to find out how to use intervals and timeouts. 
  * Using this information, I used `setTimeout` to start the timer right after the sequence ended, and `clearInterval` and `clearTimeout` for when the game resets.
* I ran into issues when using audio clips instead of the tones. They would play, but they would only play once. 
  * After some browsing I found a stackoverflow question that was similar to mine that had a simple solution.
  * The solution was to set the audio clip's `currentTime` equal to zero, allowing `play` to be used again.
* Creating the demos was a struggle as there were many features to demo, some with audio.
  * I fixed this problem by creating a video to add along with my GIFs that would showcase all of the features I had implemented.
  * This solution provides more complete accessibility for the graders to view my work.

_**3.** **What questions about web development do you have after completing your submission? (recommended 100 - 300 words)**_
* I am interested in what security issues a web developer needs to worry about with HTML, since anyone viewing the webpage can see the HTML
* This makes me also wonder what the limitations are with standard HTML and JavaScript, as many websites today have more complex designs and functionality.
* I have many questions about HTML tag nesting abilities. I was able to put an image inside of a button, but I know that some tags can't properly be nested in certain tags.
* I know about local website hosting, but I wonder about the process of creating and hosting your own site for the world to see.
  * Furthermore, I wonder about database storage and how high traffic websites handle so much data fetching from their servers.

_**4**. **If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)**_
* Further improving the styling of the site to be more polished and eye-catching.
  * Could modify CSS or use Bootstrap
  * Apply custom fonts
  * Center the user interface
  * Make it scale effectively for different screen sizes
  * Replace alerts with an HTML element
* Make the settings into a popup menu instead of a fixed table.
* Remove ability to press buttons during pattern sequences.
* Prevent drag clicking
* Add more settings
  * Change time limit for guess
  * Option to play audio clip or tones
  * Option for images vs. no images
  * Volume options
* "Endless Mode"
  * No limit to pattern length
  * Pattern will continue to generate as long as user is correct
  * High scores could be saved


## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.youtube.com/watch?v=54FcTzmOt5Y)


## License

    Copyright [Kevin Lafreniere]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
