from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('main.html')

@app.route('/menuAlert')
def menuAlert():
    return 

if __name__ == '__main__' :
    app.run(port=3000, debug=True)