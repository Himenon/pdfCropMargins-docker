FROM python:3.10-slim

RUN pip3 install pdfCropMargins

WORKDIR /data
