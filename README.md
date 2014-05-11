jayApp
======
Use Test DB and import in it two csv files I have given.
Urls are


Get     /notes/                 return all notes


Get     /notes/{id}             return notes with maching id


Post    /note                     takes title parameter in body and save it in mongodb



Delete  /note/{id}              delete note of id as in param


Delete  /note/                  delete note of id as in body


You can import notes.csv and jayApp.csv by running this in your comand promp

mongoimport --db test --type csv --headerline --file notes.csv
mongoimport --db test --type csv --headerline --file jayApp.csv

do mention compete file path while running above script --file filepath/fileName
