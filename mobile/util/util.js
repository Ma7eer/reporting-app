export const generateIndex = (page) => {
  let d = new Date();
  return page === "pothole"
    ? `P${d.getFullYear()}-${Math.floor(Math.random() * 9999) + 1000}`
    : `W${d.getFullYear()}-${Math.floor(Math.random() * 9999) + 1000}`;
};

export const generateDate = () => {
  let d = new Date();
  return `${d.getFullYear()}-${d.getMonth()}-${d.getDay()}`;
};
