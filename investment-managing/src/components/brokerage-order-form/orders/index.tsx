import { useFieldArray } from "react-hook-form"
import { defaultOrder } from "../../../hooks/registration-form"
import { PlusCircle } from "../../../icons/plus-circle"
import { TOrderProp, TRegistrationFormProps } from "../../../types/registration-form"
import { InputBox } from "../../@ui/input-box"
import { SelectBox } from "../../@ui/select-box"

export const Orders: React.FC<TRegistrationFormProps> = ({ control, register, errors }) => {
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'orders'
    })

    const handdleAppend = () => {
        append(defaultOrder)
    }

    return (
        <div className="flex flex-col items-center">
                {
                    fields.map((field, index) => (
                        <div key={field.id} className="grid grid-cols-9 gap-2">
                            <div className="col-span-1">
                                <SelectBox name={TOrderProp.market} register={register} errors={errors} index={index} title="Mercado" options={[{value: 'BOVESPA', title: 'BOVESPA'}]}/>
                            </div>
                            <div className="col-span-1">
                                <SelectBox name={TOrderProp.buyOrSell} register={register} errors={errors} index={index} title="C/V" options={[{value: 'BUY', title: 'Compra'}, {value: 'SELL', title: 'Venda'}]}/>
                            </div>
                            <div className="col-span-1">
                                <SelectBox name={TOrderProp.marketType} register={register} errors={errors} index={index} title="Tipo" options={[{value: 'VISTA', title: 'Vista'}]}/>
                            </div>
                            <div className="col-span-2">
                                <SelectBox name={TOrderProp.title} register={register} errors={errors} index={index} title="Título" options={[{value: 'SAPR11', title: 'SAPR11'}, {value: 'TAEE11', title: 'TAEE11'}]}/>
                            </div>
                            <div className="col-span-1">
                                <InputBox errorMessage={errors.orders?.[index]?.quantity?.message} register={register} formStep={`orders.${index}.quantity`} name={`orders.${index}.quantity`} title="Quantidade" type={'number'} id={'quantity'}/>
                            </div>
                            <div className="col-span-1">
                                <InputBox errorMessage={errors.orders?.[index]?.price?.message} register={register} formStep={`orders.${index}.price`} name={`orders.${index}.price`} title="Preço" type={'number'} id={'price'}/>
                            </div>
                            <div className="col-span-1">
                                <InputBox errorMessage={errors.orders?.[index]?.total?.message} register={register} formStep={`orders.${index}.total`} name={`orders.${index}.total`} title="Total" type={'number'} id={'total'}/>
                            </div>
                            <div className="col-span-1">
                                <SelectBox name={TOrderProp.debitOrCredit} register={register} errors={errors}index={index} title="D/C" options={[{value: 'DEBIT', title: 'Débito'}, {value: 'CREDIT', title: 'Crédito'}]}/>
                            </div>
                        </div>
                    ))
                }
            <div onClick={handdleAppend} className="w-12 h-12 flex justify-center items-center">
                <PlusCircle className="w-10 h-10 hover:w-12 hover:h-12 hover:cursor-pointer hover:fill-green-100 stroke-green-600 stroke-2"/>
            </div>

        </div>

    )
}
