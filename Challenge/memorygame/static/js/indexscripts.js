document.getElementById('settings-button').addEventListener('click', function() {
    document.getElementById('settings-menu').style.display = 'block';
});

document.getElementById('single-player-button').addEventListener('click', function() {
    localStorage.setItem('mode', 'single-player');
    document.getElementById('settings-menu').style.display = 'none';
});

document.getElementById('multiplayer-button').addEventListener('click', function() {
    localStorage.setItem('mode', 'multiplayer');
    document.getElementById('settings-menu').style.display = 'none';
});

document.getElementById('play-button').addEventListener('click', function() {
    if (localStorage.getItem('mode') === 'single-player') {
        window.location.href = '/singleplayer';
    } else {
        alert('Please select a mode in settings.');
    }
});