const buttons = document.querySelectorAll('.button')

const body = document.querySelector("body")

buttons.forEach(function(button){
    
    button.addEventListener('click' ,function(e){
        console.log(e)
          console.log(e.target)
          if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
              const h1 = document.querySelector('h1');
              const h2 = document.querySelector('h3');
              h1.style.color = "white"
              h2.style.color = "white"
          }
          if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
              const h1 = document.querySelector('h1');
              const h2 = document.querySelector('h3');
              h1.style.color = "red"
              h2.style.color = "red"
          }
          if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
              const h1 = document.querySelector('h1');
              const h2 = document.querySelector('h3');
              h1.style.color = "white"
              h2.style.color = "white"
          }
          if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
              const h1 = document.querySelector('h1');
              const h2 = document.querySelector('h3');
              h1.style.color = "blue"
              h2.style.color = "blue"
          }
          if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id;
              const h1 = document.querySelector('h1');
              const h2 = document.querySelector('h3');
              h1.style.color = "white"
              h2.style.color = "white"
          }
          if(e.target.id === 'pink'){
            body.style.backgroundColor = e.target.id;
              const h1 = document.querySelector('h1');
              const h2 = document.querySelector('h3');
              h1.style.color = "black"
              h2.style.color = "black"
          }

    })
    
})