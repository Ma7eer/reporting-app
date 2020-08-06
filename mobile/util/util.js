export const generateIndex = () => {
  let d = new Date();
  return `R${d.getFullYear()}-${Math.floor(Math.random() * 9999) + 1000}`;
};

export const generateDate = () => {
  let d = new Date();
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
};
