## **:wine_glass: COMO UTILIZAR**

### Configurações Iniciais

Primeiro, você precisa ter o <kbd>[NodeJS](https://nodejs.org/en/download/)</kbd> instalado na sua máquina.

Se você estiver utilizando o **Linux**, você pode optar por instalar o **Node** através do gerênciador de versões <kbd>[asdf]</kbd> para facilitar o processo de mudança da versão do **Node**, quando for necessário.

Você pode optar também por utilizar o **yarn** no lugar do **npm**. Você pode instalar clicando nesse <kbd>[link][yarn]</kbd>, ou através do <kbd>[asdf]</kbd>.

Após ter o **Node** instalado, instale as dependências do projeto, utilizando os comandos:

```sh
$ npm install

```

Veja os arquivos **`package.json`** do <kbd>[commitlint](./package.json)</kbd>.

### Utilizando o Server

Abra o terminal no diretório raiz do projeto e execute o seguinte comando:

```sh

$ npm run start

```

que irá executar o comando abaixo

```sh

$ npx webpack serve

```

> Veja a parte de **scripts {}** do arquivo <kbd>[package.json](./package.json)</kbd> para saber quais scripts estão disponíveis.

### Utilizando o Website

Após executado um dos comandos acima se o browser não abrir automaticamente, acesse: http://localhost:5000 ou http://localhost:5001 caso a porta 5000 ja esteja sendo usada.

<h2 align="center">Feito com ❤️ por <a href="https://www.linkedin.com/in/wendell-eloi-1a5324168/">Wendell Eloi</a></h2>
