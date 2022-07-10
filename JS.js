var div = document.getElementById('divi')
var apa = document.getElementById('conf')

var atual = new Date()
var ano = atual.getFullYear()



function Verificar(){

    var nasc = document.getElementsByName('txtan')[0]

    var an = ano - Number(nasc.value)

    if(Number(nasc.value) <= ano && Number(nasc.value) >=1900){
    div.style.height = "600px"
    div.style.transition = "0.3s"

   

    var gen = ""

    var op = document.getElementsByName('opsex')

    var persona = document.createElement('img')
    persona.setAttribute('id','imge')

    if(op[0].checked){
        if(an >=12){
            gen = "um Homem"
           if(an <25){
               persona.setAttribute('src', 'https://static.wikia.nocookie.net/dublagem/images/3/35/Noriaki_Kaky%C5%8Din.png/revision/latest?cb=20210623122054&path-prefix=pt-br')
              
            }else if(an <45){
               persona.setAttribute('src', 'https://static.wikia.nocookie.net/jjba/images/a/ad/George_Joestar.png/revision/latest?cb=20211009194131&path-prefix=pt-br')
              
            }else{
                persona.setAttribute('src', 'https://64.media.tumblr.com/cd932e528624501a33493f5c0607b3c9/276aed16689efcb1-dd/s640x960/e816f446a94df527176d3cb753e3360e16bae2c3.jpg')
            }
        }else{
            gen = "um Menino"
            if(an == 0){
                persona.setAttribute('src', 'https://i.pinimg.com/564x/a5/1c/15/a51c1530b83144aa34f8fd5f6afd19fd.jpg')
                div.appendChild(persona)
            }else{
                persona.setAttribute('src', 'https://i.pinimg.com/originals/59/8e/22/598e2284f8b2f15fa1200f4eb943a687.jpg')
              
            }
        }


        
    }else{
        if(an >=12){
            gen = "uma Mulher"
            if(an <25){
              persona.setAttribute('src', 'https://i.pinimg.com/236x/6d/c8/5b/6dc85b768a7b8fcf017fa8a757bfaca3.jpg')
            }else if(an <45){
              persona.setAttribute('src', 'https://static.wikia.nocookie.net/jjba/images/a/af/HolyKujo_Anime.png/revision/latest?cb=20150207172416')
            }else{
              persona.setAttribute('src', 'https://static.wikia.nocookie.net/jjba/images/6/68/Suzie_Quatro_Anime.png/revision/latest/scale-to-width-down/250?cb=20140913160014')
            }
        }else{
            gen = "uma Menina"
            if(an == 0){
                persona.setAttribute('src', 'https://static.wikia.nocookie.net/jjba/images/e/e0/LLBaby.png/revision/latest/scale-to-width-down/250?cb=20130329000246')
            }else{
                persona.setAttribute('src', 'https://static.wikia.nocookie.net/jjba/images/8/84/Runawaygirl.png/revision/latest?cb=20140509222739')
            }
        }
        
    }


   
    apa.innerHTML = `<h4>É ${gen} de ${an} anos</h4>`
    apa.appendChild(persona)
    
    
    

    
    }else{
        
            window.alert("[ERRO] Verifique o ano")  
        
    }
    



    
}






