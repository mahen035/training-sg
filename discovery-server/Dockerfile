FROM openjdk

LABEL maintainer="mahen_518@outlook.com"

EXPOSE 8761

WORKDIR /app

COPY target/discovery-server.jar /app/discovery-server.jar

ENTRYPOINT ["java", "-jar", "discovery-server.jar"]