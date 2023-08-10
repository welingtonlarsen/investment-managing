<div align="center">

# Investment Managing

![](https://img.shields.io/badge/Status-Development-blue)


</div>
<div align="center">

![](https://img.shields.io/badge/Autor-Welington%20Larsen-brightgreen)
![](https://img.shields.io/badge/Language-Typescript-brightgreen)
![](https://img.shields.io/badge/Framework-Nestjs-brightgreen)

</div>

## Description

This application gives an accounting summary of an investment year. It's useful to investors to create reports about stock market negotiations and calculate annual income tax in Brazil.

## Features

### API
#### Done
- Create brokerage order
- List all brokerage orders
#### To do
- Calculate annual profit

### Frontend
#### To do
- Create brokerage order
- List all brokerage orders
- Calculate annual profit


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
### Kinds
- End to end (e2e):
    - Located in ```./test```.
    - Run the entire application.
    - Test the complete input/output flow.
- Integration tests:
    - Located inside modules directories.
    - Run the entire application.
    - Test external dependencies, like database.
- Unit tests :
    - Located inside modules directories.
    - Mock dependencies
    - Run functions and classes
### Commands
```bash
# unit tests
$ npm run test

# integration tests
$ docker-compose up -d
$ npm run test:int

# e2e tests
$ docker-compose up -d
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

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
