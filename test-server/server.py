from flask import Flask, json
from flask import request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/")
def main():
    print("FACES 2")
    return "FACES 2"

@app.route("/api/compare", methods=['GET', 'POST'])
@cross_origin()

def compare():
  print(request.files)
  print(request.data)
  files = request.files

  files['image[0]'].save('./test.png')
  return "Pong"


if __name__ == '__main__':
  app.run(host="0.0.0.0", port=5000)
