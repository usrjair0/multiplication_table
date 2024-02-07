function tabuada() {

    var num = window.document.getElementById('num').value; 
    var end = document.getElementById('end').value;
    var n = Number(num);
    var e = Number(end);

    if (n == `` ||e == ``)
        window.alert(`Por favor preencha os campos solicitados`)
    else {
        let r = 0; 
        let res = window.document.getElementById('resposta'); 
        res.innerHTML = `a tabuada do ${n} é: <br>`;
        for(i=0; i<=e; i++){
            r = n*i;
            res.innerHTML += `${n}x${i}= ${r} <br>`;
        }

        //outra forma de fazer
        // var x = 0 
        // do {
        //     r= n*x
        //     res.innerHTML += `${n}x${x} =${r} <br>`;
        //     x++
        // } while (x <= e)
    }
}
