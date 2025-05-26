let  Lista = document.getElementById('OpenH')

let BtnOn = document.getElementById('BtnHOn')

let Mento = document.getElementById('Conhecimento')

let Btn2 = document.getElementById('buttonH2')

let BtnChange = document.getElementById('BtnChange')

let BtnOff = document.getElementById('BtnHOff')

let Elementos = document.getElementsByClassName('ListH')


        function Hamburguer(){
        
        BtnChange.style.display = 'none'
         Btn2.style.margin = '5% 5% auto 80%'
            Lista.style.margin = '0px auto auto 0px'
                Lista.style.position = 'fixed'
                Lista.style.justifyContent = 'between'
              Lista.style.display = 'block'
            Lista.style.height ='100%'
          Lista.style.width ='80%'
        Lista.style.zIndex ='3' 
    }  

    function CloseH(){
        
        Lista.style.display = 'none'
        
        BtnChange.style.display = 'block'
    
    }

    function HamburguerOn(){

        Lista.style.display = 'none'
        BtnChange.style.display = 'Block'


    }
    
    function Criar(){

     
        let NewCard = document.createElement('card')
        
        if(NewCard === true){
        alert("já há um card porra")
      }else{
        Posicionar = document.getElementById('GridPush')
        NewCard.type = 'card'
          NewCard.style.display = 'flex'
              NewCard.style.width = '75%'
                 NewCard.style.borderRadius = '3%'
                   NewCard.style.height = '100%'
                   NewCard.style.gridColumn = '1/4'
                 NewCard.style.gridRow = '7/8'
              NewCard.style.flexDirection = 'column'
        NewCard.style.backgroundColor = 'white'

        Img = document.createElement('img')
             Img.src = 'imagens/gta6-pic-oficial.jpg'
             Img.style.width = '100%'
        Img.innerText = 'VISU'
        
        
        let TitleCard = document.createElement('h2')
        TitleCard.type = 'string'
             TitleCard.innerText = 'TITULINHO'
             TitleCard.style.textAlign = 'center'
        TitleCard.style.width = '100%'

        let TextCard = document.createElement('p')
  
        TextCard.type = 'text'
          TextCard.style.width = '100%'
            TextCard.style.height = '100%'
                TextCard.style.padding = '0.5rem'
                TextCard.style.fontSize = '18px'
             TextCard.style.textAlign = 'center'
        
           const Texto = document.createElement('input')
        Texto.type = ' string '
        Texto.innerText ='resumo : '

          const confirmar = document.createElement('button')
            confirmar.type = 'submit'
          confirmar.innerText = 'Confirmar'
      
   
 
        TextCard.appendChild(Texto)
        TextCard.appendChild(confirmar)
      
          NewCard.appendChild(Img)
            NewCard.appendChild(TitleCard)
            NewCard.appendChild(TextCard)
          Posicionar.appendChild(NewCard)
      }
    }

const WP = document.getElementById('Whats')

WP.addEventListerner('click',function(){
    const Text = `Olá, Preciso de um Serviço seu. ` 
    const Url = `https://wa.me/<5511965404572?text=${Text}`
    window.open(Url,'_blank')    
})
