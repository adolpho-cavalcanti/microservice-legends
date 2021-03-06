## Description

Projeto LegendsCards referente ao curso: https://www.udemy.com/course/construindo-um-backend-escalavel-com-nestjs-aws-e-pivotalws/

Esse repositório contém o Microservice Legendcards pertencente a essa arquitetura de microservices: <br>
<img src="https://thumbs2.imgbox.com/27/76/ixZCYsHy_t.jpeg" alt="arquitetura"/>

### Link do Repositório: Api Gateway
  - https://github.com/adolpho-cavalcanti/legendcards-gateway-api

### OBSERVAÇÃO
  - Lembrando que para as requisições funcionarem, os dois projetos precisam estar rodando, além de você ter um serviço de mensageria(RabbitMQ) rodando e configurado nos projetos.
  - o arquivo .env.example tem variável de ambiente referente aos serviços hospdados na cloud como o RabbitMQ no EC2 da AWS e um Cluster no MongoDB Atlas rodando no microservice LegendCards.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
