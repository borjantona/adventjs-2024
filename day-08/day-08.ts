function drawRace(indices: number[], length: number): string {
	let race = '';
	let path = '~'.repeat(length);
	for (let i = 0; i < indices.length; i++) {
	  let arrayPath = path.split('');
	  let pos = (indices[i] < 0) ? (length + indices[i]) : indices[i] ;
	  if (pos !== 0) arrayPath[pos] = 'r'
	  race += ' '.repeat(indices.length - i - 1) + arrayPath.join('') + ` /${i+1}`;
	  if (i !== indices.length - 1) race += '\n'
	}
	
	return race
  }