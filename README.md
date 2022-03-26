# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Kevin Lafreniere**

Time spent: **#** hours spent in total

Link to project: [GitHub Project](https://github.com/kevinlafreniere/memory-game-prework)

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

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![testing](gif1-link-here)
![](gif2-link-here)
![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions
_**1**. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here._
* [Browser search](https://s-media-cache-ak0.pinimg.com/originals/92/a7/a8/92a7a861691e29bc15e4f284e11b3195.png): for frequencies of different music notes.
* [linuxhint.com](https://linuxhint.com/find-array-length-javascript/): for getting length of an array in javascript.
* [bobbyhadz.com](https://bobbyhadz.com/blog/javascript-change-text-of-span): how to set text of span element.
* [w3schools.com](https://www.w3schools.com): used for HTML references and attribute explanations.
* [soundbible.com](https://soundbible.com/2009-A-Z-Vocalized.html): used for audio clips for alphabet.

_**2**. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)_
* I struggled with creating the guess function. I was confused on what if-statement to use for the `Is turn over?` branch of the flowchart. I solved this issue by going back in the prework document to refresh on what each variable is intended to be used for. Reading what the `progress` variable is for gave me enough information to create an if-statement to handle the branch.

_**3**. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)_
* I am interested in what security issues a web developer needs to worry about with HTML, since anyone viewing the webpage can see the HTML
* This makes me also wonder what the limitations are with standard HTML and JavaScript, as many websites today have more complex designs and functionality.

_**4**. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)_
* Further improving the styling of the site to be more polished and eye-catching.


## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


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