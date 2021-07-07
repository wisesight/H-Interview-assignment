from flask import Flask
import json
# app = Flask(__name__)

# @app.route("/")
# def hello_world():
#     return "Hello, World!"



def create_app():
    app = Flask(__name__)

    # db.init_app(app)

    @app.route("/square")
    def square():
        return { 'foo' : 'bar'}
        # number = int(request.args.get("number", 0))
        # return str(number ** 2)

    return app


if __name__ == "__main__":
    app = create_app()
    app.run()