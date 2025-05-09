Hello from Angular!👋
========================

[![GitHub Pages](https://github.com/ProofOfConceptFactory/poc-angular/actions/workflows/github-pages.yaml/badge.svg)](https://github.com/ProofOfConceptFactory/poc-angular/actions/workflows/github-pages.yaml)

The "Hello from Angular!👋" application is just a starter to show a minimalist Angular app.

Requirements
------------

* [Docker Desktop][1]
* [mkcert][2]

Installation
------------

Clone this repository:

```console
https://github.com/ProofOfConceptFactory/poc-angular
```

Go on the project root folder:

```console
cd poc-angular/
```

Install certificate to use HTTPS:

```console
mkcert -install
mkdir -p certs
mkcert -key-file certs/poc-angular.key.pem -cert-file certs/poc-angular.crt.pem localhost
```

Execute this command to launch docker container in dev:

```console
DOCKER_DEFAULT_PLATFORM=linux/amd64 docker compose -f docker/compose.yaml up -d --build
```

Install JavaScript dependencies:

```console
docker compose -f docker/compose.yaml exec node pnpm install
```


_Or use the equivalent command with npm or yarn_

Usage
-----

There's no need to configure anything before running the application. There are
2 different ways of running this application depending on your needs:

**Option 1. Run the application in dev mode**

Run this command:

```bash
docker compose -f docker/compose.yaml exec node ng serve --host 0.0.0.0 --ssl true --ssl-key "certs/poc-angular.key.pem" --ssl-cert "certs/poc-angular.crt.pem"
```

Then access the application in your browser at the given URL (<https://localhost:4200> by default).

**Option 2. Run the application in prod mode**

```bash
docker compose -f docker/compose.yaml exec node ng build
```
You now have your fresh JavaScript files for production 🚀.
You can check everything is OK by running the `ng serve` command in the output directory created by the `ng build` command.

Tests
-----

Execute this command to run tests:

```bash
docker compose -f docker/compose.yaml exec node ng test --watch=false
```

[1]: https://www.docker.com/products/docker-desktop/
[2]: https://github.com/FiloSottile/mkcert
