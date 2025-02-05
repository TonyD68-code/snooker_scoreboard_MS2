/*jshint esversion: 6 */
document.addEventListener('DOMContentLoaded', function() {
    // Initialize variables
    let currentBreak = 0;
    let activePlayer = 'player-one';
    let playerOneFrameScore = 0;
    let playerTwoFrameScore = 0;
    let playerOneHighestBreak = 0;
    let playerTwoHighestBreak = 0;
    let playerOneFrameWins = 0;
    let playerTwoFrameWins = 0;
    let startingPlayer = 'player-one';

    // Add capitalize function
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    // Display player names from localStorage with capitalization
    document.getElementById('player-one-name').textContent = 
        capitalizeFirstLetter(localStorage.getItem('playerOneName'));
    document.getElementById('player-two-name').textContent = 
        capitalizeFirstLetter(localStorage.getItem('playerTwoName'));

    // Function to update active player display
    function updateActivePlayerDisplay() {
        document.getElementById('player-one-name').classList.remove('active-player');
        document.getElementById('player-two-name').classList.remove('active-player');
        document.getElementById(`${activePlayer}-name`).classList.add('active-player');
    }

    // Function to switch active player
    function switchActivePlayer() {
        activePlayer = activePlayer === 'player-one' ? 'player-two' : 'player-one';
        updateActivePlayerDisplay();
    }

    // Add click handlers to player names
    document.getElementById('player-one-name').style.cursor = 'pointer';
    document.getElementById('player-two-name').style.cursor = 'pointer';
    document.getElementById('player-one-name').addEventListener('click', switchActivePlayer);
    document.getElementById('player-two-name').addEventListener('click', switchActivePlayer);

    // Add sound effects
    const sounds = {
        ball: new Audio('assets/sounds/ball-hit.mp3'),
        button: new Audio('assets/sounds/button-click.mp3'),
        endFrame: new Audio('assets/sounds/end-frame.mp3'),
        foul: new Audio('assets/sounds/foul.mp3')
    };

    // Function to play sound with error handling
    function playSound(soundType) {
        try {
            sounds[soundType].currentTime = 0; // Reset sound to start
            sounds[soundType].play();
        } catch (error) {
            console.log('Sound could not be played:', error);
        }
    }

    // Function to handle ball clicks
    function handleBallClick(color, points) {
        const balls = document.querySelectorAll(`.ball-img[src*="${color}"]`);
        balls.forEach(ball => {
            ball.addEventListener('click', function() {
                const column = this.closest('.col-4');
                const isPlayerOneColumn = column.contains(document.getElementById('player-one-name'));
                
                if ((activePlayer === 'player-one' && isPlayerOneColumn) ||
                    (activePlayer === 'player-two' && !isPlayerOneColumn)) {
                    playSound('ball');
                    currentBreak += points;
                    document.getElementById('current-break').textContent = currentBreak;
                } else {
                    console.log("Not your turn!");
                }
            });
        });
    }

    // Add click handlers for all balls
    handleBallClick('red', 1);
    handleBallClick('yellow', 2);
    handleBallClick('green', 3);
    handleBallClick('brown', 4);
    handleBallClick('blue', 5);
    handleBallClick('pink', 6);
    handleBallClick('black', 7);

    // End Break button handler
    document.getElementById('end-break').addEventListener('click', function() {
        playSound('button');
        if (activePlayer === 'player-one') {
            playerOneFrameScore += currentBreak;
            if (currentBreak > playerOneHighestBreak) {
                playerOneHighestBreak = currentBreak;
                document.getElementById('player-one-highest-break').textContent = playerOneHighestBreak;
            }
            document.getElementById('player-one-frame-score').textContent = playerOneFrameScore;
        } else {
            playerTwoFrameScore += currentBreak;
            if (currentBreak > playerTwoHighestBreak) {
                playerTwoHighestBreak = currentBreak;
                document.getElementById('player-two-highest-break').textContent = playerTwoHighestBreak;
            }
            document.getElementById('player-two-frame-score').textContent = playerTwoFrameScore;
        }
        currentBreak = 0;
        document.getElementById('current-break').textContent = currentBreak;
        switchActivePlayer();
    });

    // Add foul points handler
    document.querySelectorAll('.dropdown-item').forEach(button => {
        button.addEventListener('click', function() {
            playSound('foul');
            const foulPoints = parseInt(this.dataset.foul);
            
            // Add foul points to non-active player's score
            if (activePlayer === 'player-one') {
                playerTwoFrameScore += foulPoints;
                document.getElementById('player-two-frame-score').textContent = playerTwoFrameScore;
            } else {
                playerOneFrameScore += foulPoints;
                document.getElementById('player-one-frame-score').textContent = playerOneFrameScore;
            }
            
            // Reset current break
            currentBreak = 0;
            document.getElementById('current-break').textContent = currentBreak;
            
            // Switch active player
            switchActivePlayer();
            
            console.log(`Foul: ${foulPoints} points awarded to ${activePlayer}`);
        });
    });

    // End Frame button handler
    document.getElementById('end-frame').addEventListener('click', function() {
        playSound('endFrame');
        const winner = playerOneFrameScore > playerTwoFrameScore ? 'player-one' : 'player-two';
        const winnerName = capitalizeFirstLetter(winner === 'player-one' ? 
            localStorage.getItem('playerOneName') : 
            localStorage.getItem('playerTwoName'));
        const loserName = capitalizeFirstLetter(winner === 'player-one' ? 
            localStorage.getItem('playerTwoName') : 
            localStorage.getItem('playerOneName'));
        const scoreDifference = Math.abs(playerOneFrameScore - playerTwoFrameScore);
        
        if (winner === 'player-one') {
            playerOneFrameWins++;
        } else {
            playerTwoFrameWins++;
        }
        
        document.getElementById('frame-score').textContent = 
            `${playerOneFrameWins} - ${playerTwoFrameWins}`;

        const modalHTML = `
            <div class="modal fade" id="endFrameModal" tabindex="-1" role="dialog" aria-labelledby="frameCompleteTitle">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="frameCompleteTitle">Frame Complete!</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>Congratulations ${winnerName}!</p>
                            <p>You beat ${loserName} by ${scoreDifference} points.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" aria-label="End match and return to start">No, End Match</button>
                            <button type="button" class="btn btn-primary" id="playNextFrame" aria-label="Start next frame">Yes, Play Next Frame</button>
                        </div>
                    </div>
                </div>
            </div>`;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        const modal = new bootstrap.Modal(document.getElementById('endFrameModal'), {
            keyboard: true,
            focus: true
        });
        modal.show();
        
        document.getElementById('playNextFrame').addEventListener('click', function() {
            playerOneFrameScore = 0;
            playerTwoFrameScore = 0;
            currentBreak = 0;
            document.getElementById('player-one-frame-score').textContent = '0';
            document.getElementById('player-two-frame-score').textContent = '0';
            document.getElementById('current-break').textContent = '0';
            
            startingPlayer = startingPlayer === 'player-one' ? 'player-two' : 'player-one';
            activePlayer = startingPlayer;
            updateActivePlayerDisplay();
            
            modal.hide(); 
            document.getElementById('endFrameModal').remove();
            
            console.log(`Starting new frame with ${startingPlayer} to break`);
        });
        
        document.querySelector('.btn-secondary').addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    });

    // Initial active player display
    updateActivePlayerDisplay();
});


        
        