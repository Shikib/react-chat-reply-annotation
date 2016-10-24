from flask import Flask, request, jsonify
from flask.ext.cors import CORS

import json

app = Flask(__name__)
CORS(app)

@app.route('/save', methods=['POST'])
def save():
  """
  Given array, save it to file.
  """
  data = json.loads(request.data)
  print data
  arr = data['all_reply_messages']
  f = open('results.json', 'a+')
  f.write(str(arr))
  f.write("\n")
  f.close()
  return "Saved"

def main():
  app.run(debug=False, use_reloader=False)

if __name__ == '__main__':
  main()
