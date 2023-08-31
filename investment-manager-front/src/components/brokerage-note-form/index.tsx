import Box from '@mui/material/Box';
import {TBrokerageOrder, useBrokerageNoteForm} from '../../hooks/useBrokerageNoteForm';
import OrdersForm from './orders-form';
import {useEffect, useState} from 'react';
import BusinessForm from './business-form';
import FinancialForm from './financial-form';
import OperationalCostsForm from './operational-costs-form';
import EndForm from './end-form';
import Navigation from './navigation';
import StepsHeader from './steps-header';
import {useLocation} from "react-router-dom";
import {removeTimeFromDate} from "../../utils/date.utils.ts";

const steps = ['Ordens', 'Negócios', 'Financeiro', 'Despesas', 'Final'];

interface TBrokerageNoteFormProps {
  submitCallback(formValues: TBrokerageOrder): Promise<void>;
}

const BrokerageNoteForm: React.FC<TBrokerageNoteFormProps> = ({ submitCallback}) => {
  const location = useLocation() as {state: TBrokerageOrder}

  const { fields, append, handleSubmit, register, control, reset } = useBrokerageNoteForm();
  const [currentStep, setCurrentStep] = useState(0);

console.log(fields)
  useEffect(() => {
    if(location.state) {
      const { state } = location
      const tradingFlorDate = removeTimeFromDate(state.generalInformation.tradingFlorDate || '')
      const generalInformation = {...state.generalInformation, tradingFlorDate}
      const orders = state.orders.map((order) => ({...order, symbol: order.stock?.symbol}))
      const financialSummary = {...state.financialSummary, netDate: removeTimeFromDate(state.financialSummary.netDate || '')}
      reset({...state, orders, generalInformation, financialSummary})
    }
  }, []);

  return (
    <>
      <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit(submitCallback)}>
        <StepsHeader currentStep={currentStep} steps={steps} />
        {currentStep === 0 && <OrdersForm control={control} fields={fields} append={append} register={register} />}
        {currentStep === 1 && <BusinessForm register={register} />}
        {currentStep === 2 && <FinancialForm register={register} />}
        {currentStep === 3 && <OperationalCostsForm register={register} />}
        {currentStep === 4 && <EndForm control={control} register={register} />}
        <Navigation currentStep={currentStep} steps={steps} setCurrentStep={setCurrentStep} />
      </Box>
    </>
  );
};

export default BrokerageNoteForm;
