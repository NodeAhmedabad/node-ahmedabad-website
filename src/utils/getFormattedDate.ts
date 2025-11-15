type GetFormattedDate = (date: string) => string;

const getFormattedDate: GetFormattedDate = (date) =>
  new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

export default getFormattedDate;
