# Tlachia

Trace food platform build by

-   Nathan Lazo

## Getting Started

To install dependencies, run:

```bash
npm install
```

### You also have to install dependencies on studio folder and ask for the .env file

```bash
cd studio
npm install
```

## About

Blockchain traceability platform to be adapted for any business or company.

## How to run dev server

```bash
npm run dev
```

### Inside studio folder tu run sanity DB, ask for .env file

```bash
cd studio
sanity start
```

## How to build for production and start built server

```bash
npm run build

npm run start
```

## How to deploy to production

### make a push to your branch

```bash
git add .
```

```bash
git commit -am <"v0.00 [UPDATE/DELETE/CREATE/MERGE/HOTFIX/FIX/NEW/] description">
```

```bash
git push origin <your branch here>
```

#### Then go to github and make a pull request to main branch
