export const formatHour = (value: Date) => {
  const time = new Date(value ?? '');
  const hours = time.getHours().toString().padStart(2, '0'); // Thêm số 0 nếu < 10
  const minutes = time.getMinutes().toString().padStart(2, '0'); // Thêm số 0 nếu < 10
  return `${hours}:${minutes}`;
};
