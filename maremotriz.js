let menubar = document.querySelector('#menu-bar')
let nav = document.querySelector('.navbar')


menubar.onclick = () =>{
    menubar.classList.toggle('fa-times')
    nav.classList.toggle('active')   
}


const sr = ScrollReveal ({
    distance : '49px',
    duration : 2700,
    reset : true,
  })

  sr.reveal('.myimageabout',{ delay:350, origin:'left' })
  sr.reveal('.about-text-content',{ delay:350, origin:'right' })
  sr.reveal('.home-image',{ delay:350, origin:'left' })
  sr.reveal('.home-text-content',{ delay:350, origin:'right' })
  

  sr.reveal('.about-inner-content',{ delay:350, origin:'left' })
  sr.reveal('.quality-content',{ delay:350, origin:'left' })
  sr.reveal('.qulity-image',{ delay:350, origin:'right' })
  sr.reveal('.funcionamento',{ delay:350, origin:'top' })
  sr.reveal('.funcionamento-detalhado',{ delay:350, origin:'left' })
  sr.reveal('.topico-funcionamento',{ delay:350, origin:'right' })
  sr.reveal('.funciona',{ delay:350, origin:'left' })
  sr.reveal('.como-funciona-imagem',{ delay:350, origin:'right' })
