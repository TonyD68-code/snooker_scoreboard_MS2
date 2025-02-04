document.addEventListener('DOMContentLoaded', function() {
    // Get player names from localStorage
    const playerOneName = localStorage.getItem('playerOneName');
    const playerTwoName = localStorage.getItem('playerTwoName');
    
    // Set player names in the HTML
    document.getElementById('player-one-name').textContent = playerOneName;
    document.getElementById('player-two-name').textContent = playerTwoName;
    
    // Optional: Log to verify
    console.log('Player One:', playerOneName);
    console.log('Player Two:', playerTwoName);
});


        