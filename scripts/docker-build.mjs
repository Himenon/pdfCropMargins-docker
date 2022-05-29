#!/usr/bin/env zx

const content = await fs.readFile("./package.json");
const pkg = JSON.parse(content.toString());

const actor = process.env.DOCKER_USER_NAME.toLowerCase();
await $`docker build . -t ghcr.io/${actor}/pdf-crop-margins:${pkg.version} --no-cache`;
await $`docker tag ghcr.io/${actor}/pdf-crop-margins:${pkg.version} ghcr.io/${actor}/pdf-crop-margins:latest`;
