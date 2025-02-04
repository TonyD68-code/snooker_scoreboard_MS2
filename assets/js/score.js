document.addEventListener('DOMContentLoaded', function() {
    // Display player names from localStorage
    document.getElementById('player-one-name').textContent = localStorage.getItem('playerOneName');
    document.getElementById('player-two-name').textContent = localStorage.getItem('playerTwoName');
    
    // Initialize variables
    let currentBreak = 0;
    let activePlayer = 'player-one'; // Start with player one as active
    
    // Function to update active player visual indication
    function updateActivePlayerDisplay() {
        // Reset both columns
        document.getElementById('player-one-name').classList.remove('active-player');
        document.getElementById('player-two-name').classList.remove('active-player');
        
        // Highlight active player
        document.getElementById(`${activePlayer}-name`).classList.add('active-player');
    }
    
    // Get all red ball images
    const redBalls = document.querySelectorAll('.ball-img[src*="red"]');
    
    // Add click event listeners to red balls
    redBalls.forEach(ball => {
        ball.addEventListener('click', function() {
            // Get the column this ball belongs to
            const column = this.closest('.col-4');
            const isPlayerOneColumn = column.contains(document.getElementById('player-one-name'));
            
            // Check if this ball belongs to the active player
            if ((activePlayer === 'player-one' && isPlayerOneColumn) ||
                (activePlayer === 'player-two' && !isPlayerOneColumn)) {
                
                // Add 1 point to current break
                currentBreak += 1;
                
                // Update current break display
                document.getElementById('current-break').textContent = currentBreak;
                
                // Log for testing
                console.log(`${activePlayer} scored a red ball! Current break: ${currentBreak}`);
            } else {
                console.log("Not your turn!");
            }
        });
    });
    
    // Get all yellow ball images
    const yellowBalls = document.querySelectorAll('.ball-img[src*="yellow"]');
    
    // Add click event listeners to yellow balls
    yellowBalls.forEach(ball => {
        ball.addEventListener('click', function() {
            // Get the column this ball belongs to
            const column = this.closest('.col-4');
            const isPlayerOneColumn = column.contains(document.getElementById('player-one-name'));
            
            // Check if this ball belongs to the active player
            if ((activePlayer === 'player-one' && isPlayerOneColumn) ||
                (activePlayer === 'player-two' && !isPlayerOneColumn)) {
                
                // Add 2 points to current break
                currentBreak += 2;
                
                // Update current break display
                document.getElementById('current-break').textContent = currentBreak;
                
                // Log for testing
                console.log(`${activePlayer} scored a yellow ball! Current break: ${currentBreak}`);
            } else {
                console.log("Not your turn!");
            }
        });
    });
    
    // Get all green ball images
    const greenBalls = document.querySelectorAll('.ball-img[src*="green"]');
    
    // Add click event listeners to green balls
    greenBalls.forEach(ball => {
        ball.addEventListener('click', function() {
            // Get the column this ball belongs to
            const column = this.closest('.col-4');
            const isPlayerOneColumn = column.contains(document.getElementById('player-one-name'));
            
            // Check if this ball belongs to the active player
            if ((activePlayer === 'player-one' && isPlayerOneColumn) ||
                (activePlayer === 'player-two' && !isPlayerOneColumn)) {
                
                // Add 3 points to current break
                currentBreak += 3;
                
                // Update current break display
                document.getElementById('current-break').textContent = currentBreak;
                
                // Log for testing
                console.log(`${activePlayer} scored a green ball! Current break: ${currentBreak}`);
            } else {
                console.log("Not your turn!");
            }
        });
    });
    
    // Initial active player display
    updateActivePlayerDisplay();
});


        