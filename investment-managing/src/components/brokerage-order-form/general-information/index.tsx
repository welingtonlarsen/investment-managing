import { TRegistrationFormProps } from "../../../types/registration-form"
import { InputBox } from "../../@ui/input-box"

export const GeneralInformation: React.FC<TRegistrationFormProps> = ({register, errors}) => {
    const { generalInformation: generalInformationErrors } = errors
    
    return (
        <>
            <InputBox 
                register={register('generalInformation.brokerageOrderNumber')} 
                title={'Número da nota'}
                id="brokerageOrderNumber"
                errorMessage={generalInformationErrors?.brokerageOrderNumber?.message}
                type={'number'}
            />
            <InputBox 
                register={register('generalInformation.tradingFlorDate')} 
                title={'Data das negociações'}
                id="tradingFlorDate"
                errorMessage={generalInformationErrors?.tradingFlorDate?.message}
                type={'date'}
            />
            <InputBox 
                register={register('generalInformation.clientId')} 
                title={'Id do cliente'}
                id="clientId"
                errorMessage={generalInformationErrors?.clientId?.message}
                type={'number'}
            />
        </>        
    )
}