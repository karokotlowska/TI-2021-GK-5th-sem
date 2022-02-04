#!/usr/bin/python3
import cgi
import os
import datetime
import sys 
sys.stderr = sys.stdout  
from html import escape 
form = cgi.FieldStorage()



title = form.getvalue("title","(brak)")
author = form.getvalue("author","(brak)")
date = str(datetime.datetime.now().strftime("%Y/%m/%d %H:%M:%S"))
ip = os.environ["REMOTE_ADDR"]

tmp = title + ";" + author + ";" + date + ";" + ip + "\n"

plik = open("../lab5_baza.txt", "a")
plik.write(tmp)
plik.close()

# print HTTP/HTML headers
print("Content-Type: text/html; charset=utf-8")
print()
print ("<!DOCTYPE html>")
print ("""
<html>
  <head>
    <title>Baza danych</title>
    <style type='text/css'>

    h1{

      text-align:center;
      font-weight: normal;
      font-size:30px;
      }

    table{
      padding: 1px; 
  text-align:center;
  width:100%;   }

    th{
border-radius: 50px;
   background-color: #cbe693;
   font-size:15px;
    }

    tr{
      border-radius: 10px 15px 15px 10px;
  border-style: solid; 
  border-width: 1px; 
  }

    tr:nth-child(odd){
padding:3px;
  vertical-align:middle;
  background-color: #e8cfe0;
  }

    td{
      padding:10px;
      }
    </style>
  </head>
  <h1>Baza ksiazek</h1>
  <table>
  <tr>
    <th>Tytuł</th>
    <th>Autor</th>
    <th>Data</th>
    <th>IP</th>
  </tr>
""")

plik = open('../lab5_baza.txt', 'r')
tmp = plik.readlines()

for i in tmp:
  tytul = i.split(";")[0]
  autor = i.split(";")[1]
  data = i.split(";")[2]
  ip = i.split(";")[3]
  print ("<tr><td>" + tytul + "</td><td>" + autor + "</td><td>" + data + "</td><td>" + ip + "</td></tr>")
print ("""
</table></body></html>
""")
plik.close()

