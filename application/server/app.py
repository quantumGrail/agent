from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)

# Allow CORS only for your React app's URL
CORS(app, origins=["*"])

@app.route('/')
def index():
    return "Your app is running!"

@app.route('/api', methods=['GET'])
def get_data():
    return jsonify({'message': 'Hello from Flask!'})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)