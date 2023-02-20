import { useRegistrationForm } from "../../hooks/registration-form";
import { Footer } from "./footer";
import { GeneralInformation } from "./general-information"
import { Orders } from "./orders";

export const BrokerageOrderForm = () => {
    const { register, control, handleSubmit, formState: { errors, isValid, isDirty, touchedFields }, getValues, watch } = useRegistrationForm();

    const isNextDisabled = () => {
        const isTouched = Object.entries(touchedFields).length > 0
        return isTouched && !isValid
    }

    const handleNext = () => {
        console.log('next')
    }

    return (
        <div className="bg-gray-100 rounded-md shadow-lg flex flex-col items-center justify-center px-5 py-10">
            <form className="flex flex-col items-center">
                {/* <div className="w-72 mx-24">
                    <GeneralInformation register={register} errors={errors}/>
                </div> */}
                <div className="max-w-6xl">
                    <Orders />
                </div>
                <Footer isNextDisabled={isNextDisabled()} isPreviousDisabled={true} showNext={true} showPrevious={true} handleNext={handleNext}/>
            </form>
        </div>
    )
}