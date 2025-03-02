type Shoe = {
	type: 'I' | 'R'
	size: number
  }
  
  function organizeShoes(shoes: Shoe[]): number[] {
	const organizedShoes: number[] = [];
	const leftShoes = shoes.filter(shoe => shoe.type === 'I');  
	const rightShoes = shoes.filter(shoe => shoe.type === 'R');
	const numbersProcessed: number[] = [];
	
	for (const shoe of leftShoes) {
	  if (numbersProcessed.includes(shoe.size)) {
		continue;
	  } else {
		const numberOfLSizes = leftShoes.filter(shoeL => shoeL.size === shoe.size).length;
		const numberOfRSizes = rightShoes.filter(shoeR => shoeR.size === shoe.size).length;
		if (numberOfLSizes > 0 && numberOfRSizes > 0) {
		  const shoes = new Array(Math.min(numberOfLSizes,numberOfRSizes)).fill(shoe.size);
		  organizedShoes.push(...shoes);
		}
		numbersProcessed.push(shoe.size);
	  }
	}  
	return organizedShoes;
  }
  
  const shoes: Shoe[] = [
	{ type: 'I', size: 38 },
	{ type: 'R', size: 38 },
	{ type: 'R', size: 42 },
	{ type: 'I', size: 41 },
	{ type: 'I', size: 42 }
  ]
  
  organizeShoes(shoes)
  // [38, 42]
  
  const shoes2: Shoe[] = [
	{ type: 'I', size: 38 },
	{ type: 'R', size: 38 },
	{ type: 'I', size: 38 },
	{ type: 'I', size: 38 },
	{ type: 'R', size: 38 }
  ]
  organizeShoes(shoes2)
  // [38, 38]
  
  const shoes3: Shoe[] = [
	{ type: 'I', size: 38 },
	{ type: 'R', size: 36 },
	{ type: 'R', size: 42 },
	{ type: 'I', size: 41 },
	{ type: 'I', size: 43 }
  ]
  
  organizeShoes(shoes3)
  // []
  