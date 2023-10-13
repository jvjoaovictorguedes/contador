function contador() {
    let inicio = Number(document.getElementById('inicio').value);
    let fim = Number(document.getElementById('fim').value);
    let passo = Number(document.getElementById('passo').value);
    let resultado = document.getElementById('resultado');

    if(inicio == 0 || fim == 0 || passo == 0){
        resultado.innerHTML = 'Impossível contar!'
    } else {
        resultado.innerHTML = 'Contando: <br>';
        let i = Number(inicio);
        let f = Number(fim);
        let p = Number(passo);
        if(p <= 0) {
            window.alert('Passo inválido. Considerado o passo 1')
            p = 1;
        }
        if(i < f) {
        for(let c = i; c <= f; c += p){
            resultado.innerHTML += `${c} &#128073;`;
        }} else {
            for(let c = i; c >= f; c -= p) {
                resultado.innerHTML += ` ${c} &#128073;`;
        }
    }
        resultado.innerHTML += `&#127937;`
}}


/*
function contador() {
    const inicio = Number(document.getElementById('inicio').value);
    const fim = Number(document.getElementById('fim').value);
    const passo = Number(document.getElementById('passo').value);
    const resultado = document.getElementById('resultado');

    let contador = inicio;
    let texto = '';
    

    if(contador == 0 || passo == 0 || fim == 0){
        window.alert('[ERRO] Sem um inicio não é possivel continuar!')
    } else {
        while(contador <= fim){
        texto += contador + '&#128073 ';
        contador += passo;
    }}

    resultado.innerHTML = '<p>Contando: <br>' + texto.slice(0, -2) + '</p> &#127937;';
}  */