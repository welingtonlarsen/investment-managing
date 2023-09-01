import { format, parseISO } from 'date-fns';

export const removeTimeFromDate = (date: string | Date) => {
  if (!date) return;
  const dateString = typeof date === 'string' ? date : String(date);
  return format(parseISO(dateString), 'dd/MM/yyyy');
};

export const formatToMUI = (date: string | Date) => {
  if (!date) return;
  const dateString = typeof date === 'string' ? date : String(date);
  return format(parseISO(dateString), 'yyyy-MM-dd');
};
