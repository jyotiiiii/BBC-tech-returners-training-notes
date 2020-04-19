/*

TO GET A CHALLENGE AUTOMATICALLY APPEARING at 5am each day:


Request - this is the frontend asking the backend if we need to do anything - do I need to do anything?
So if you just have one computer you can set the frontend to ask the backend if it needs to load a new challenge every hour. But this is inefficient because 23/24 of times it asks, it won't need to do anything. 


And so to get around that, you use a push, where the server pushes to the frontend. 

Polling
It's not a req/response. 
Push - web sockets (one of popular ones is socket.io or pusher.com) - push a task from the server to the lcient at 5am. 
At the beginning of feeling we aren't going to be able to make something from scratch. But then a week later it was transformed into something amazing that we made together. 






get * from challenge where accepted is 1 and completed is 0

If it comes back with nothing, we can say 'take on a challenge'
Do ours with video. Show the app and then on screen recording, have the database changing. 



