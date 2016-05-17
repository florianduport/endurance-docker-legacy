FROM node

RUN ["apt-get", "update", "-y"]
RUN ["apt-get", "install", "-y", "--no-install-recommends", "software-properties-common"]

RUN ["add-apt-repository", "ppa:nginx/stable"]

RUN ["apt-get", "install", "-y", "nginx"]
RUN ["apt-get", "install", "-y", "nano"]

RUN ["npm", "install", "-g", "grunt-cli"]

WORKDIR /data/src

RUN npm install
RUN npm install -g bower
RUN bower install
