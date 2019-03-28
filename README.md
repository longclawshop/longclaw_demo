Longclaw Demo
=============================

Demo shop for Longclaw

This example shop is intended to show the capabilities of longclaw. 
When creating your own shop, I recommend starting afresh using the `longclaw start` command, rather than forking this project.

Quickstart
----------

Clone this repository
```
$ git clone https://github.com/JamesRamm/longclaw_demo.git
$ cd longclaw_demo
```
Build the docker image
```
$ docker build -t longclaw-demo .
```
Start the docker container and expose port 8000

```
$ docker run -it -p 8000:8000 longclaw-demo
```

Navigate to localhost:8000/admin and sign in with `admin`, `admin`
