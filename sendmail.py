import smtplib
from cred import email,password

server = smtplib.SMTP('smtp.gmail.com', 587)
server.starttls()
server.login(email,password)