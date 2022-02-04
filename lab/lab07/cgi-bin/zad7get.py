#!/usr/bin/python3

import sys
import json
import cgi

form = cgi.FieldStorage()

import os
import datetime

openFile = open("../db7.txt", "r")
fileContainer = openFile.read()
openFile.close()


print("Content-Type: text/html; charset=utf-8")
print()
print ("""
<h1>Baza ksiazek</h1>
<table>
<tr>
  <th>Tytul</th>
  <th>Autor</th>
</tr>
""")

fileContainer = fileContainer.split(";;")

for book in fileContainer:
  title = book.split(";")[0]
  author = book.split(";")[1]
  print ("<tr><td>" + title + "</td><td>" + author + "</td></tr>")
print ("""
</table>
""")
