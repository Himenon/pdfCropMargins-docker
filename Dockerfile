FROM python:3.10-slim

RUN pip3 install pdfCropMargins

RUN pdf-crop-margins --version

WORKDIR /data
