FROM python:3.6

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        apt-utils \
        build-essential \
        python-setuptools \
        gfortran \
        libopenblas-dev && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

COPY . /app/
RUN pip install -r /app/requirements.txt
WORKDIR /app/

CMD honcho start -f /app/procfile $PROCESSES

