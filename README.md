=============================
Longclaw Demo
=============================

Demo shop for Longclaw

    .. note:: This demo and Longclaw are currently in pre-release development. I am working hard to get a stable v0.1.0 release available. It is likely there will be further breaking changes until then. 

Quickstart
----------

Clone this repository and install the requirements:

  $ git clone
  $ cd longclaw_demo
  $ pip install -r requirements.txt

As longclaw is still in pre-release, we need to build its' assets manually (requires node.js & npm):

  $ longclaw build

Run the migrations and create an admin user:

  $ python manage.py migrate
  $ python manage.py createsuperuser

Run the server:

  $ python manage.py runserver
