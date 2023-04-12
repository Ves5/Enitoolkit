from flask import Flask
from flask_restx import Resource, Api
from flask_cors import CORS
import os, json
from anagram import unscramble

app = Flask(__name__)
api = Api(app)
CORS(app)

Version = "1.0.1"

@api.route('/hello')
class HelloWorld(Resource):
    def get(self):
        return {'hello': 'world'}

@api.route('/anagram/<string:letters>')
class Anagram(Resource):
    def get(self, letters):
        # lazy load in index
        with open(os.path.join(app.root_path, "dictionaries/wwf_index.txt")) as f:
            index = json.load(f)
        return json.loads(unscramble(letters, index))

@api.route('/links')
class Links(Resource):
    def get(self):
        with open(os.path.join(app.root_path, "data/links.json")) as f:
            links = json.load(f)
        return links

@api.route('/version')
class Version(Resource):
    def get(self):
        return {"version": Version}

if __name__ == '__main__':
    app.run(debug=True)