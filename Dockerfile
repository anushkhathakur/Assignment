FROM openjdk:8
ADD ./target/docker-service-registry.jar docker-service-registry.jar
EXPOSE 8761
ENTRYPOINT ["java","-jar","docker-service-registry.jar"]

