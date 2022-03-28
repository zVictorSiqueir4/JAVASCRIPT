function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //CRIANÇA
                img.setAttribute('src', 'menino.png')
            }else if(idade >= 10 && idade < 21){
                //JOVEM
                img.setAttribute('src', 'garoto.png')
            }else if(idade >= 21 && idade < 50){
                //ADULTO
                img.setAttribute('src', 'homem.png')
            }else{
                //IDOSO
                img.setAttribute('src', 'vozinho.png')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //CRIANÇA
                img.setAttribute('src', 'menina.png')
            }else if(idade >= 10 && idade < 21){
                //JOVEM
                img.setAttribute('src', 'garota.png')
            }else if(idade >= 21 && idade < 50){
                //ADULTO
                img.setAttribute('src', 'mulher.png')
            }else{
                //IDOSO
                img.setAttribute('src', 'vozinha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}