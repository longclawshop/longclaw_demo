Longclaw Demo
=============================

Demo shop for Longclaw


> The longclaw master branch is now on version 1.0.0 which will be officially released before the end of January (2019) and contains breaking changes. Longclaw_demo is undergoing changes to bring it up to date. Therefore I __DO NOT__ reccommend using the demo as a starting point for new longclaw sites right now - use the `longclaw start` command to scaffold out a new project.

Quickstart
----------

Clone this repository and install the requirements:

```bash
  $ git clone https://github.com/JamesRamm/longclaw_demo.git
  $ cd longclaw_demo
  $ pip install -r requirements.txt
```

As longclaw is still in pre-release, we need to build its' assets manually (requires node.js & npm):

```bash
  $ longclaw build
```

Run the migrations and create an admin user:

```bash
  $ python manage.py migrate
  $ python manage.py createsuperuser
```

Run the server:

```bash
  $ python manage.py runserver
```

Quickstart (Docker)
-------------------

Clone this repository
```
$ git clone https://github.com/JamesRamm/longclaw_demo.git
$ cd longlcaw_demo
```
Build the docker image
```
$ docker build -t longclaw-demo .
```
Start the docker container and expose port 8000

```
$ docker run -it -p 8000:8000 longclaw-demo
```
