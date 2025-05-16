# 🚩 First Capture the Flag Challenge by FlagWars

## ⚙️ Prerequisites

- [Node JS (22.15.0 as `.nvmrc` file)](https://nodejs.org/en/download)
- [Linux (WSL for Windows users)](https://learn.microsoft.com/en-us/windows/wsl/install)
- [Solana CLI](https://solana.com/zh/docs/intro/installation)
- [Docker (optional)](https://docs.docker.com/get-started/get-docker/)
- [Postman (optional)](https://www.postman.com/)

## 🏃‍♂️ How to run

### ☀️ Solana CLI:

```bash
    solana --help
```

### 🪢 App on local Node:

```bash
    npm install && npm run dev
```

### 🐳 App on Docker:

```bash
    docker build . -t flagwars-image:1.0.0
    docker run --name flagwars-container -p 8000:8000 -v $(pwd)/src:/app/src flagwars-image:1.0.0
```

## 🏅 Competition

Instructions are in 2 parts:

- [`INSTRUCTION.md`](https://github.com/flagwars-ctf/first-ctf-challenge/tree/main/INSTRUCTIONS.md) that will have instructions to start challenge
- Code instruction - comments in code what to do

## 📖 API Documentation

API documentation: `Swagger` on URL http://localhost:8000/api-docs
