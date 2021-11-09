  let iife = (function () {
      let value;
      function setValue(newValue) {
        if (newValue) value = newValue;
      }
      function showValue() {
        if (typeof value === 'object' || typeof value === 'undefined') {
           return ("variable is undeclared or empty");
         } else
            return value;
      }
      function reverseValue() {
        if (typeof value === 'number') {
            return value*(-1);
        } else if (typeof value === 'string') {
                return value.split('').reverse().join('');
            }
        }     
      return {
          setValue,
          showValue,
          reverseValue,
      };
  })();

  iife.setValue(123);
  console.log(iife.showValue());
  console.log(iife.reverseValue());