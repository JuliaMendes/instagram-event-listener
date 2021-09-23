window.addEventListener('load', () => {

    let btnCadastrase = document.querySelector('.form-auth button');
    let form = document.querySelector('.form-auth');
    let inputPassword = document.getElementsByName('password')[0];

    let birthdate = document.createElement('input');
    birthdate.setAttribute('type', 'date');
    birthdate.setAttribute('name', 'birth');
    birthdate.setAttribute('placeholder', 'Data de Nascimento');
    form.insertBefore(birthdate, inputPassword)


    btnCadastrase.onclick = (evento) => {
        evento.preventDefault()

        let inputEmail = document.getElementsByName('email')[0];
        let inputName = document.getElementsByName('name')[0];
        let inputSurname = document.getElementsByName('surname')[0];
        let inputUsername = document.getElementsByName('username')[0];
        let inputPassword = document.getElementsByName('password')[0];
        let inputBirthDate = document.getElementsByName('birth')[0];


        let temErro = false;


        anoNascimento = parseInt(inputBirthDate.value.split('-')[0])
        let anoAtual = new Date().getFullYear();
        let idadeTotal = anoAtual - anoNascimento


        if (!inputEmail.value.includes('@') || !inputEmail.value.includes('.')) {
            let listaUl = document.createElement('ul');
            listaUl.innerHTML = 'O campo Email deve conter os caracteres "@" e "."';
            form.insertBefore(listaUl, inputName)
            temErro = true;
        }

        if (inputEmail.value.length < 10 || inputEmail.value.length > 180) {
            let listaUl = document.createElement('ul');
            listaUl.innerHTML = 'O campo Email deve conter de 10 a 180 caracteres.';
            form.insertBefore(listaUl, inputName)
            temErro = true;
        }

        if (inputName.value.length < 2 || inputName.value.length > 80) {
            let listaUl = document.createElement('ul');
            listaUl.innerHTML = 'O campo Nome deve conter de 2 a 80 caracteres.';
            form.insertBefore(listaUl, inputSurname)
            temErro = true;
        }

        if (inputSurname.value.length < 2 || inputSurname.value.length > 100) {
            let listaUl = document.createElement('ul');
            listaUl.innerHTML = 'O campo Sobrenome deve conter de 2 a 100 caracteres.';
            form.insertBefore(listaUl, inputUsername)
            temErro = true;
        }

        if (inputUsername.value.length < 10 || inputUsername.value.length > 15) {
            let listaUl = document.createElement('ul');
            listaUl.innerHTML = 'O campo Nome de Usuário deve conter de 10 a 15 caracteres.';
            form.insertBefore(listaUl, inputBirthDate)
            temErro = true;
        }

        if (inputPassword.value.length < 8 || inputPassword.value.length > 100) {
            let listaUl = document.createElement('ul');
            listaUl.innerHTML = 'O campo Senha deve conter de 8 a 100 caracteres.';
            form.insertBefore(listaUl, inputBirthDate)
            temErro = true;
        }

        if (inputBirthDate.value.length == "" || (idadeTotal < 16 || idadeTotal > 120)) {
            let listaUl = document.createElement('ul');
            listaUl.innerHTML = 'Preencha o campo Data de Nascimento corretamente.';
            form.insertBefore(listaUl, btnCadastrase)
            temErro = true;
        }

        if (!temErro) {
            form.submit();
        }
    }
})