# playwright timeout on iPhone 12/Ubuntu 20.04

## Test environment:
```
$ node --version
v14.18.3
$ npm --version
6.14.17

```

## How to run the test:

On MacOS,
```
npm install
npm run test
```

To test in Ubuntu with docker, run
```
docker run --rm -it -v $(pwd):/opt/tests ubuntu:20.04
```

And in the container,
```
apt update
apt install -y curl
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
nvm install 14.18.3
npm install -g npm@6.14.17
cd /opt/tests/
npm install
npx playwright install --with-deps
npm run test
```
