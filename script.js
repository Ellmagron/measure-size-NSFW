function analisar(){
    var size = document.querySelector('input#medida')
    var res = document.querySelector('div#res')
    

    if(size.value.length == 0){
        alert('Digite uma meida!!')
    }else{
      var service = document.getElementsByName('fan')
      var msg = ''
      var link = ''
      var img = document.createElement('img')
      img.setAttribute('id','foto')

      if(service[0].checked){ //

        if( size.value == 'A' || size.value == 'a'){
            //Seio Tamanho pequeno
            msg = 'Pequeno'
            link = '<a href="https://twitter.com/hommakai910/status/1492336495340191744?s=20&t=gA4wlAtw3uz9PWRz27xk5A" target="_blank" rel="external">Artista</a>'
            img.setAttribute('src','img/bob-small.png')

        } else if (size.value == 'D'|| size.value =='d'){
            //Seio Tamanho medio
            msg = 'Medio'
            link = '<a href="https://twitter.com/houtengeki/status/1493862653743476739?s=20&t=BZiunl_0RNomnitisMPDCQ" target="_blank rel="external">Artista</a>'
            img.setAttribute('src','img/bob-medium.png')

        }else if (size.value == 'G'|| size.value == 'g'){
            //Seio Tamanho Grande
            msg = 'Grande'
            link = '<a href="https://twitter.com/dandonfuga/status/791368202710347777?s=20&t=oGp_l_lSkyuWFTnjVsAZ6g" target="_blank rel="external">Artista</a>'
            img.setAttribute('src','img/bob-huge.png')
        }
      } else if(service[1].checked)
      
      if(size.value == 'A' || size.value == 'a'){
            //Ass Tamanho pequeno
            msg = 'Pequeno'
            link = '<a href="https://www.deviantart.com/kariza-kath/art/Nightingale-Fate-831154380" target="_blank rel="external">Artista</a>'
            img.setAttribute('src','img/ass-small.png')

      }else if(size.value == 'D' || size.value == 'd'){
            //Ass Tamanho medio
            msg = 'Medio'
            link = '<a href="https://twitter.com/JT_Veemo/status/1488012856125956098?s=20&t=xS4gyxsK67qo7-MWePuFNw" target="_blank rel="external">Artista</a>'
            img.setAttribute('src','img/ass-medium.png')

      }else if( size.value == 'G'|| size.value == 'g'){
            //Ass Tamanho Grande
            msg = 'Grande'
            link = '<a href="https://www.pixiv.net/en/artworks/83040810" target="_blank rel="external">Artista</a>'
            img.setAttribute('src','img/ass-huge.png')
      }
    res.style.textAlign = 'center'
    res.innerHTML = `Tamanho: <strong>${msg}</strong> - Link do ${link}` 
    res.appendChild(img)
    }
}