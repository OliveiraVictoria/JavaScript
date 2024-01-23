/* função é pequeno trecho do código que a gente pode invocar a execução dele
a qualquer momento que você quiser*/

/* como se declara uma função?*/
  function sayMyName(name){
    console.log('Your name is:'  + name);
 }
 
 /* para invocar uma função, você escreve o nome da função e coloca (); e depois executa. 
 Observe o exemplo:*/

 sayMyName('Victoria');

 /*OUTRO EXEMPLO*/

 function quadrado(valor){
   return valor * valor;
 }

 const quadradoDeDez = quadrado(10);
 console.log(quadradoDeDez)