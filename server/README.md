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

# React
## Criando o projeto
npm create vite@latest

# Mobile
# Criando o projeto
expo init mobile

## Instalando o emulador Android SDK
https://efficient-sloth-d85.notion.site/Instalando-Expo-9b0abcb12bd548278e042d00fbde67f2

https://docs.expo.dev/workflow/android-studio-emulator/

https://docs.expo.dev/workflow/expo-cli/

## para iniciar o projeto abra o emulador do Android SDK antes depois digite no terminal
npm start