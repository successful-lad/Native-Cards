/*
* Компонент возвращает строку, что бы подставить число, на выходе не забудь преобразовать ответ
* */

const onlyNumbers = text =>{
  const numbArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return text.split('').filter(word => numbArr.includes(+word)).join('');
}
export default onlyNumbers;
