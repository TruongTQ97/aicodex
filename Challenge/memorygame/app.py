from flask import Flask, render_template, jsonify, request
from game.board import Board

app = Flask(__name__)

@app.route('/home')
def index():
    return render_template('index.html')

@app.route('/singleplayer')
def singleplayer():
    board = Board()
    board.initialize()
    grid = board.get_grid()
    return render_template('singleplayer.html', board=board.cards, grid=grid)

@app.route('/flip', methods=['POST'])
def flip():
    # Handle card flip logic here
    return jsonify(success=True)

if __name__ == '__main__':
    app.run(debug=True)