# FROM python:3.6
FROM ubuntu:latest

# Updates
RUN apt-get update -y && apt-get -y upgrade

# Install system requirements
RUN apt-get -y install \
build-essential \
git \
nodejs \
npm \
python3 \
python3-pip

# some applications expect the nodejs binary to be named node
RUN update-alternatives --install /usr/bin/node node /usr/bin/nodejs 10

ADD . /src/

RUN pip3 install -r /src/requirements.txt

RUN longclaw build

RUN python3 /src/manage.py migrate

RUN python3 /src/manage.py loaddata /src/data/user.json

CMD python3 /src/manage.py runserver 0.0.0.0:8000

EXPOSE 8000
