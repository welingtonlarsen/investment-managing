import { useState } from "react";
import { useRegistrationForm } from "../../hooks/registration-form";
import { BusinessSummary } from "./business-summary";
import { Footer } from "./footer";
import { GeneralInformation } from "./general-information"
import { Orders } from "./orders";
import { FinancialSummary } from "./financial-summary";
import { Exchange } from "./exchange";
import { OperationCosts } from "./operational-costs";
import { Total } from "./total";

export const BrokerageOrderForm = () => {
    const [currentForm, setCurrentForm] = useState(0);
    const { register, control, handleSubmit, formState: { errors, isValid, isDirty, touchedFields }, trigger, getValues, watch } = useRegistrationForm();

    const isNextDisabled = () => {
        const hasGeneralInformationErrors = !!errors.generalInformation
        const hasOrdersErrors = !!errors.orders
        const hasBusinessSummaryErrors = !!errors.businessSummary
        const hasClearingErrors = !!errors.financialSummary?.clearing
        const hasExchangeErrors = !!errors.financialSummary?.exchange
        const hasOperationCostsErrors = !!errors.financialSummary?.operationCosts

        console.log(currentForm)

        switch (currentForm) {
            case 0: {
                return hasGeneralInformationErrors && !isValid;
            }
            case 1: {
                return hasOrdersErrors && !isValid;
            }
            case 2: {
                return hasBusinessSummaryErrors && !isValid;
            }
            case 3: {
                return hasClearingErrors && !isValid;
            }
            case 4: {
                return hasExchangeErrors && !isValid;
            }
            case 5: {
                return hasOperationCostsErrors && !isValid;
            }
            default: {
                return false;
            }
        }
    }

    const handleNext = async () => {
        if(currentForm === 0) {
            await trigger('generalInformation');
        }
        if(currentForm === 1) {
            await trigger('orders')
        }
        if(currentForm === 2) {
            await trigger('businessSummary')
        }
        if (currentForm === 3) {
            await trigger('financialSummary.clearing')
        }
        if (currentForm === 4) {
            await trigger('financialSummary.exchange')
        }
        if (currentForm === 5) {
            await trigger('total')
        }

        const isGeneralInformationTouched = Object.keys(touchedFields.generalInformation || {}).length > 0
        const withoutGeneralInformationErrors = !errors.generalInformation

        if(currentForm === 0 && isGeneralInformationTouched && withoutGeneralInformationErrors) {
            setCurrentForm(currentForm + 1);
        }
        if(currentForm === 1) {
            setCurrentForm(currentForm + 1);
        }
        if (currentForm === 2) {
            setCurrentForm(currentForm + 1);
        }
        if (currentForm === 3) {
            setCurrentForm(currentForm + 1);
        }
        if (currentForm === 4) {
            setCurrentForm(currentForm + 1);
        }
        if (currentForm === 5) {
            setCurrentForm(currentForm + 1);
        }
    }

    const handlePrevious = () => {
        setCurrentForm(currentForm - 1);
    }

    const showSubmit = () => {
        return currentForm === 6;
    }

    const handleFormSubmit = () => {
        console.log(getValues())
    }

    return (
        <div className="bg-gray-100 rounded-md shadow-lg flex flex-col items-center justify-center px-5 py-10 my-5">
            <form className="flex flex-col items-center">
                <div className={`w-72 mx-24 ${currentForm !== 0 && 'hidden'}`}>
                    <GeneralInformation register={register} errors={errors}/>
                </div>
                <div className={`max-w-6xl ${currentForm !== 1 && 'hidden'}`}>
                    <Orders control={control} register={register} errors={errors}/>
                </div>
                <div className={`max-w-6xl ${currentForm !== 2 && 'hidden'}`}>
                    <BusinessSummary control={control} register={register} errors={errors}/>
                </div>
                <div className={`max-w-6xl ${currentForm !== 3 && 'hidden'}`}>
                    <FinancialSummary control={control} register={register} errors={errors}/>
                </div>
                <div className={`max-w-6xl ${currentForm !== 4 && 'hidden'}`}>
                    <Exchange control={control} register={register} errors={errors}/>
                </div>
                <div className={`max-w-6xl ${currentForm !== 5 && 'hidden'}`}>
                    <OperationCosts control={control} register={register} errors={errors}/>
                </div>
                <div className={`max-w-6xl ${currentForm !== 6 && 'hidden'}`}>
                    <Total control={control} register={register} errors={errors}/>
                </div>
                <Footer isNextDisabled={isNextDisabled()} isPreviousDisabled={true} showNext={true} showPrevious={true} handleNext={async () => await handleNext()} handlePrevious={handlePrevious} showSubmit={showSubmit()} handleSubmit={() => handleFormSubmit()}/>
            </form>
        </div>
    )
}
