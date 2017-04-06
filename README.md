Longclaw Demo
=============================

Demo shop for Longclaw


> This demo and Longclaw are currently in pre-release development. I am working hard to get a stable v0.1.0 release available. It is likely there will be further breaking changes until then.


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
