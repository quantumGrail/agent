# Imports
from cs50 import SQL
from flask import Flask, render_template, jsonify

# Configuration
app = Flask(__name__, static_folder='templates/static')

# Index Page
@app.route('/')
def index():
    return render_template("index.html")

# Run Mode
if __name__ == '__main__':
    app.run(debug=True)