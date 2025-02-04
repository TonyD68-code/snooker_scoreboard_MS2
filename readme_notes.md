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

FIXES:
- Fixed button sizing for mobile devices
- Fixed active player highlighting using CSS specificity
- Fixed column layout to maintain 3 columns on mobile
- Fixed ball image sizing and spacing


STYLING:
- Added background image
- Centered form fields with consistent width
- Added green rounded button for start game
- Added white text for visibility
- Added gold highlighting for active player

NEXT STEPS:
- Add remaining colored ball scoring
- Implement End Frame functionality
- Implement End Match functionality
- Add sound effects for ball clicks and button presses

If time allows, Nice to have...

- Add animation effects for scoring
- Add foul point system: (revove subract points functionality)
  - 4 point fouls
  - 5 point fouls
  - 6 point fouls
  - 7 point fouls
- Add remaining balls counter for red balls



CREDITS:
- JavaScript localStorage implementation for player names inspired by Scrimba.com free JavaScript lessons
- Media queries for responsive control buttons adapted from YouTube tutorial: Learn with Hitgoc https://www.youtube.com/watch?v=nppV4aDtuvo 
- subtract button functionality added with research on stack overflow








