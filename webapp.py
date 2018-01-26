import os
from flask import Flask, url_for, render_template, request
from flask import redirect
from flask import session

app = Flask(__name__)

# In order to use "sessions",you need a "secret key".
# This is something random you generate.  
# See: http://flask.pocoo.org/docs/0.10/quickstart/#sessions

app.secret_key=os.environ["SECRET_KEY"]; #This is an environment variable.  
                                     #The value should be set in Heroku (Settings->Config Vars).  

@app.route('/')
def renderMain():
    session.clear()
    return render_template('home.html')
  
@app.route('/response',methods=['GET','POST'])
def renderScore():
    if request.form['n1'] == "YES":
      session['score'] = 1
    return render_template('score.html')
  
    
if __name__=="__main__":
    app.run(debug=False)
