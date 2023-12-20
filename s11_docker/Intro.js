FROM node:12  
# This docker file will have a specific base image of  node so if we do not have node in our system we can use this node image which will provide us the node

WORKDIR /app
# We will start from app directory 

# Every instrcution will consider as a layer and to make things good docker will chache these layers

COPY package*.json ./

RUN npm install

COPY . .
# In above command we are copying the whole but node_modules are also present so to prevent we will use dockerignore file as same as gitignore file

ENV PORT = 8080

EXPOSE 8080

CMD ["npm" , "start"] 
# EXEC FORM

# Now we have our docker file now we have to create docker image from these instructions

# We can build docker image by running docker build command

// 1.) Install Docker Desktop 
// 2.) Command For command Line 
// 3.) Install docker extenshion 
// ! a.) docker ps - gives a list running on the system
// ? Note- Every Container have unique id linked to an image


// ! Docker Container

// We can create multiple docker containers compose and create 