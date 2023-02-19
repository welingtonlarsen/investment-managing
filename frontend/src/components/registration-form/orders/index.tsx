import { Button, Grid, IconButton, Typography } from '@mui/material'
import { useFieldArray } from 'react-hook-form'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined'
import SelectControlled from '../../@ui/SelectControlled'
import { BuyOrSell, Market, MarketType, Title, useOrdersForm } from './ordersForm'
import NumberFieldControled from '../../@ui/NumberFieldControled'

type Props = {
  handlePrevious: () => void
  handleNextCallback: () => void
}

const Orders: React.FC<Props> = ({ handlePrevious, handleNextCallback }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isDirty, isSubmitted, isValid },
    formState,
  } = useOrdersForm()
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'orders',
  })

  const handleNext = (data: any) => {
    if (formState.isValid) {
      handleNextCallback()
    }
  }

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Ordens
      </Typography>
      <Grid container spacing={3}>
        {fields.map((_field, index) => {
          return (
            <>
              <Grid item xs={2} md={2}>
                <SelectControlled
                  index={index}
                  name={`orders.${index}.market`}
                  control={control}
                  register={register}
                  menuItems={Object.values(Market)}
                  errors={errors}
                  title="Negociação"
                />
              </Grid>
              <Grid item xs={2} md={2}>
                <SelectControlled
                  index={index}
                  name={`orders.${index}.buyOrSell`}
                  control={control}
                  register={register}
                  menuItems={Object.values(BuyOrSell)}
                  errors={errors}
                  title="C/V"
                />
              </Grid>
              <Grid item xs={2} md={2}>
                <SelectControlled
                  index={index}
                  name={`orders.${index}.marketType`}
                  control={control}
                  register={register}
                  menuItems={Object.values(MarketType)}
                  errors={errors}
                  title="Tipo mercado"
                />
              </Grid>
              <Grid item xs={2} md={2}>
                <SelectControlled
                  index={index}
                  name={`orders.${index}.title`}
                  control={control}
                  register={register}
                  menuItems={Object.values(Title)}
                  errors={errors}
                  title="Título"
                />
              </Grid>
              <Grid item xs={1.5} md={1.5}>
                <NumberFieldControled
                  namePos={`orders.${index}.quantity`}
                  index={index}
                  name="quantity"
                  control={control}
                  errors={errors}
                  title="Quantidade"
                  register={register}
                />
              </Grid>
              <Grid item xs={1.5} md={1.5}>
                <NumberFieldControled
                  namePos={`orders.${index}.price`}
                  index={index}
                  name="price"
                  control={control}
                  errors={errors}
                  title="Preço"
                  register={register}
                />
              </Grid>
              <Grid item xs={1} md={1}>
                <IconButton onClick={() => remove(index)} color="primary" aria-label="add to shopping cart">
                  <DeleteOutlineOutlinedIcon />
                </IconButton>
              </Grid>
            </>
          )
        })}

        <Grid container xs={12} md={12} justifyContent="center" sx={{ mt: 3 }}>
          <IconButton
            onClick={() =>
              append({
                market: Market.BOVESPA,
                buyOrSell: BuyOrSell.BUY,
                marketType: MarketType.VISTA,
                title: Title.SAPR11,
              })
            }
            color="primary"
            aria-label="add to shopping cart"
          >
            <AddCircleOutlinedIcon />
          </IconButton>
        </Grid>
        <Grid container xs={12} md={12} justifyContent="flex-end" sx={{ mt: 3 }}>
          <Button onClick={handlePrevious} sx={{ mt: 3, ml: 1 }}>
            Voltar
          </Button>

          <Button
            disabled={!isValid && (isSubmitted || isDirty)}
            onClick={handleSubmit(handleNext)}
            variant="contained"
            sx={{ mt: 3, ml: 1 }}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default Orders
