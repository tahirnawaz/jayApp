jayApp
======
Use Test DB and import in it two csv files I have given.
Urls are

type    name                    description
Get     /notes/                 return all notes
Get     /notes/{id}             return notes with maching id
Post    /note                     takes title parameter in body and save it in mongodb
Delete  /note/{id}              delete note of id as in param
Delete  /note/                  delete note of id as in body
