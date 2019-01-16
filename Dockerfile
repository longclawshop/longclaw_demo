FROM python:3.6

# Install nvm with node and npm
RUN curl https://raw.githubusercontent.com/creationix/nvm/v0.20.0/install.sh | bash \
    && . $NVM_DIR/nvm.sh \
    && nvm install --lts\
    && nvm use --lts

WORKDIR opt/deploy/
ADD . .

RUN pip install -r requirements.txt
RUN python manage.py migrate

EXPOSE 8000
CMD python manage.py runserver 0.0.0.0:8000
