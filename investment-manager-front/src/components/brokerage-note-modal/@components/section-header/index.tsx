import { Divider, Typography } from '@mui/material';

export const SectionHeader = ({ title }: { title: string }) => {
  return (
    <>
      <Typography sx={{ ml: 5, fontWeight: 'bold' }}>{title}</Typography>
      <Divider sx={{ mx: 5 }} />
    </>
  );
};
