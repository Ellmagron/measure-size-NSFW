function analisar(){
    var size = document.querySelector('input#medida')
    var res = document.querySelector('div#res')
    

    if(size.value.length == 0){
        alert('Digite uma meida!!')
    }else{
      var service = document.getElementsByName('fan')
      var msg = ''
      var img = document.createElement('img')
      img.setAttribute('id','foto')

      if(service[0].checked){ //

        if( size.value == 'A' || size.value == 'a'){
            //Seio Tamanho pequeno
            msg = 'Pequeno'
            img.setAttribute('src','img/bob-small.png')

        } else if (size.value == 'D'|| size.value =='d'){
            //Seio Tamanho medio
            msg = 'Medio'
            img.setAttribute('src','img/bob-medium.png')

        }else if (size.value == 'G'|| size.value == 'g'){
            //Seio Tamanho Grande
            msg = 'Grande'
            img.setAttribute('src','img/bob-huge.png')
        }
      } else if(service[1].checked)
      
      if(size.value == 'A' || size.value == 'a'){
            //Ass Tamanho pequeno
            msg = 'Pequeno'
            img.setAttribute('src','img/ass-small.png')

      }else if(size.value == 'D' || size.value == 'd'){
            //Ass Tamanho medio
            msg = 'Medio'
            img.setAttribute('src','img/ass-medium.png')

      }else if( size.value == 'G'|| size.value == 'g'){
            //Ass Tamanho Grande
            msg = 'Grande'
            img.setAttribute('src','img/ass-huge.png')
      }
    res.style.textAlign = 'center'
    res.innerHTML = `Tamanho: <strong>${msg}</strong>` 
    res.appendChild(img)
    }
}