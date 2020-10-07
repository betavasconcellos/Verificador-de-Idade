function verificar(){
var data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById('tano')
var res = document.getElementById('res')
if (fano.value.length == 0 || (fano.value) > ano){
    alert('[ERRO] Verifique os dados e tente novamente.')
}
else{
    var sex = document.getElementsByName('radsex') //só pra testar o erro (getid nesse caso dá erro)
    //var msex = document.getElementById('masc')//2
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')

    if(sex[0].checked){
        genero = 'homem'

            if (idade>=0 && idade<3){
                img.setAttribute('src','bebe.png')
             }
              else if(idade<12){
               img.setAttribute('src','menino.png')
              }
            else if(idade<25){
                img.setAttribute('src','ojovem.png')
              }
              else if(idade<60){
                img.setAttribute('src','oadulto.png')
             }
             else if(idade<125){
                 img.setAttribute('src','idoso.png')
             }
            else{
                  img.setAttribute('src','esqueleto.png')

            }
        }
    else if(sex[1].checked) {
        genero = 'mulher'

        if (idade>=0 && idade<3){
            img.setAttribute('src','bebe.png')
        }
        else if(idade<12){
            img.setAttribute('src','menina.png')
        }
        else if(idade<25){
            img.setAttribute('src','ajovem.png')
        }
        else if(idade<60){
            img.setAttribute('src','aadulta.png')
        }
        else if(idade<125){
            img.setAttribute('src','idosa.png')
        }
        else{
            img.setAttribute('src','esqueleto.png')
    }
    }
    res.innerHTML = `<p>Detectamos <b>${genero}</b> de <b>${idade}</b> anos.</p>`
    res.appendChild(img)
}

}