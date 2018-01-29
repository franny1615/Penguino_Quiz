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
    return render_template('home.html')
  
@app.route('/startOver')
def renderBack():
    session.clear()
    return render_template('home.html')
  
@app.route('/response',methods=['GET','POST'])
def renderScore():
    session['q1'] = request.form['n1']
    session['q2'] = request.form['n2']
    session['q3'] = request.form['n3']
    session['q4'] = request.form['n4']
    session['q5'] = request.form['n5']
    if request.form['n1'] == "yes":
      session['score'] = 1
    return render_template('score.html')
  
    
if __name__=="__main__":
    app.run(debug=False)
