import { UseFormRegister } from 'react-hook-form';
import { TBrokerageOrder } from '../../../hooks/useBrokerageNoteForm';
import { Clearing } from './clearing';
import { Exchange } from './exchange';

type TProps = {
  register: UseFormRegister<TBrokerageOrder>;
};

const FinancialForm: React.FC<TProps> = ({ register }) => {
  return (
    <>
      <Clearing register={register} />
      <Exchange register={register} />
    </>
  );
};

export default FinancialForm;
