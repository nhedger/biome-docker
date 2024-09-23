# Biome for Docker

This repository contains the Dockerfiles and workflows to build Docker images
for all recent versions of [Biome](https://github.com/biomejs/biome).

Supported architectures: `amd64`, `arm64`

Supported variants: [`debian`](docker/debian.Dockerfile), [`alpine`](docker/alpine.Dockerfile)

## Supported tags

All versions of Biome start from `1.7.0` have Docker images available.

```sh
# Default (bookworm)
biomejs/biome:{version}

# Variants
biomejs/biome:{version}-{variant}
```

Where `{variant}` is one of the following: `bookworm`, `bullseye`, `alpine3.20`, `alpine3.19`.

Examples:
- `biomejs/biome:1.9.2`
- `biomejs/biome:1.9.2-bookworm`
- `biomejs/biome:1.9.2-bullseye`
- `biomejs/biome:1.9.2-alpine3.20`
- `biomejs/biome:1.9.2-alpine3.19`


