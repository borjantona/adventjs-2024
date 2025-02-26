function createXmasTree(height: number, ornament: string): string {
	const width = height*2 - 1;
	let tree = '';
	for (let i = 1; i <= height; i++) {
	  const underScoreNumber = (width - (i*2-1)) / 2;
	  const line = '_'.repeat(underScoreNumber) + ornament.repeat(i*2-1) + '_'.repeat(underScoreNumber) + '\n';
	  tree += line;
	}
	tree += '_'.repeat((width - (1*2-1)) / 2) + '#' + '_'.repeat((width - (1*2-1)) / 2) + '\n';
	tree += '_'.repeat((width - (1*2-1)) / 2) + '#' + '_'.repeat((width - (1*2-1)) / 2);
	return tree;
  }
  
  const tree = createXmasTree(5, '*')
  console.log(tree)
  /*
  ____*____
  ___***___
  __*****__
  _*******_
  *********
  ____#____
  ____#____
  */
  
  const tree2 = createXmasTree(3, '+')
  console.log(tree2)
  /*
  __+__
  _+++_
  +++++
  __#__
  __#__
  */
  
  const tree3 = createXmasTree(6, '@')
  console.log(tree3)
  /*
  _____@_____
  ____@@@____
  ___@@@@@___
  __@@@@@@@__
  _@@@@@@@@@_
  @@@@@@@@@@@
  _____#_____
  _____#_____
  */