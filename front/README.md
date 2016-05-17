# TarsJS
Docker container of the front nginx server

## Nginx configuration

The folder *./conf* is a dedicated to the nginx configuration. This folder is mapped with the */etc/nginx/sites-available* folder of nginx.

The folder *./src/app* contains all the angular application. It's built by grunt and exported to the *./src/dist* folder which is used by nginx. A grunt task watch for a modification on ./src/app files and updates the dist folder with the latest version. 
