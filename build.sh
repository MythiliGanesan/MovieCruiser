#!/bin/bash

cd AuthenticationService
mvn clean
source ./env-variable.sh
mvn package
mvn spring-boot:run
cd ..
cd Backend
mvn clean
source ./env-variable.sh
mvn package
mvn spring-boot:run

cd ..
