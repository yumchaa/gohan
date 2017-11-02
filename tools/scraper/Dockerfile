FROM python:3.6

RUN \
  apt-get update -y --fix-missing && \
  apt-get install -y \
  vim && \
  mkdir /work

COPY requirements.txt /work

WORKDIR /work

RUN \
  pip install -U pip && \
  pip install -U -r requirements.txt

