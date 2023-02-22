import { TGeneralInformation, TRegistrationFormProps } from "../../../types/registration-form"
import { InputBox } from "../../@ui/input-box"

export const GeneralInformation: React.FC<TRegistrationFormProps> = ({register, errors}) => {
    const { generalInformation: generalInformationErrors } = errors
    
    return (
        <>
            <InputBox  
                register={register}
                title={'Número da nota'}
                id={TGeneralInformation.brokerageOrderNumber}
                errorMessage={generalInformationErrors?.brokerageOrderNumber?.message}
                type={'number'}
                formStep='generalInformation.brokerageOrderNumber'
            />
            <InputBox 
                register={register}
                title={'Data das negociações'}
                id={TGeneralInformation.tradingFlorDate}
                errorMessage={generalInformationErrors?.tradingFlorDate?.message}
                type={'date'}
                formStep='generalInformation.tradingFlorDate'
            />
            <InputBox 
                register={register}
                title={'Id do cliente'}
                id={TGeneralInformation.clientId}
                errorMessage={generalInformationErrors?.clientId?.message}
                type={'number'}
                formStep='generalInformation.clientId'
            />
        </>        
    )
}