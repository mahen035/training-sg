FROM openjdk

LABEL maintainer="mahen_518@outlook.com"

EXPOSE 8888

WORKDIR /app

COPY target/config-server.jar /app/config-server.jar

ENTRYPOINT ["java", "-jar", "config-server.jar"]