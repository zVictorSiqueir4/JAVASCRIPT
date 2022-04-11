function contar(){
    var ini = window.document.getElementById('txti')
    var fim = window.document.getElementById('txtf')
    var passo = window.document.getElementById('txtp')
    var res = window.document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    }else{
        res.innerHTML = 'Contando: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if(i < f){
            //Contagem crescente
            for (var c = i; c <= f; c += p){
                res.innerHTML += `${c} `
            }
        }else{
            //Contagem regressiva
            for (var c = i; c >= f; c -= p){
                res.innerHTML += `${c} `
            }
        }
    }
}

/*function contar(){
    var inicio = window.document.getElementById('txtinicio')
    var fim = window.document.getElementById('txtfim')
    var passo = window.document.getElementById('txtpasso')
    var res = window.document.getElementById('res')

    var inicio = Number(inicio.value)
    var fim = Number(fim.value)
    var passo = Number(number.value)
    var n = 1

    if(inicio >= 1 && fim == 5 && passo == 1){
        while(n = 1){
            n++
            res.innerHTML(`Contando ${n}`)
        }
    }
}*/