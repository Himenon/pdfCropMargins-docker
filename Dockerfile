FROM python:3.10

RUN apt update
RUN apt install -y ghostscript poppler-utils
RUN pip3 install pdfCropMargins

RUN pdf-crop-margins --version

WORKDIR /data
