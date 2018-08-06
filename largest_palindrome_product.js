/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits){
  
  function setTime(initial, number, variance){
    time = '' + initial;
    for( let d = 0; d < digits - variance; d++) {
      time += number;
    }
    return time;
  }

  let start = setTime('', 9, 0);

  let factor_0 = parseInt(start);
  let factor_1 = parseInt(start);
  let palindromeNumber, product;
  let thisNum = 0;

    const setLargest = () => {
      for( let i = factor_1; i > factor_1-319; i-- ) {
        for( let j = factor_0; j > factor_0-21; j-- ) {
          product = ( i * j ) + '';
  
          let reversedNum = product.split("").reverse().join('');
          if( product === reversedNum ) {
            if( parseInt(thisNum) < parseInt(product) ) {
              thisNum = parseInt(product);
            }
          }
        }
      }
    }
  
    setLargest();
    palindromeNumber = thisNum;


  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};