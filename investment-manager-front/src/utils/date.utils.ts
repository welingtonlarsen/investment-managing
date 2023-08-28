import {format, parseISO} from "date-fns";

export const removeTimeFromDate = (date: string | Date) => {
  const dateString = typeof date === 'string' ? date : String(date)
  return format(parseISO(dateString), 'yyyy-MM-dd')
}