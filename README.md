# MessagingApp-client Side
In this project, we created a client application that communicates with a server, which handles various API requests. Below is a detailed description of the server's API endpoints and how the client interacts with it.

# API Endpoints

# 1. Chats
Endpoint: http://localhost:5000/api/Chats
* POST: Creates a new chat.
* GET: Retrieves all chats associated with the current user.
# 2. Tokens
Endpoint: http://localhost:5000/api/Tokens
* POST: Generates a JWT (JSON Web Token) for users attempting to log in.
# 3. Users
Endpoint: http://localhost:5000/api/Users
* POST: Creates a new user.

Endpoint: http://localhost:5000/api/Users/:id
* GET: Returns details of the user with the specified id.

# 4. Messages within Chats
Endpoint: http://localhost:5000/api/Chats/:id/Messages
* GET: Returns all messages exchanged between users in the chat with the specified id.
* POST: Sends a message in the chat with the specified id.
  
# 5. Managing Chats
Endpoint: http://localhost:5000/api/Chats/:id

* DELETE: Deletes the chat with the specified id.
* GET: Retrieves all messages for the user with the specified id.
  
# Contact Management
* Adding a Contact: Click on the "person with plus" icon and type the username (not the display name) of the user you want to add. The user must already be registered to be added as a contact.

* Deleting a Contact: Click on the "wastebasket" icon near the "add contact" button, then type the username of the contact you want to delete.



# Running the Client
To run this client-side application, follow these steps:

1. Start the server: Run the "final" server or any other server that provides the same API.
2. Run the client: Navigate to the directory of this project and run the following command in the terminal: ''' npm start '''


