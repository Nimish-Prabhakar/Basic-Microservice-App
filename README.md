# Basic-Microservice-App

# This Microservice is built event-bus architecture.

1. A Posts service which Adds titles to a new post created.

2. A comment service which add comments to particular posts.

3. A query service which collects data from posts and comments and query our data.

4. A moderation service to check for denied characters in our comments.

5. A event bus service working as a pipe line for all our services.

# Run the Application

1. Firstly do npm install on all the 3 services to install the dependencies.

2. Then do npm start and see if the posts and comments services are listening on port 4000 and 4001 respectively.

3. Observe the UI on port 3000.