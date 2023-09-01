import { Control, FieldArrayWithId, UseFieldArrayAppend, UseFormRegister } from 'react-hook-form';
import { TBrokerageNote } from '../../../hooks/useBrokerageNoteForm';
import React from 'react';
import { GeneralInformation } from './general-information';
import { Orders } from './orders';

type TProps = {
  fields: FieldArrayWithId<TBrokerageNote, 'orders', 'id'>[];
  append: UseFieldArrayAppend<TBrokerageNote, 'orders'>;
  register: UseFormRegister<TBrokerageNote>;
  control: Control<TBrokerageNote, unknown>;
};

const OrdersForm: React.FC<TProps> = ({ fields, append, register, control }) => {
  return (
    <>
      <GeneralInformation register={register} />
      <Orders fields={fields} append={append} register={register} control={control} />
    </>
  );
};

export default OrdersForm;
