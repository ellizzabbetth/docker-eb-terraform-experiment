# Build & Deploy Multi-Container Applications to AWS
Multi container application with Nginx, React, Node and Mongo DB. This repository also contains Terraform IaC (Infrastructure as Code) for a CICD pipeline to build and push images to DockerHub.

## Technical Architecture Diagram
![Alt text](./multi-container-tech-arch.png?raw=true "Technical Architecture Diagram")


Export Postman Test Collection
- https://stackoverflow.com/questions/27931685/exporting-test-collections-in-postman-jetpack

Local Mongo Container (mongo-db):

docker pull mongo

Start Containers and execute command in container:
docker exec -it mongo-db mongod --version


TO_DO_DB=mongodb://lukemwila:doesitreallymatterwhatthisis@mongo:27017/multicontainer-database

