from flask import Flask, jsonify, request
from flask_restx import Resource, Api, reqparse
import sklearn
from sklearn.datasets import load_iris
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split

app = Flask(__name__)
api = Api(app)
app.config['DEBUG'] = True


@app.route('/dd')
def index():
    return 'Hellbdbo 머faasad고?'


@api.route('/test')
class testAPI(Resource):
    def get(self):
        return jsonify({"result": "연결잘됩니다 from flask"})

    def post(self):
        iris = load_iris()
        parsed_request = request.json.get('content')
        result = iris.feature_names
        #result = iris.feature_names.tolist()
        print(parsed_request)
        return result
        # return jsonify({"result": "연결잘됩니다 post"})


if __name__ == '__main__':
    app.run(debug=True)
