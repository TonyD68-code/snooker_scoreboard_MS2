document.addEventListener('DOMContentLoaded', function() {
    const playerForm = document.querySelector('.player-form');
    
    playerForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission
        
        // Get both player names from input fields
        const playerOneName = document.getElementById('player-one').value;
        const playerTwoName = document.getElementById('player-two').value;
        
        // Save both names to localStorage
        localStorage.setItem('playerOneName', playerOneName);
        localStorage.setItem('playerTwoName', playerTwoName);
        
        // Log to confirm it's working REMOVE LOG LATER
        console.log('Player One Name saved:', playerOneName);
        console.log('Player Two Name saved:', playerTwoName);
    });
});
