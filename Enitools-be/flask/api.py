from flask import Flask
from flask_restx import Resource, Api, reqparse
from flask_cors import CORS
import os, json
from anagram import unscramble
import pyotp

app = Flask(__name__)
api = Api(app)
CORS(app)

parser = reqparse.RequestParser()
parser.add_argument('title', type=str, help="Title for the link")
parser.add_argument('url', type=str, help="URL of the link")

totp = pyotp.TOTP(os.environ.get('secret'))

# @api.route('/hello')
# class HelloWorld(Resource):
#     def get(self):
#         return {'hello': 'world'}

@api.route('/anagram/<string:letters>')
class Anagram(Resource):
    def get(self, letters):
        # lazy load in index
        with open(os.path.join(app.root_path, "dictionaries/wwf_index.txt")) as f:
            index = json.load(f)
        return json.loads(unscramble(letters, index))

@api.route('/links', )
class Links(Resource):
    def get(self):
        with open(os.path.join(app.root_path, "data/links.json")) as f:
            links = json.load(f)
        return links
    
@api.route('/link/<string:key>')
class Link(Resource):
    @api.doc(parser=parser)
    def post(self, key):
        if (totp.verify(key)):
            args = parser.parse_args()
            with open(os.path.join(app.root_path, "data/links.json")) as f:
                links = json.load(f)
            with open(os.path.join(app.root_path, "data/links.json"), mode='w') as f:
                links.append({"title": args['title'], "url": args['url']})
                json.dump(links, f)
            return "OK"
        else:
            return "INVALID KEY"
        

@api.route('/version')
class Version(Resource):
    def get(self):
        return {'version': os.environ.get('version')}

if __name__ == '__main__':
    app.run(debug=True)