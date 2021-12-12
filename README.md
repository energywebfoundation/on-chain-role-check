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
- `dev`: 0xC3dD7ED75779b33F5Cfb709E0aB02b71fbFA3210
- `staging`: 0x561785174DF7f564f2591bA52B253c0F663427aB
- `prod`: 0x23b026631A6f265d17CFee8aa6ced1B244f3920C

If on `prod`/`ewc`, change `RPC_URL` to https://rpc.energyweb.org/

3. run
```
npm run start
```



