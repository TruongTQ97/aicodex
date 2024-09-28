document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    let flippedCards = [];
    let score = 0;

    cards.forEach(card => {
        card.addEventListener('click', () => {
            if (flippedCards.length < 2 && !card.classList.contains('face-up')) {
                card.classList.add('face-up');
                flippedCards.push(card);

                if (flippedCards.length === 2) {
                    // Check if the two flipped cards match
                    if (flippedCards[0].dataset.name === flippedCards[1].dataset.name) {
                        flippedCards.forEach(flippedCard => {
                            flippedCard.classList.add('match');
                            onCardMatch();
                        });
                        setTimeout(() => {
                            flippedCards.forEach(flippedCard => {
                                flippedCard.style.visibility = 'hidden';
                            });
                            flippedCards = [];
                        }, 1000); // Delay to show the matched cards before hiding
                    } else {
                        flippedCards.forEach(flippedCard => {
                            flippedCard.classList.add('no-match');
                        });
                        setTimeout(() => {
                            flippedCards.forEach(flippedCard => {
                                flippedCard.classList.remove('face-up');
                                flippedCard.classList.remove('no-match');
                            });
                            flippedCards = [];
                        }, 1000); // Delay to flip back the unmatched cards
                    }
                }
            }
        });
    });

    // Function to update the score
    function updateScore(points) {
        score += points;
        document.getElementById('score').textContent = score;
    }

    function onCardMatch() {
        updateScore(10); // Add 10 points for a match
    }

    document.getElementById('home-button').addEventListener('click', function() {
        score = 0
        window.location.href = '/home';
    });
});