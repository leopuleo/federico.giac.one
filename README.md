# Federico Giacone Website 
[![CircleCI](https://circleci.com/gh/leopuleo/federico.giac.one.svg?style=svg&circle-token=dd2a456e6b8955ab7e0c9dc09467058d98aab827)](https://circleci.com/gh/leopuleo/federico.giac.one)

An awesome website for an awesome brother - https://federico.giac.one

![Website screenshot](https://federico.giac.one/screenshot.png)


## Introduction
This website is crafted using [Gatsby](https://www.gatsbyjs.org/).

Here below the full stack:

1. [Gatsby](https://www.gatsbyjs.org/): website static generator
2. [Prismic](https://prismic.io/): headlessCMS
3. [CicleCI](https://circleci.com/): code test, static website generation and deployment
4. [Firebase](https://firebase.google.com/): hosting

## Requisites
In order to develop the website you need:

1. Node 10.X.X
2. Yarn 1.7.0

## Install
To install the webstie on your computer follow these simple instructions:

1. Download this repository
2. Run `yarn install` to install all the dependencies
3. Run `yarn run develop` for live preview
4. Run `yarn run build` for production build
5. Run `yarn run serve` to navigate the local production build

### Other commands
1. `yarn run build:css`to build [Tailwind](https://tailwindcss.com/) stylesheet
2. `yarn run format`to format css and js files using [Prettier](https://prettier.io/)
3. `yarn run lint` to lint the the code using [ESlint](https://eslint.org/)
