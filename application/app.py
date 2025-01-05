# Imports
from flask import Flask, render_template, jsonify

# Configuration
app = Flask(__name__)

# Index Page
@app.route('/')
def index():
    return "Welcome!"