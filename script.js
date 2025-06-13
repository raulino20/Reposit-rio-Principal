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
///////////////////////////////////////////////////////////////////////

//////////  CONTAINER DOS CERTIFICADOS /////////////////////// 
let Container = document.getElementById('Certificado') 

document.getElementById('Open').addEventListener('change',function(){
  let valor = this.value 
  
switch(valor){

  case '0':
    Container.innerText = ''
    let ResetText = document.createElement('h3')
    ResetText.innerText = ' SELECIONE UMA DAS OPÇÕES '
    ResetText.style.color = '#aaaa'
    Container.appendChild(ResetText)

    break

  case '1':
  Container.innerText = ''
  let WIDT = window.matchMedia('(max-width:768px)')
  const HTML = document.createElement('img')
  
  HTML.src = 'public/imagens/Certificado HTML5.jpg'
    HTML.alt = 'IMG-HTML'
    HTML.style.margin = 'auto auto auto auto'

    HTML.style.transform = 'matrix(1, 0, 0,1, 0, 0)'
  if(WIDT.matches){

    HTML.style.width = '100%'
    console.log('HTML5 - Mobile')
   }else{
    HTML.style.width = '50%'
    console.log('HTML5 - Desktop')
  }

   Container.appendChild(HTML)
   console.log('HTML')
   
  break
    
  case '2':
  Container.innerText = ''
  let WIDT2 = window.matchMedia('(max-width:768px)')
  const CSS = document.createElement('img')
  
    CSS.src = 'public/imagens/Certificado CSS.jpg'
    CSS.alt = 'IMG-CSS'
  if(WIDT2.matches){
    CSS.style.width = '100%'
    console.log('CSS - Mobile')
  }else{
    CSS.style.width = '50%'
    console.log('CSS - Desktop')
  }
    CSS.style.margin = 'auto auto auto auto'
 
    Container.appendChild(CSS)
    console.log('CSS')

  break

  case '3':
  Container.innerText = ''
  let WIDT3= window.matchMedia('(max-width:768px)')
  const CSSM = document.createElement('img')

    CSSM.src = 'public/imagens/Certificado CSS MODERNO.jpg'
    CSSM.alt = 'IMG-CSSM'
  if(WIDT3.matches){
     CSSM.style.width = '100%'
     console.log('CSS MODERNO - Mobile')
  }else{
     CSSM.style.width = '50%'
     console.log('CSS MODERNO - Desktop')
  }
    CSSM.style.margin = 'auto auto auto auto'

    Container.appendChild(CSSM)
    console.log('CSS MODERNO')

  break

  case '4':
  Container.innerText = ''
  let WIDT4 = window.matchMedia('(max-width:768px)')
  const BOOTSTRAP = document.createElement('img')

    BOOTSTRAP.src = 'public/imagens/Certificado Bootstrap.jpg'
    BOOTSTRAP.alt = 'IMG-BOOTSTRAP'
  if(WIDT4.matches){
      BOOTSTRAP.style.width = '100%'
      console.log('BOOTSTRAP - Mobile')
  }else{  
      BOOTSTRAP.style.width = '50%'
      console.log('BOOTSTRAP - Desktop')
  }
    BOOTSTRAP.style.margin = 'auto auto auto auto'

    Container.appendChild(BOOTSTRAP)
    console.log('BOOTSTRAP')

  break

  case '5':
    Container.innerText = ''
    let WIDT5 = window.matchMedia('(max-width:768px)')
    const SASS = document.createElement('img')

    SASS.src = 'public/imagens/Certificado SASS.jpg'
    SASS.alt = 'IMG-SASS'
    
  if(WIDT5.matches){
      SASS.style.width = '100%'
      console.log('SASS - Mobile')
  }else{
      SASS.style.width = '50%'
      console.log('SASS - Desktop')
  }
    SASS.style.margin = 'auto auto auto auto'

    Container.appendChild(SASS)
    console.log('SASS')

  break

  }
}) 

//////

//FECHAR O CONTAINER APÓS O CLICK PARA VOLTAR AO HEADER (TAMANHO 768PX OU MENOS)
    let CollapseSM = document.getElementById('Aqui')
    document.getElementById('Reload').addEventListener('click',function(){
  
      if(CollapseSM.getAttribute('class', 'collapse show')){ 
         CollapseSM.setAttribute('class', 'collapse collapse-vertical collapseH')
      }else{

        CollapseSM.Attribute('class', 'collapse-verical collapse collapseH')

      }
   })

//LINK PARA WHATS
document.getElementById('Whats').addEventListener('click',function(){
    const Text = `Olá, Preciso de um Serviço seu. ` 
    const Url = `https://wa.me/${5511965404572}?text=${Text}`
    window.open(Url,'_blank')    
})
