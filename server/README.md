## configuração do typescript
npm i typescript -D

### configure o build no arquivo package.json
"scripts": {
    "build": "tsc"
  }
## cria arquivo de configuração do typescript
npx tsc --init

## instalação da tipagem typescript no express
npm i @types/express -D

## mudar o module do arquivo tsconfig.json
 "module": "CommonJS",    
"moduleResolution": "node",     // para tirar os erros de comp

## executar o typescript
npm run build

## mudar o rootDir (local que aponta onde fica todo o código da aplicação)
"rootDir": "./src"

## mudar o outDir (para onde vão os arquivos transpilados e ts para js)
"outDir": "./build"

## para buildar com tsc sem precisar reiniciar o build novamente
npm i ts-node-dev -D


