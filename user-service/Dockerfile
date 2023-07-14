FROM openjdk

LABEL maintainer="mahen_518@outlook.com"

EXPOSE 8082

WORKDIR /app

COPY target/user-service.jar /app/user-service.jar

ENTRYPOINT ["java", "-jar", "user-service.jar"]