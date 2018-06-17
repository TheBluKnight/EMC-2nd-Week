FROM debian:latest

RUN apt-get update -y
RUN apt-get install -y python-pip python-dev build-essential
#RUN apt-get install -y git-core

COPY ./web /web
WORKDIR /web
RUN pip install -r requirements.txt

#EXPOSE 5002

ENTRYPOINT ["python"]
CMD ["app.py"]
