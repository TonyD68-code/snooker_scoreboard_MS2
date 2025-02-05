Added to make quick notes during development for reference when needed for readme.md

FUNCTIONALITY ADDED:
- Added player name input and storage to localStorage (index.js)
- Added media queries for score.html control buttons for responsive design
- Implemented 3-column layout with Bootstrap
- Added ball images in vertical lists
- Added scoring functionality:
  - Red ball = 1 point
  - Yellow ball = 2 points
  - Brown ball = 3 points
  - Green ball = 4 points
  - Blue ball = 5 points
  - Pink ball = 6 points
  - Black ball = 7 points
- Implemented active player system:
  - Visual highlighting of active player
  - Click player names to switch turns
  - Only active player can score
- Added End Break functionality:
  - Adds current break to player's frame score
  - Updates highest break if applicable
  - Resets current break to zero
  - Switches active player
- Added Subtract Points functionality:
  - Subtracts current break from active player's frame score
  - Resets current break to zero
- Added End Frame functionality:
  - Updates frame score (e.g., "2-1")
  - Shows modal with winner and score difference
  - Option to play another frame or end match
  - Resets frame scores while keeping highest breaks

FIXES:
- Fixed button sizing for mobile devices
- Fixed active player highlighting using CSS specificity
- Fixed column layout to maintain 3 columns on mobile
- Fixed ball image sizing and spacing
- Fixed modal functionality by adding Bootstrap js bundle
- Fixed code organization and indentation in score.js and score.html

STYLING:
- Added background image
- Centered form fields with consistent width
- Added green rounded button for start game
- Added white text for visibility
- Added gold highlighting for active player
- Consistent button sizing and spacing

REFACTORING:
- Refactored code in score.jsto make more efficient


NEXT STEPS:
- Add remaining colored ball scoring
- Implement End Match functionality
- Add sound effects for ball clicks and button presses
- Refactor code to make more efficient


-If time allows, Nice to have...

- Add animation effects for scoring
- Add foul point system: (revove subract points functionality)
  - 4 point fouls
  - 5 point fouls
  - 6 point fouls
  - 7 point fouls
- Add remaining balls counter for red balls


CREDITS:
- JavaScript localStorage implementation for player names inspired by Scrimba.com free JavaScript lessons and https://www.freecodecamp.org/news/use-local-storage-in-modern-applications/#a-practical-example
- Media queries for responsive control buttons adapted from YouTube tutorial: Learn with Hitgoc https://www.youtube.com/watch?v=nppV4aDtuvo 

- Modal on end frame functionality assisted by https://www.w3schools.com/bootstrap/bootstrap_modal.asp and Udemy javascript course Master the art of JavaScript Programming by Craig Buckler
- subtract button functionality added with research on stack overflow
- refactoring assistance from stack overflow https://stackoverflow.com/questions/79413327/refactoring-the-following-javascript/79413352#79413352
- dropdown menu for foul points button assisted by https://www.w3schools.com/bootstrap/bootstrap_dropdowns.asp


TESTING:
Manual Testing Performed:
- Form Validation:
  - Tested empty name submissions
  - Tested spaces-only submissions
  - Tested special characters in names
  - Verified localStorage saves correctly

- Scoring System:
  - Verified red balls add 1 point
  - Verified yellow balls add 2 points
  - Verified green balls add 3 points
  - Verified brown balls add 4 points
  - Verified blue balls add 5 points
  - Verified pink balls add 6 points
  - Verified black balls add 7 points
  - Confirmed only active player can score
  - Tested scoring in both player columns
  - Verified current break updates correctly

- Player Switching:
  - Tested name click functionality
  - Verified active player highlighting
  - Confirmed correct player stays active after scoring
  - Tested switching during ongoing break

- End Break Button:
  - Verified score adds to correct player
  - Confirmed highest break updates correctly
  - Tested zero point breaks
  - Verified player switch after break end
  - Confirmed current break resets to zero

- Subtract Button:
  - Verified points subtract from correct player
  - Tested subtraction with zero score
  - Confirmed current break resets after subtraction
  - Verified display updates correctly

- End Frame Button:
  - Tested frame completion modal
  - Verified winner calculation
  - Tested play next frame functionality
  - Confirmed score difference calculation
  - Verified frame score updates correctly

- Responsive Design:
  - Tested on multiple screen sizes
  - Verified column layout maintains on mobile
  - Confirmed button sizing on different devices
  - Checked text readability on all backgrounds

Browser Testing:
- Chrome (Version xx.x)
- Firefox (Version xx.x)
- Safari (Version xx.x)
- Edge (Version xx.x)

Known Bugs:
- None currently identified








