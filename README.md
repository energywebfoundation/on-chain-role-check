A simple utility to check whether or not a DID address has a role in ClaimManager

## Prerequisites

Tested with `npm` v14 but would probably work with higher as well

## Instructions

1. install packages
```
npm install
```

2. change any config you want in `index.ts`. Probably you want to check the DID address. Some other possible values are:

`ClaimManager` addresses:
- `dev` & `staging`: 0x5339adE9332A604A1c957B9bC1C6eee0Bcf7a031
- `prod`: 0x23b026631A6f265d17CFee8aa6ced1B244f3920C

If on `prod`/`ewc`, change `RPC_URL` to https://rpc.energyweb.org/

3. run
```
npm run start
```



