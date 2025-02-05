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

    // Display player names from localStorage
    document.getElementById('player-one-name').textContent = localStorage.getItem('playerOneName');
    document.getElementById('player-two-name').textContent = localStorage.getItem('playerTwoName');

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

    // Function to handle ball clicks
    function handleBallClick(color, points) {
        const balls = document.querySelectorAll(`.ball-img[src*="${color}"]`);
        balls.forEach(ball => {
            ball.addEventListener('click', function() {
                const column = this.closest('.col-4');
                const isPlayerOneColumn = column.contains(document.getElementById('player-one-name'));
                
                if ((activePlayer === 'player-one' && isPlayerOneColumn) ||
                    (activePlayer === 'player-two' && !isPlayerOneColumn)) {
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
        const winner = playerOneFrameScore > playerTwoFrameScore ? 'player-one' : 'player-two';
        const winnerName = winner === 'player-one' ? 
            localStorage.getItem('playerOneName') : 
            localStorage.getItem('playerTwoName');
        const loserName = winner === 'player-one' ? 
            localStorage.getItem('playerTwoName') : 
            localStorage.getItem('playerOneName');
        const scoreDifference = Math.abs(playerOneFrameScore - playerTwoFrameScore);
        
        if (winner === 'player-one') {
            playerOneFrameWins++;
        } else {
            playerTwoFrameWins++;
        }
        
        document.getElementById('frame-score').textContent = 
            `${playerOneFrameWins} - ${playerTwoFrameWins}`;

        const modalHTML = `
            <div class="modal fade" id="endFrameModal" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Frame Complete!</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>Congratulations ${winnerName}!</p>
                            <p>You beat ${loserName} by ${scoreDifference} points.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No, End Match</button>
                            <button type="button" class="btn btn-primary" id="playNextFrame">Yes, Play Next Frame</button>
                        </div>
                    </div>
                </div>
            </div>`;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        const modal = new bootstrap.Modal(document.getElementById('endFrameModal'));
        modal.show();
        
        document.getElementById('playNextFrame').addEventListener('click', function() {
            playerOneFrameScore = 0;
            playerTwoFrameScore = 0;
            currentBreak = 0;
            document.getElementById('player-one-frame-score').textContent = '0';
            document.getElementById('player-two-frame-score').textContent = '0';
            document.getElementById('current-break').textContent = '0';
            modal.hide();
            document.getElementById('endFrameModal').remove();
        });
        
        document.querySelector('.btn-secondary').addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    });

    // Initial active player display
    updateActivePlayerDisplay();
});


        
        