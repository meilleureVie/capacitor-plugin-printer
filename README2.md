# How to deploy this package on NPM Registry

## Using npm/cli

1. create a scoped npm package
```
npm init --scope=@chezgugu
```
2. generate secret by login
```
npm login
```
3. publish package
```
npm publish --access public
```

## Using github actions
1. define an action \
see `.github/workflows/npm-publish.yml`
2. generate a secret from npm \
from `https://www.npmjs.com/`
3. add this token to github projet
4. push
