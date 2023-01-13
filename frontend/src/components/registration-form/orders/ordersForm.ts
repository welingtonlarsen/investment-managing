import { useForm } from "react-hook-form"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export enum Market {
    BOVESPA = 'Bovespa',
}

export enum BuyOrSell {
    BUY = 'Compra',
    SELL = 'Venda'
}

export enum MarketType {
    VISTA = 'Vista'
}

export enum Title {
    SAPR11 = 'SAPR11',
    TAEE11 = 'TAEE11'
}

type OrdersInput = {
    market: string,
    orders: {
        market: Market,
        buyOrSell: BuyOrSell,
        marketType: MarketType,
        title: Title,
        quantity?: number,
        price?: number,
    }[]
}

const schemaOrders = yup.object({
    market: yup.string().required('Negociação é obrigatório.'),
    orders: yup.array().of(
        yup.object({
            market: yup.string().required('Negociação é obrigatório.'),
            buyOrSell: yup.string().required('Tipo do negócio é obrigatório.'),
            marketType: yup.string().required('Mercado é obrigatório.'),
            title: yup.string().required('Titulo é obrigatório.'),
            quantity: yup.number().typeError('Quantidade é obrigatório.').required('Quantidade é obrigatório.').moreThan(0, 'Quantidade invalida.'),
            price: yup.number().typeError('Preço é obrigatório.').required('Preço é obrigatório.'),
        })
    )
})

export const useOrdersForm = () => {
    return useForm<OrdersInput>(
        {
            defaultValues: {
                market: 'ABC',
                orders: [
                    {
                        market: Market.BOVESPA,
                        buyOrSell: BuyOrSell.BUY,
                        marketType: MarketType.VISTA,
                        title: Title.SAPR11,
                    }
                ]
            },
            mode: 'all',
            resolver: yupResolver(schemaOrders)
        })
    ;
}