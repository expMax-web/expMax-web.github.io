export const getFormatedDate = (
  date: string | null | undefined
): string | undefined => {
  if (date) {
    const formattedDate = new Date(date);

    return `${formattedDate.getDate()}.${formattedDate.getMonth()}.${formattedDate.getFullYear()}`;
  }
  return;
};
