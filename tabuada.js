function tabuada() {
    var num = window.document.getElementById('num') 
    var end = document.getElementById('end')
    var n = Number(num.value) //pegando o valor numerico de "num"
    var e = Number(end.value) //pegando o valor numerico de "end"
    if (n == `` ||e == ``){
         window.alert(`Por favor preencha os campos solicitados`)
    }else {
        var r = '' //variavel r esta vazia
        var res = window.document.getElementById('resposta') //ela tem o valor do texto
        //"Preencha os valores acima"
        res.innerHTML = `a tabuada do ${n} é: <br>`
        var x = 0 
        do {
            r= n*x
            res.innerHTML += `${n}x${x} =${r} <br>`/* Esse mais com igual significa que ele mantém 
            a resposta salva enquanto imprime outras */
            x++
        } while (x <= e)
    }
}
