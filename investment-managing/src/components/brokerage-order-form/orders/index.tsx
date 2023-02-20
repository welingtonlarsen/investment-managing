import { InputBox } from "../../@ui/input-box"
import { SelectBox } from "../../@ui/select-box"

export const Orders = () => {
    return (
        <div className="grid grid-cols-8 gap-2">
            <div className="col-span-1">
                <SelectBox title="Mercado" options={[{value: 'BOVESPA', title: 'BOVESPA'}]}/>
            </div>
            <div className="col-span-1">
                <SelectBox title="C/V" options={[{value: 'BUY', title: 'Compra'}, {value: 'SELL', title: 'Venda'}]}/>
            </div>
            <div className="col-span-1">
                <SelectBox title="Tipo" options={[{value: 'VISTA', title: 'Vista'}]}/>
            </div>
            <div className="col-span-1">
                <SelectBox title="Título" options={[{value: 'SAPR11', title: 'SAPR11'}, {value: 'TAEE11', title: 'TAEE11'}]}/>
            </div>
            <div className="col-span-1">
                <InputBox title="Quantidade" type={'number'} id={'quantity'}/>
            </div>
            <div className="col-span-1">
                <InputBox title="Preço" type={'number'} id={'price'}/>
            </div>
            <div className="col-span-1">
                <InputBox title="Total" type={'number'} id={'total'}/>
            </div>
            <div className="col-span-1">
                <SelectBox title="D/C" options={[{value: 'DEBIT', title: 'Débito'}, {value: 'CREDIT', title: 'Crédito'}]}/>
            </div>
        </div>
    )
}