import { FieldArrayWithId, UseFieldArrayAppend, UseFormRegister, Control, Controller } from 'react-hook-form';
import { TBrokerageNote, defaultOrder } from '../../../../hooks/useBrokerageNoteForm';
import { useState, useEffect } from 'react';
import { TStock } from '../../../../types/stock.type';
import { useStockService } from '../../../../service/useStockService';
import { Box, Typography, Grid, TextField, Autocomplete, IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { SelectField } from '../../@components/select-field';
import { NumberField } from '../../@components/number-field';

type TProps = {
  fields: FieldArrayWithId<TBrokerageNote, 'orders', 'id'>[];
  append: UseFieldArrayAppend<TBrokerageNote, 'orders'>;
  register: UseFormRegister<TBrokerageNote>;
  control: Control<TBrokerageNote, unknown>;
};

export const Orders: React.FC<TProps> = ({ fields, append, register, control }) => {
  const stockService = useStockService();

  const [stocks, setStocks] = useState<TStock[]>([]);

  useEffect(() => {
    async function fetchStocks() {
      const stocksResult = await stockService.getAllIgnoringPagination();
      setStocks(stocksResult);
    }
    fetchStocks();
  }, []);

  const onIncrementOrder = () => {
    append(defaultOrder);
  };

  // @ts-ignore
  const renderFields = (field: FieldArrayWithId<TBrokerageNote, 'orders', 'id'>, index: any) => {
    return (
      <Grid key={index} sx={{ mb: 4 }} container spacing={2}>
        <Grid item xs={12} sm={6} lg={2}>
          <SelectField
            id={`orders.${index}.market`}
            label="Mercado"
            field={'orders.market'}
            control={control}
            index={index}
            options={[{ key: 'BOVESPA', value: 'BOVESPA', title: 'BOVESPA' }]}
          />
        </Grid>
        <Grid item xs={12} sm={3} lg={1}>
          <SelectField
            id={`orders.${index}.buyOrSell`}
            label="C/V"
            field={'orders.buyOrSell'}
            control={control}
            index={index}
            options={[
              { key: 'BUY', value: 'BUY', title: 'Compra' },
              { key: 'SELL', value: 'SELL', title: 'Venda' },
            ]}
          />
        </Grid>
        <Grid item xs={12} sm={3} lg={2}>
          <SelectField
            id={`orders.${index}.marketType`}
            label="Tipo Mercado"
            field={'orders.marketType'}
            control={control}
            index={index}
            options={[{ key: 'VISTA', value: 'VISTA', title: 'VISTA' }]}
          />
        </Grid>

        {/* TODO: Isolar em um componente para reaproveitamento de código */}
        <Grid item xs={12} sm={6} lg={2}>
          <Controller
            control={control}
            name={`orders.${index}.symbol`}
            render={({ field: { onChange, value: selectedStock } }) => {
              return (
                <Autocomplete
                  onChange={(_event, item) => {
                    onChange(item);
                  }}
                  value={selectedStock}
                  options={stocks.map((stock) => stock.symbol)}
                  getOptionLabel={(stock) => (stock ? stock : '')}
                  isOptionEqualToValue={(stock) => {
                    return stock === selectedStock;
                  }}
                  // getOptionSelected={(option, value) =>
                  //   value === undefined || value === '' || option.title === value.title
                  // }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Título"
                      variant="outlined"
                      InputLabelProps={{ shrink: true }}
                      // error={!!errors.item}
                      // helperText={errors.item && 'item required'}
                      // required
                    />
                  )}
                />
              );
            }}
          />
        </Grid>

        <Grid item xs={12} sm={3} lg={1}>
          <NumberField
            register={register}
            id={`orders.${index}.quantity`}
            label={'Quantidade'}
            field="orders.quantity"
            index={index}
          />
        </Grid>
        <Grid item xs={12} sm={3} lg={1}>
          <NumberField
            register={register}
            id={`orders.${index}.price`}
            label={'Preço'}
            field="orders.price"
            index={index}
          />
        </Grid>
        <Grid item xs={12} sm={3} lg={1}>
          <NumberField
            register={register}
            id={`orders.${index}.total`}
            label={'Total'}
            field="orders.total"
            index={index}
          />
        </Grid>
        <Grid item xs={12} sm={3} lg={1}>
          <SelectField
            id={`orders.${index}.debitOrCredit`}
            label="D/C"
            field={'orders.debitOrCredit'}
            control={control}
            index={index}
            options={[
              { key: 'DEBIT', value: 'DEBIT', title: 'Débito' },
              { key: 'CREDIT', value: 'CREDIT', title: 'Crédito' },
            ]}
          />
        </Grid>
      </Grid>
    );
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography sx={{ my: 4 }} variant="h6" gutterBottom>
        Ordens
      </Typography>

      {fields.map((field, index) => renderFields(field, index))}

      <Box sx={{ display: 'flex', justifyContent: 'center', my: -2 }}>
        <IconButton
          size="small"
          sx={{ display: 'flex' }}
          aria-label="fingerprint"
          color="success"
          onClick={onIncrementOrder}
        >
          <AddCircleIcon fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
};
