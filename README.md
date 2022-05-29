# @himenon/pdf-crop-margins

Docker image for: [abarker/pdfCropMargins](https://github.com/abarker/pdfCropMargins)

```bash
docker pull ghcr.io/himenon/pdf-crop-margins

docker run --rm -t ghcr.io/himenon/pdf-crop-margins
```

## LICENCE

[@himenon/pdf-crop-margins](https://github.com/Himenon/pdf-crop-margins)・MIT

## Original Source

- https://github.com/solsson/docker-pdf-crop-margins


docker run --rm  -v $(pwd):/data -w /data ghcr.io/himenon/pdf-crop-margins pdf-crop-margins -v -p 0 -a -6 sample.pdf
docker run --rm  -v $(pwd):/data -w /data ghcr.io/himenon/pdf-crop-margins pdf-crop-margins -v -p 0 -a -6 mirroring.pdf