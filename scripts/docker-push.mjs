#!/usr/bin/env zx

const content = await fs.readFile("./package.json");
const pkg = JSON.parse(content.toString());

const actor = process.env.DOCKER_USER_NAME.toLowerCase();
await $`docker push ghcr.io/${actor}/http-echo:${pkg.version}`;
await $`docker push ghcr.io/${actor}/http-echo:latest`;
