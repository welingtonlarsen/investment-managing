import { Button, Grid, TextField, Typography } from '@mui/material'
import { title } from 'process'
import { Controller } from 'react-hook-form'
import NumberFieldControled from '../../@ui/NumberFieldControled'
import { useBusinessSumaryForm } from './businessSumaryForm'

type Props = {
  handlePrevious: () => void
  handleNextCallback: () => void
}

const BusinessSumary: React.FC<Props> = ({ handlePrevious, handleNextCallback }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isDirty, isSubmitted, isValid },
    formState,
  } = useBusinessSumaryForm()

  const handleNext = (data: any) => {
    console.log(data)
    if (formState.isValid) {
      // handleNextCallback()
    }
  }

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Business Sumary
      </Typography>
      <Grid item xs={1.5} md={1.5}>
        <Controller
          control={control}
          name="debentures"
          defaultValue={0 as any}
          render={({ field }) => (
            <TextField
              {...field}
              error={!!errors.debentures?.message}
              helperText={errors.debentures?.message}
              id="debentures"
              label="Debentures"
              type="number"
              fullWidth
              autoComplete="cc-name"
              variant="standard"
            />
          )}
        />
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
    </>
  )
}

export default BusinessSumary
