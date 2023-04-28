from flask import Flask
import os

app = Flask(__name__)
port = int(os.environ.get("port"))

@app.route("/")
def hello():
    return "Hello!"

if __name__ == "__main__":
    app.run(port=port)
