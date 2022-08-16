# Metalpedia

A RESTful service that lets you manage songs. It'll let you do all the CRUD things (that's create, read, update, and delete for the uninitiated) with songs. Plus, we'll add some cool search endpoints to the service as well. That way, we can find songs by an artist or genre, from a particular year, or with certain lyrics.

## Tutorial [link](https://developer.redis.com/develop/node/redis-om/)

### In order to run this, you need to have either Redis Cloud or locally running Docker container `redis/redis-stack:latest`

$ docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest
