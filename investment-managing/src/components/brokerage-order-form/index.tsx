import { useRegistrationForm } from "../../hooks/registration-form";
import { Footer } from "./footer";
import { GeneralInformation } from "./general-information"

export const BrokerageOrderForm = () => {
    const { register, control, handleSubmit, formState: { errors, isValid }, getValues, watch } = useRegistrationForm();

    const isNextDisabled = () => {
        return !isValid
    }

    const handleNext = () => {
        console.log('next')
    }

    return (
        <div className="bg-gray-100 rounded-md shadow-lg flex flex-col items-center justify-center max-w-2xl w-full px-24 py-10">
            <form className="min-w-full flex flex-col items-start">
                <GeneralInformation register={register} errors={errors}/>
                <Footer isNextDisabled={isNextDisabled()} isPreviousDisabled={true} showNext={true} showPrevious={true} handleNext={handleNext}/>
            </form>
        </div>
    )
}