import LoginPage from '../pages/LoginPage'

Given(/^que acesso a página de Login$/, () => {
  LoginPage.acessarPaginaDeLogin()
})


When(/^informo credenciais válidas$/, () => {
	LoginPage.realizarLoginValido()
})

Then(/^devo ser direcionado para a página de produtos$/, () => {
	LoginPage.verificarPaginaPosLogin()
})


When(/^informo credenciais inválidas$/, (datatable) => {
	datatable.hashes().forEach(element => {
    LoginPage.realizarLoginInvalido(element.Username, element.Password)
  })
})



Then(/^devo visualizar a mensagem "([^"]*)"$/, (mensagem) => {
	console.log(mensagem);
	LoginPage.vizualizarMensagemErro(mensagem)
});

