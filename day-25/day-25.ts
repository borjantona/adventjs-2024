function execute(code) {
  code = code.split("");
  let value = 0;
  const actions = {
    ">": () => {},
    "+": () => value++,
    "-": () => value--,
    "[": () => {
      code = code.slice(code.indexOf("]") - 1);
    },
    "]": () => {
      value = 0;
    },
    "{": () => {
      if (value == 0) code = code.slice(code.indexOf("}"));
    },
    "}": () => {},
  };

  while (code.length) actions[code.shift()]();

  return value;
}

/*
  > Se mueve a la siguiente instrucción
  + Incrementa en 1 el valor actual
  - Decrementa en 1 el valor actual
  [ y ]: Bucle. Si el valor actual es 0, salta a la instrucción después de ]. Si no es 0, vuelve a la instrucción después de [
  {y }: Condicional. Si el valor actual es 0, salta a la instrucción después de }. Si no es 0, sigue a la instrucción después de {
  */

execute("+++"); // 3
execute("+--"); // -1
execute(">+++[-]"); // 0
execute(">>>+{++}"); // 3
execute("+{[-]+}+"); // 2
execute("{+}{+}{+}"); // 0
execute("------[+]++"); // 2
execute("-[++{-}]+{++++}"); // 5
