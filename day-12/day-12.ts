function calculatePrice(ornaments: string): number {
	const ornamentsArr = ornaments.split('');
	let price = 0;
	let prices = {
	  '*': 1,
	  'o': 5,
	  '^': 10,
	  '#': 50,
	  '@': 100
	}
	
	for (let i = 0; i < ornamentsArr.length; i++) {
	  if (prices[ornamentsArr[i]]) {
		if (i === ornamentsArr.length - 1) {
		  price += prices[ornamentsArr[i]];
		} else {
		  if (prices[ornamentsArr[i]] < prices[ornamentsArr[i+1]]) {
			price -= prices[ornamentsArr[i]];
		  } else {
			price += prices[ornamentsArr[i]];
		  }
		}
	  } else {
		return undefined;
	  }
	}
	
	return price
  }
  
  calculatePrice('***')  // 3   (1 + 1 + 1)
  calculatePrice('*o')   // 4   (5 - 1)
  calculatePrice('o*')   // 6   (5 + 1)
  calculatePrice('*o*')  // 5  (-1 + 5 + 1) 
  calculatePrice('**o*') // 6  (1 - 1 + 5 + 1) 
  calculatePrice('o***') // 8   (5 + 3)
  calculatePrice('*o@')  // 94  (-5 - 1 + 100)
  calculatePrice('*#')   // 49  (-1 + 50)
  calculatePrice('@@@')  // 300 (100 + 100 + 100)
  calculatePrice('#@')   // 50  (-50 + 100)
  calculatePrice('#@Z')  // undefined (Z es desconocido)