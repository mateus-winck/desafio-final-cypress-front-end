import LoginElements from "./Elements/LoginElements"

export default new class LoginPage {
  acessarPaginaDeLogin() {
    cy.visit('/')
  }
  realizarLoginValido() {
    cy.get(LoginElements.iptUsername()).type(Cypress.env('username'))
    cy.get(LoginElements.iptPassword()).type(Cypress.env('password'))
    cy.get(LoginElements.Button()).click()
  }
  verificarPaginaPosLogin() {
    cy.url().should('contain', '/inventory.html')
  }
  realizarLoginInvalido(Username, Password) {
    cy.get(LoginElements.iptUsername()).type(Username)
    cy.get(LoginElements.iptPassword()).type(Password)
    cy.get(LoginElements.BtnLogin()).click()
  }
  vizualizarMensagemErro(mensagem) {
    cy.get(LoginElements.errorMessage()).should('be.visible').should('contain', mensagem)
  }
}
