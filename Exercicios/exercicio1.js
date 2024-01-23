/* Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou do semestre;
*/

const nota = 5
const mota = 10
media = (nota + mota) / 2;


if( media < 5) {
    console.log('Reprovação');
} else if (media >=5 && media > 7){
    console.log('Recuperação');
}else{
    console.log('Aprovado')
}