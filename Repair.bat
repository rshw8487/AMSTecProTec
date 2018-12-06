@echo off
protractor conf.js --specs Repair.js
SET log=C:\Users\krishnaprasad.%DATE:~10,4%_%DATE:~4,2%_%DATE:~7,2%%TIME:~0,2%_%TIME:~3,2%_%TIME:~6,2%.txt