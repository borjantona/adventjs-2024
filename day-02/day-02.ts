/*Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, 
pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar este marco mágico.

Reglas:

Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
Cada nombre debe estar en una línea, alineado a la izquierda.
El marco está construido con * y tiene un borde de una línea de ancho.
La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.

createFrame(['midu', 'madeval', 'educalvolpz'])

// Resultado esperado:
***************
* midu        *
* madeval     *
* educalvolpz *
***************

createFrame(['midu'])

// Resultado esperado:
********
* midu *
********

createFrame(['a', 'bb', 'ccc'])

// Resultado esperado:
*******
* a   *
* bb  *
* ccc *
*******

createFrame(['a', 'bb', 'ccc', 'dddd'])
*/

function createFrame(names: string[]): string {
  let frame = "";
  let namesAux = [...names];
  namesAux.sort((nameA, nameB) => {
    return nameA.length - nameB.length;
  });
  const maxWidth = namesAux[namesAux.length - 1].length;

  for (let i = 0; i < maxWidth + 4; i++) {
    frame += "*";
  }
  frame += "\n";

  // cheack repeat for string repetition -> "*".repeat(maxWidth+4)

  for (let name of names) {
    frame += "* " + name;
    for (let j = 0; j < maxWidth - name.length; j++) {
      frame += " ";
    }
    frame += " *\n";
  }

  for (let i = 0; i < maxWidth + 4; i++) {
    frame += "*";
  }
  return frame;
}

/* With repeat 


function createFrame(names: string[]): string {
  // Code here
  let frame = "";
  let namesAux = [...names]
  namesAux.sort((nameA, nameB) => {
    return nameA.length - nameB.length
  })
  const maxWidth = namesAux[namesAux.length - 1].length;

  frame += "*".repeat(maxWidth+4) + "\n"

   for (let name of names) {
    frame += "* " + name + " ".repeat(maxWidth - name.length) + " *\n"
  }

  frame += "*".repeat(maxWidth+4)
  return frame
}
*/
