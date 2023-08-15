import { Control, FieldArrayWithId, UseFieldArrayAppend, UseFormRegister } from 'react-hook-form';
import { TBrokerageOrder } from '../../../hooks/useBrokerageNoteForm';
import React from 'react';
import { GeneralInformation } from './general-information';
import { Orders } from './orders';

type TProps = {
  fields: FieldArrayWithId<TBrokerageOrder, 'orders', 'id'>[];
  append: UseFieldArrayAppend<TBrokerageOrder, 'orders'>;
  register: UseFormRegister<TBrokerageOrder>;
  control: Control<TBrokerageOrder, unknown>;
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
