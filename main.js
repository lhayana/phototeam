 function enviado() {
    let email= document.getElementById('email')
     console.log(email.value)
    let nome = document.getElementById('nome')
     console.log(nome.value)
    let msg = document.getElementById('msg')
     console.log(msg.value)

     if (nome.value & email.value | msg.value !== '') {
         alert("Obrigado " + nome.value + ". \nSua mensagem foi enviada!");
     }
     if (nome.value | email.value | msg.value === '') {
         alert("Preencha todos os campos.");
     }
    }