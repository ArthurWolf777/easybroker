from flask import Flask, jsonify, render_template
import requests

app = Flask(__name__)

@app.route('/api', methods=['GET'])
def get_data():

    url = "https://api.stagingeb.com/v1/properties?page=1&limit=20"

    headers = {
        "accept": "application/json",
        "X-Authorization": "l7u502p8v46ba3ppgvj5y2aad50lb9"
    }

    response = requests.get(url, headers=headers)

    return jsonify(response.json())

@app.route('/')
def index():
    return render_template('index.html')


if __name__ == '__main__':
    app.run()
