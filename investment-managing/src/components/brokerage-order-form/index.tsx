import { useState } from "react";
import { useRegistrationForm } from "../../hooks/registration-form";
import { BusinessSummary } from "./business-summary";
import { Footer } from "./footer";
import { GeneralInformation } from "./general-information"
import { Orders } from "./orders";

export const BrokerageOrderForm = () => {
    const [currentForm, setCurrentForm] = useState(0);
    const { register, control, handleSubmit, formState: { errors, isValid, isDirty, touchedFields }, trigger, getValues, watch } = useRegistrationForm();

    const isNextDisabled = () => {
        const hasGeneralInformationErrors = !!errors.generalInformation
        const hasOrdersErrors = !!errors.orders

        switch (currentForm) {
            case 0: {
                return hasGeneralInformationErrors && !isValid;
            }
            case 1: {
                return hasOrdersErrors && !isValid;
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
       
        const isGeneralInformationTouched = Object.keys(touchedFields.generalInformation || {}).length > 0
        const withoutGeneralInformationErrors = !errors.generalInformation
        
        if(currentForm === 0 && isGeneralInformationTouched && withoutGeneralInformationErrors) {
            setCurrentForm(currentForm + 1);
        }
        if(currentForm === 1) {
            setCurrentForm(currentForm + 1);
        }
    }

    const handlePrevious = () => {
        setCurrentForm(currentForm - 1);
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
                    <BusinessSummary />
                </div>
                <button type="button" onClick={() =>console.log(getValues())}>get values</button>
                <Footer isNextDisabled={isNextDisabled()} isPreviousDisabled={true} showNext={true} showPrevious={true} handleNext={async () => await handleNext()} handlePrevious={handlePrevious}/>
            </form>
        </div>
    )
}