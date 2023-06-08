# mtkdem2-targel2
in this exercise we created a client which can talk to the server we were given.
the server can give answer for these :

a) http://localhost:5000/api/Chats :

    1)in POST: it creates a new Chat
    2)in GET: it gives us all the chats of the current user

b)http://localhost:5000/api/Tokens : in POST it creates a jwt for the user who want to log in

c)http://localhost:5000/api/Users : in POST: creates a new user

d)http://localhost:5000/api/Users/:id : in GET returns all the details about the user with the id in the link.

e)http://localhost:5000/api/Chats/:id/Messages/ : 

    1)in GET: returns all the masseges between the users which are
    talking in the chat with this id.

    2)in POST: send the meassge that its id located in the link.
    
d)http://localhost:5000/api/Chats/:id :

    1)in DELETE: deletes the chat which  its id located in the link.
    
    2)in GET: gets all the messeges for the user who's his id is the id located in the link.
    

to add a contact you should click on the "person with plus" button and than type his username (not his display name), the user must be registered to be able to add it.

to delete a contact you should press on the button of "wastebasket" near the "add contact" button , and then type the name of the contact you want to delete.
 


so we have changed our code from previous exercise to talk with the server, now all the logical operations like : 
registeration, logging in, chatting... are implemented using the server.

*to run this code: first you need to run the server "final" or any other server which have the same api , run the server
and then go to the directory of this project and in cmd write npm start*

* note: if you got a warning to install socket.io-client , write in the terminal "npm i socket.io-client"
