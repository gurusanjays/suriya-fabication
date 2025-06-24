from flask import Flask, render_template, request, redirect
import sqlite3
import smtplib
import os
from dotenv import load_dotenv

app = Flask(__name__)
load_dotenv()

# Create DB table
def init_db():
    conn = sqlite3.connect('database.db')
    c = conn.cursor()
    c.execute('''
        CREATE TABLE IF NOT EXISTS contacts (
            id INTEGER PRIMARY KEY,
            name TEXT,
            email TEXT,
            phone TEXT,
            service TEXT,
            project TEXT,
            message TEXT
        )
    ''')
    conn.commit()
    conn.close()

init_db()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    name = request.form['name']
    email = request.form['email']
    phone = request.form['phone']
    service = request.form['service']
    project = request.form['project']


    # Save to DB
    conn = sqlite3.connect('database.db')
    c = conn.cursor()
    c.execute('INSERT INTO contacts (name, email, phone, service, project) VALUES (?, ?, ?, ?, ?)',
              (name, email, phone, service, project))
    conn.commit()
    conn.close()

    # Send Email
    send_email(name, email, phone, service, project)

    return "<h2>Thank you for contacting us!</h2>"

def send_email(name, email, phone, service, project):
    sender = os.getenv('EMAIL_USER')
    password = os.getenv('EMAIL_PASS')
    receiver = sender

    subject = "New Contact from Website"
    body = f"""
    Name: {name}
    Email: {email}
    Phone: {phone}
    Service: {service}
    Project Details: {project}
    """

    try:
        with smtplib.SMTP("smtp.gmail.com", 587) as smtp:
            smtp.starttls()
            smtp.login(sender, password)
            smtp.sendmail(sender, receiver, f"Subject:{subject}\n\n{body}")
    except Exception as e:
        print("Error sending email:", e)

if __name__ == '__main__':
    app.run(debug=True)
