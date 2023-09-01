import { Box, Typography } from '@mui/material';

export const ItemValue = ({ item, value }: { item: string; value: string | number | undefined }) => {
  return (
    <Box sx={{ display: 'flex', mr: 5 }}>
      <Typography sx={{ mr: 1, fontWeight: 'bold' }}>{item}:</Typography>
      <Typography>{value}</Typography>
    </Box>
  );
};
