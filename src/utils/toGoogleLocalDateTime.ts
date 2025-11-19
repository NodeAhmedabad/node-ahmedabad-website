type Pad = (n: number) => string;

const pad: Pad = (n) => n.toString().padStart(2, '0');

type ToGoogleLocalDateTime = (dateStr: string, timeStr: string) => string;

const toGoogleLocalDateTime: ToGoogleLocalDateTime = (dateStr, timeStr) => {
  const date = new Date(`${dateStr} ${timeStr}`);

  const YYYY = date.getFullYear();
  const MM = pad(date.getMonth() + 1);
  const DD = pad(date.getDate());
  const hh = pad(date.getHours());
  const mm = pad(date.getMinutes());
  const ss = pad(date.getSeconds());

  return `${YYYY}${MM}${DD}T${hh}${mm}${ss}`;
};

export default toGoogleLocalDateTime;
