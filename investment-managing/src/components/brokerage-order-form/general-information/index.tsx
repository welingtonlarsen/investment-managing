import { TRegistrationFormProps } from "../../../types/registration-form"
import { InputBox } from "../../@ui/input-box"

export const GeneralInformation: React.FC<TRegistrationFormProps> = ({register, errors}) => {
    const { generalInformation: generalInformationErrors } = errors

    const fields = [
      {
        id: 'brokerageOrderNumber',
        title: 'Número da nota',
        type: 'number',
        errorMessage: generalInformationErrors?.brokerageOrderNumber?.message,
        inputProps: {...register('generalInformation.brokerageOrderNumber')}
      },
      {
        id: 'tradingFlorDate',
        title: 'Data das negociações',
        type: 'date',
        errorMessage: generalInformationErrors?.tradingFlorDate?.message,
        inputProps: {...register('generalInformation.tradingFlorDate')}
      },
      {
        id: 'clientId',
        title: 'Id do cliente',
        type: 'number',
        errorMessage: generalInformationErrors?.clientId?.message,
        inputProps: {...register('generalInformation.clientId')}
      }
    ]

    return (
        <>
          {
            fields.map(({id, title, type, errorMessage, inputProps}, key) => {
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
        </>
    )
}
