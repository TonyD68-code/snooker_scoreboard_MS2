# Snooker Scoring Web Application

A web-based application for tracking scores in snooker matches. Built with vanilla JavaScript, HTML5, and CSS3, this app provides an intuitive interface for two players to track their snooker game scores, breaks, and frame wins.

## 🎱 Rules of Snooker
<details>
<summary>Click to expand</summary>

Snooker is played on a large table where players must pot balls in a specific order:
1. Red balls must be potted first (1 point each)
2. After each red, players can choose any colored ball (which is returned to its spot)
3. Once all reds are gone, colored balls must be potted in order:
   - Yellow (2 points)
   - Green (3 points)
   - Brown (4 points)
   - Blue (5 points)
   - Pink (6 points)
   - Black (7 points)

Players accumulate points through "breaks" (consecutive successful shots). The player with the most points wins the frame, and matches are typically played as "best of" a certain number of frames.

Fouls result in penalty points being awarded to the opponent, ranging from 4 to 7 points depending on the circumstances.
</details>

## 👥 User Experience

### First Time Visitor Goals
- Easily understand how to start a new game
- Input player names intuitively
- Quickly grasp the scoring interface
- Track scores without confusion

### Returning Visitor Goals
- Quickly start new matches
- View match history (coming soon)
- Track personal statistics (coming soon)

### Site Owner Goals
- Provide a reliable scoring system
- Create an easy to use interface
- Ensure accurate score tracking
- Enable easy score correction

## 🐛 Known Bugs and Fixes

| Bug | Status | Fix |
|-----|--------|-----|
| Double-clicking balls adds score twice | Fixed | Added click event debouncing |
| Player names not capitalizing consistently | Fixed | Implemented capitalize function |
| Foul points sometimes awarded to wrong player | In Progress | Reviewing logic |

## ✅ Testing

### User Story Testing
| User Story | Test | Result |
|------------|------|---------|
| "As a user, I want to easily input player names" | Tested name input validation | Pass |
| "As a user, I want to track current break" | Tested break accumulation | Pass |
| "As a user, I want to correct scoring mistakes" | Tested point subtraction | Pass |

### Browser Compatibility
- Chrome (Version 100+) ✅
- Firefox (Version 95+) ✅
- Safari (Version 15+) ✅
- Edge (Version 95+) ✅

### Device Testing
- Desktop 💻
- Tablet 📱
- Mobile Phones 📱

## 🎨 Features

### Existing Features
- Two-player score tracking
- Frame score management
- Current break display
- Highest break tracking
- Foul point system
- Active player highlighting

### Future Features
- Match history
- Player statistics
- Undo/Redo functionality
- Sound effects
- Break animations

## 🛠 Technologies Used

### Languages
- HTML5
- CSS3
- JavaScript

### Frameworks & Libraries
- Bootstrap 5.3.3
- Google Fonts
- Local Storage API

## 💡 Credits

### Code
- Bootstrap Documentation
- MDN Web Docs
- W3Schools

### Media
- Ball images: elements.envato.com
- Background image: elements.envato.com

### Acknowledgements
- My mentor Sheryl
- The current snooker world champion for feedback and future features
- Code Institute for project guidance
- Stack Overflow for debugging
- Slack community for support



---
