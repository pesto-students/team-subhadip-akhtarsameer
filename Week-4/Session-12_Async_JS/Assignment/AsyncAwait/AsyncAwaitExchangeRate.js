async function getExchangeRate(currencyCode) {
    try {
      const response = await fetch(`https://api.exchangerate.host/latest?base=EUR`);
      
      if (!response.ok) {
        throw new Error('Unable to fetch exchange rates.');
      }
      
      const data = await response.json();
      
      const rate = data.rates[currencyCode.toUpperCase()];
      
      if (rate === undefined) {
        return null;
      }
      
      return Number(rate.toFixed(4));
    } catch (error) {
      throw new Error('An error occurred while fetching exchange rates.');
    }
  }
  
  // Test examples
  getExchangeRate('USD')
    .then((rate) => {
      console.log(rate); // Output: 1.2133
    })
    .catch((error) => {
      console.error(error);
    });
  
  getExchangeRate('XYZ')
    .then((rate) => {
      console.log(rate); // Output: null
    })
    .catch((error) => {
      console.error(error);
    });
  