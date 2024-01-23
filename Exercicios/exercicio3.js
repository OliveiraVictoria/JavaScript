
/* Condição de Pagamento
- Á vista débito: receba 10% de desconto
- Á vista no dinheiro ou pix: receba 15% de desconto
- Em duas vezes, preço normal de etiqueta sem juros
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%
*/

const precoProduto = 200
const formaPagamento = 2

if (formaPagamento === 1){
    console.log(precoProduto - (precoProduto * 0.1));
}else if (formaPagamento === 2){
    console.log(precoProduto - (precoProduto * 0.15))
}else if (formaPagamento === 3){
    console.log(precoProduto);
}else{
    console.log(precoProduto + (precoProduto * 0.1));
}

