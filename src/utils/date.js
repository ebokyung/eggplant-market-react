export function dateProcess(createdAt) {
  const itemDate = new Date(createdAt);
  const YEAR = itemDate.getFullYear();
  const MONTH = itemDate.getMonth() + 1 >= 10 ? itemDate.getMonth() + 1 : `0${itemDate.getMonth() + 1}`;
  const DAY = itemDate.getDate();

  return `${YEAR}년 ${MONTH}월 ${DAY}일`;
}

export function displayedAt(createdAt) {
  const milliSeconds = new Date() - new Date(createdAt);
  const seconds = milliSeconds / 1000;
  if (seconds < 60) return `방금 전`;
  const minutes = seconds / 60;
  if (minutes < 60) {
    return `${Math.floor(minutes)}분 전`;
  }
  const hours = minutes / 60;
  if (hours < 24) {
    return `${Math.floor(hours)}시간 전`;
  }

  return dateProcess(createdAt);
}
