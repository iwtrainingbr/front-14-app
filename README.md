# front-14-app
## App de Finanças


### Baixando a aplicação
- `git clone https://github.com/iwtrainingbr/front-14-app`

### Instalando as dependencias
- `cd app-14-front`
- `npm install`
- `npm install -g json-server`

### Subindo o servidor do banco de dados
No diretório da aplicação, crie um novo arquivo chamado `db.json` e copie para ele o conteúdo do arquivo `db.json.dist`

Execute no terminal:
```shell
npx json-server --watch db.json --port 3001
```

### Executando a aplicação
Execute no terminal
```shell
npm start
```

### Instalando o Cypress (testes)
- `npm install cypress`

### Executando o Cypress (testes)
- `npx cypress open`
