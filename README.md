<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

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

## Payloads Bovespa translation

This session is responsible for translating English words into Bovespa brokerage order words (Portugues).

#### POST /brokerage-order

    {
        "generalInformation (informação geral)": {
            "brokerageOrderNumber (numero da nota)": 51198038,
            "tradingFlorDate (data pregao)": "2022-06-24",
            "clientId (cliente)": "2079101"
        },
        "orders (negocios realizados)": [
            {
                "market (negociacao)": "BOVESPA",
                "buyOrSell (c/v)": "BUY",
                "marketType (tipo mercado)": "VISTA",
                "title (especificacao do titulo)": "SANEPAR UNT N2",
                "quantity (quantidade)": 100,
                "price (preco/ajuste)": 18.50,
                "total (valor operacao)": 1850.00,
                "debitOrCredit (d/c)": "DEBIT"
            }
        ],
        "businessSummary (resumo dos negócios)": {
            "debentures (Debêntures)": 0.00,
            "sellInCash (Vendasà vista)": 0.00,
            "buyInCash (Compras à vista)": 1850.00,
            "optionsBuy (Opções - compras)": 0.00,
            "optionsSell (Opções - vendas)": 0.00,
            "termOptions (Operações à termo)": 0.00,
            "federalSecurities (Valor das oper. c/ títulos públ. (v. nom.))": 0.00,
            "operationValues (Valor das operações)": 1850.00
        },
        "financialSummary (Resumo Financeiro)": {
            "clearing (Clearing)": {
                "operationsNetValue (Valor líquido das operações)": -1850.00,
                "settlementFee (Taxa deliquidação)": 0.46,
                "registryFee (Taxa de Registro)": 0.00,
                "totalCblc (Total CBLC)": 1850.46
            },
            "exchange (Bolsa)": {
                "termOrOptionsFee (Taxa determo/opções)": 0.00,
                "anaFee (Taxa A.N.A.)": 0.00,
                "fees (Emolumentos)": 0.09,
                "total (Total Bovespa / Soma)": 0.09
            },
            "operationalCosts (Custos Operacionais)": {
                "operationalFee (TaxaOperacional)": 4.90,
                "execution (Execução)": 0.00,
                "custody (Taxa deCustódia)": 0.00,
                "taxes (Impostos)": 0.52,
                "irrf (I.R.R.F. s/ operações, base R$0,00)": 0.00,
                "others (Outros)": 0.19,
                "totalCosts (Total Custos /Despesas)": 5.61
            },
            "netDate (Data de líquidação": "2022-06-28",
            "netTotalValue (Total líquido)": 1856.16,
            "netDebitOrCredit (D/V)": "DEBIT"
        }
    }


## License

Nest is [MIT licensed](LICENSE).
