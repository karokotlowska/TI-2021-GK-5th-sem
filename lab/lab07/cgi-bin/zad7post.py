#!/usr/bin/python3

import sys
import json
import cgi

form = cgi.FieldStorage()

import os
import datetime

title = form.getvalue("title", "-")
author = form.getvalue("author", "-")

openFile = open("../db7.txt", "r")
fileContainer = openFile.read()
openFile.close()

if author != "-" and title != "-":
  fileContainer = fileContainer + title + ";" + author + ";;"

file = open("../db7.txt", "w")
file.write(fileContainer)
file.close()

