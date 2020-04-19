/*

12factor.net	
12 factors of good website design

# The Twelve Factors


### I. Codebase
One codebase tracked in revision control, many deploys

### II. Dependencies
Explicitly declare and isolate dependencies.
Introduce dependency management for your App. 

### III. Config
Store config in the environment 
Things like passwords and usernames and database connections. Shouldn’t be in your code, should be in a separate file that is read when your app starts. Should be separate to that. Externalise your config. You might have passwords that you only want 4 people to know, you can separate that from your App. 

### IV. Backing services
Treat backing services as attached resources

### V. Build, release, run
Strictly separate build and run stages

### VI. Processes
Execute the app as one or more stateless processes

### VII. Port binding
Export services via port binding

### VIII. Concurrency
Scale out via the process model

### IX. Disposability
Maximize robustness with fast startup and graceful shutdown

### X. Dev/prod parity
Keep development, staging, and production as similar as possible

### XI. Logs
Treat logs as event streams

### XII. Admin processes
Run admin/management tasks as one-off processes
