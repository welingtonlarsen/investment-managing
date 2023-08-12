import { Control, Controller, FieldArrayWithId, UseFieldArrayAppend, UseFormRegister } from 'react-hook-form';
import { TBrokerageOrder, defaultOrder } from '../../../hooks/useBrokerageNoteForm';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid, IconButton, MenuItem, Typography, Autocomplete } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import React, { useEffect, useState } from 'react';
import { useStockService } from '../../../service/useStockService';
import { TStock } from '../../../types/stock.type';

type TProps = {
  fields: FieldArrayWithId<TBrokerageOrder, 'orders', 'id'>[];
  append: UseFieldArrayAppend<TBrokerageOrder, 'orders'>;
  register: UseFormRegister<TBrokerageOrder>;
  control: Control<TBrokerageOrder, unknown>;
};

const OrdersForm: React.FC<TProps> = ({ fields, append, register, control }) => {
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

  const renderGeneralInformation = () => {
    return (
      <Box>
        <Typography sx={{ mb: 4 }} variant="h6" gutterBottom>
          Informações gerais
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} lg={2}>
            <TextField
              type="number"
              sx={{ display: 'flex' }}
              {...register('generalInformation.brokerageOrderNumber', { valueAsNumber: true })}
              InputLabelProps={{ shrink: true }}
              id="outlined-basic"
              label="Número"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={2}>
            <TextField
              type="date"
              sx={{ display: 'flex' }}
              {...register('generalInformation.tradingFlorDate')}
              InputLabelProps={{ shrink: true }}
              id="outlined-basic"
              label="Data"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={2}>
            <TextField
              sx={{ display: 'flex' }}
              {...register('generalInformation.clientId')}
              InputLabelProps={{ shrink: true }}
              id="outlined-basic"
              label="Cliente"
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Box>
    );
  };

  const renderOrders = () => {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography sx={{ my: 4 }} variant="h6" gutterBottom>
          Ordens
        </Typography>
        {fields.map((field, index) => {
          return (
            <Grid key={index} sx={{ mb: 4 }} container spacing={2}>
              <Grid item xs={12} sm={6} lg={2}>
                <Controller
                  name={`orders.${index}.market`}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      select
                      sx={{ display: 'flex' }}
                      label="Mercado"
                      variant="outlined"
                      InputLabelProps={{ shrink: true }}
                      {...field} // Passa os atributos do campo do Controller para o TextField
                    >
                      <MenuItem key="BOVESPA" value="BOVESPA">
                        BOVESPA
                      </MenuItem>
                    </TextField>
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={3} lg={1}>
                <Controller
                  name={`orders.${index}.buyOrSell`}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      select
                      sx={{ display: 'flex' }}
                      label="C/V"
                      variant="outlined"
                      InputLabelProps={{ shrink: true }}
                      {...field} // Passa os atributos do campo do Controller para o TextField
                    >
                      <MenuItem key="BUY" value="BUY">
                        Compra
                      </MenuItem>
                      <MenuItem key="SELL" value="SELL">
                        Venda
                      </MenuItem>
                    </TextField>
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={3} lg={2}>
                <Controller
                  name={`orders.${index}.marketType`}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      select
                      sx={{ display: 'flex' }}
                      label="Tipo Mercado"
                      variant="outlined"
                      InputLabelProps={{ shrink: true }}
                      {...field} // Passa os atributos do campo do Controller para o TextField
                    >
                      <MenuItem key="VISTA" value="VISTA">
                        VISTA
                      </MenuItem>
                    </TextField>
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={2}>
                <Controller
                  control={control}
                  name={`orders.${index}.title`}
                  render={({ field: { onChange, value: selectedStock } }) => {
                    return (
                      <Autocomplete
                        onChange={(event, item) => {
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
                <TextField
                  sx={{ display: 'flex' }}
                  inputProps={{ ...register(`orders.${index}.quantity`, { valueAsNumber: true }) }}
                  label="Quantidade"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} sm={3} lg={1}>
                <TextField
                  sx={{ display: 'flex' }}
                  inputProps={{ ...register(`orders.${index}.price`, { valueAsNumber: true }) }}
                  label="Preço"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} sm={3} lg={1}>
                <TextField
                  sx={{ display: 'flex' }}
                  inputProps={{ ...register(`orders.${index}.total`, { valueAsNumber: true }) }}
                  label="Total"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} sm={3} lg={1}>
                <Controller
                  name={`orders.${index}.debitOrCredit`}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      select
                      sx={{ display: 'flex' }}
                      label="D/C"
                      variant="outlined"
                      InputLabelProps={{ shrink: true }}
                      {...field} // Passa os atributos do campo do Controller para o TextField
                    >
                      <MenuItem key="DEBIT" value="DEBIT">
                        Débito
                      </MenuItem>
                      <MenuItem key="CREDIT" value="CREDIT">
                        Credito
                      </MenuItem>
                    </TextField>
                  )}
                />
              </Grid>
            </Grid>
          );
        })}
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

  return (
    <>
      {renderGeneralInformation()}
      {renderOrders()}
    </>
  );
};

export default OrdersForm;
