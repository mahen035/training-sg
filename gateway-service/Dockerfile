FROM openjdk

LABEL maintainer="mahen_518@outlook.com"

EXPOSE 8484

WORKDIR /app

COPY target/gateway-service.jar /app/gateway-service.jar

ENTRYPOINT ["java", "-jar", "gateway-service.jar"]