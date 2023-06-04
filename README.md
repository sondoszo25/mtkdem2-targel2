# mtkdem2-targel2
in this exercise we created a client which can talk to the server we were given.
the server can give answer for these :
a) http://localhost:5000/swagger/api/Chats: 
 1) in POST: it creates an new Chat
 2) in GET: it gives us all the chats of the current user

b)http://localhost:5000/swagger/api/Tokens:
  in POST it creates a jwt for the user who want to log in

c)http://localhost:5000/swagger/api/Users:
 in POST: creates a new user

d)http://localhost:5000/swagger/api/Users/:id:
in GET returns all the details about the user with this id.

so we have changed our code from previous exercise to talk with the server, now all the logical operations like : 
registeration, logging in, chatting... are implemented using the server.

*to run this code: first you need to run the server "final" we got from the moodle ,in cmd in the "final" directory write Chat.exe
and then go to the directory of this project and in cmd write npm start*

