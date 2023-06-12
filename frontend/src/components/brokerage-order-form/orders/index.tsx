import { useFieldArray } from "react-hook-form"
import { defaultOrder } from "../../../hooks/registration-form"
import { PlusCircle } from "../../../icons/plus-circle"
import { TRegistrationFormProps } from "../../../types/registration-form"
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

    const getSelectFields = (index: number) => [
        {
            id: 'market',
            title: 'Mercado',
            options: [{value: 'BOVESPA', title: 'BOVESPA'}],
            inputProps: {...register(`orders.${index}.market`)},
            name: `orders.${index}.market`,
            // todo: remove
            register: register,
            errors: errors
        },
        {
            id: 'buyOrSell',
            title: 'C/V',
            options: [{value: 'BUY', title: 'Compra'}, {value: 'SELL', title: 'Venda'}],
            inputProps: {...register(`orders.${index}.buyOrSell`)},
            name: `orders.${index}.buyOrSell`,
            // todo: remove
            register: register,
            errors: errors
        },
        {
            id: 'marketType',
            title: 'Tipo',
            options: [{value: 'VISTA', title: 'Vista'}, {value: 'OPCAO', title: 'Opção'}],
            inputProps: {...register(`orders.${index}.marketType`)},
            name: `orders.${index}.marketType`,
            // todo: remove
            register: register,
            errors: errors
        },
        {
            id: 'title',
            title: 'Título',
            options: [{value: 'SAPR11', title: 'SAPR11'}, {value: 'TAEE11', title: 'TAEE11'}],
            inputProps: {...register(`orders.${index}.title`)},
            name: `orders.${index}.title`,
            // todo: remove
            register: register,
            errors: errors
        }
    ]

    const getInputFields = (index: number) => [
        {
            id: 'quantity',
            title: 'Quantidade',
            type: 'number',
            errorMessage: errors.orders?.[index]?.quantity?.message,
            inputProps: {...register(`orders.${index}.quantity`)}
        },
        {
            id: 'price',
            title: 'Preço',
            type: 'number',
            errorMessage: errors.orders?.[index]?.price?.message,
            inputProps: {...register(`orders.${index}.price`)}
        },
        {
            id: 'total',
            title: 'Total',
            type: 'number',
            errorMessage: errors.orders?.[index]?.total?.message,
            inputProps: {...register(`orders.${index}.total`)}
        }
    ]

    return (
        <div className="flex flex-col items-center">
                {
                    fields.map((field, index) => (
                        <div key={field.id} className="grid grid-cols-9 gap-2">
                            {
                                getSelectFields(index).map(({id, title, options, inputProps, name, register, errors}, key) => (
                                  <div key={key} className="col-span-1">
                                      <SelectBox
                                        id={id}
                                        title={title}
                                        options={options}
                                        inputProps={inputProps}

                                        // todo: remove
                                        register={register}
                                        errors={errors}
                                      />
                                  </div>
                                ))
                            }
                            {
                                getInputFields(index).map(({id, title, type, errorMessage, inputProps}, key) => {
                                    return (
                                      <InputBox
                                        key={key}
                                        id={id}
                                        title={title}
                                        type={type}
                                        errorMessage={errorMessage}
                                        inputProps={inputProps}
                                      />
                                    )
                                })
                            }
                        </div>
                    ))
                }
            <div onClick={handdleAppend} className="w-12 h-12 flex justify-center items-center">
                <PlusCircle className="w-10 h-10 hover:w-12 hover:h-12 hover:cursor-pointer hover:fill-green-100 stroke-green-600 stroke-2"/>
            </div>

        </div>

    )
}
