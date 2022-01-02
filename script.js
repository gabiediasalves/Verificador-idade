function calcular(){
    var data = new Date()
    var ano = data.getFullYear()
    var resultado = document.querySelector('input#years').value
    var detecta = document.getElementById('detecta')
    if (resultado == 0 || resultado > ano){
        window.alert ('[ERRO] Confira os dados e tente novamente!')
    } else { 
        var fsex = document.getElementsByName('radsex')
        var idade = ano - resultado
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
        if (idade >=0 && idade < 10) {
            //Criança
            img.setAttribute('src', 'criança.jpg')
        } else if (idade > 21 && idade < 29){
            //jovem
            img.setAttribute('src', 'jovem.jpg')
        } else if (idade < 50){
            //Adulto
            img.setAttribute('src', 'adulto.jpg')
        } else {
            //idoso
            img.setAttribute('src', 'idoso.jpg')
        }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'criançaf.jpg')
            } else if (idade > 21 && idade < 29){
                //jovem
                img.setAttribute('src', 'jovemf.jpg')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'adulta.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idosa.jpg')
            }
        }
       
        detecta.style.textAlign = 'center'
        detecta.innerHTML=`Detectado ${genero} idade ${idade} anos.`
        detecta.appendChild(img)
    }
}