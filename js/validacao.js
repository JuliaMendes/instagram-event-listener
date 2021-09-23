window.addEventListener('load', () => {

    let btnCadastrase = document.querySelector('.form-auth button');
    let form = document.querySelector('.form-auth');
    let inputPassword = document.getElementsByName('password')[0];

    let birthdate = document.createElement('input');
    birthdate.setAttribute('type', 'date');
    birthdate.setAttribute('name', 'birth');
    birthdate.setAttribute('placeholder', 'Data de Nascimento');
    form.insertBefore(birthdate, inputPassword)

    let listaUl = document.createElement('ul');
    form.insertBefore(listaUl, btnCadastrase)

    btnCadastrase.onclick = (evento) => {
        evento.preventDefault()

        let inputEmail = document.getElementsByName('email')[0];
        let inputName = document.getElementsByName('name')[0];
        let inputSurname = document.getElementsByName('surname')[0];
        let inputUsername = document.getElementsByName('username')[0];
        let inputPassword = document.getElementsByName('password')[0];
        let inputBirthDate = document.getElementsByName('birth')[0];

        let htmlErros = document.querySelector('ul.erros');

        htmlErros.innerHTML = "";
        let listaErros = [];


        if (!inputEmail.value.includes('@')) {
            listaErros.push('Preencha o campo email corretamente.');
        }

        if (inputName.value.length < 3) {
            listaErros.push('O campo Nome deve ter no mínimo 3 caracteres.');
        }

        if (inputSurname.value.length < 3) {
            listaErros.push('O campo Último Sobrenome deve ter no mínimo 3 caracteres.');
        }

        if (inputUsername.value.length < 3) {
            listaErros.push('O campo Nome de Usuário deve ter no mínimo 3 caracteres.');
        }

        if (inputPassword.value.length < 8) {
            listaErros.push('O campo Senha deve conter no mínimo 8 caracteres.');
        }

        if (inputBirthDate.value.length == '') {
            listaErros.push('Preencha o campo Data de Nascimento corretamente.');
        }

        if (listaErros.length > 0) {
            listaErros.forEach((mensagemErro) => {
                htmlErros.innerHTML += '<li style="color: red; text-align: left;">' + mensagemErro + '</li>'
            })

        } else {
            form.submit();
        }


    }
})