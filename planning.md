# Snooker Scoring Web Application

## Project Overview
A web-based snooker scoring application built with JavaScript, HTML, and CSS that allows two players to keep track of their snooker game scores.

## Pages

### 1. Player Registration (index.html)
#### Features
- Input fields for two players
  - Player One Name
  - Player Two Name
- Form submission saves names to localStorage
- Auto-redirects to scoring page

### 2. Scoring Interface (score.html)
#### Layout Structure
Three-column layout with the following components:

##### Left Column (Player One)
- Player name display (highlighted when active)
- Scoring balls (vertical alignment):
  - Red (1 point)
  - Yellow (2 points)
  - Green (3 points)
  - Brown (4 points)
  - Blue (5 points)
  - Pink (6 points)
  - Black (7 points)
- Score display section:
  - Highest break
  - Frame score

##### Center Column
- Frame score display (e.g., "4 - 3")
- Current break display
- Highest break display (color-coded by player)

##### Right Column (Player Two)
- Mirror of left column layout

#### Control Buttons
1. **End Break**
   - Adds current break to active player's score
   - Switches active player
   - Updates highest break if applicable

2. **End Frame**
   - Awards frame point to winning player
   - Resets break and frame scores
   - Shows congratulatory modal

3. **Subtract Points**
   - Allows correction of scoring errors
   - Subtracts from current frame score

4. **End Match**
   - Displays final results modal
   - Resets all values on confirmation
   - Redirects to index.html

## Interactive Features
- Ball clicking restricted to active player
- Player name clicking to switch active player
- Visual highlighting of active player
- Score tracking and validation
- Persistent storage of game state

## Data Storage
### localStorage Keys
- playerOneName
- playerTwoName
- playerOneFrameScore
- playerTwoFrameScore
- playerOneHighestBreak
- playerTwoHighestBreak
- currentBreak
- activePlayer
- totalFrameScore

## Technical Requirements
- HTML5
- CSS3
- JavaScript (Vanilla)
- Local Storage API
- Responsive Design

## Future Enhancements (Optional)
- Match history
- Statistics tracking
- Undo/Redo functionality
- Sound effects
- Animation effects

