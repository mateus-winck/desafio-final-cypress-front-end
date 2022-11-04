import ProductsElements from "./Elements/ProductsElements"
import ProductsFixture from "../fixtures/Products.json"

export default new class ProductsPage {

  acessarPaginaDeProdutos() {
    cy.Login()
  }

  adicionarProdutosAoCarrinho() {
    cy.get(ProductsElements.addToCart('backpack')).click()
    cy.get(ProductsElements.addToCart('bike-light')).click()
    cy.get(ProductsElements.addToCart('fleece-jacket')).click()
    cy.get(ProductsElements.addToCart('onesie')).click()
  }

  confirmarProdutos() {
    cy.get(ProductsElements.ShoppingCartIcon()).click()
    cy.get(ProductsElements.ShoppingCartItemsQuantity()).should('have.length', 4)
    cy.get(ProductsElements.FirstCartItemName()).should('have.text', ProductsFixture.Products[0].item_name)
    cy.get(ProductsElements.SecondCartItemName()).should('have.text', ProductsFixture.Products[1].item_name)
    cy.get(ProductsElements.ThirdCartItemName()).should('have.text', ProductsFixture.Products[2].item_name)
    cy.get(ProductsElements.FourthCartItemName()).should('have.text', ProductsFixture.Products[3].item_name)
    cy.get(ProductsElements.btnCheckout()).click()
  }

  InformarDadosParaEntrega() {
    cy.get(ProductsElements.iptFirstName()).type('Mateus')
    cy.get(ProductsElements.iptLastName()).type('Winck')
    cy.get(ProductsElements.iptPostalCode()).type('93548150')
    cy.get(ProductsElements.btnContinueToPayment()).click()
  }

  FinalizarCompra() {
    cy.get(ProductsElements.SubtotalValue()).should('contain', ProductsFixture.TotalItem)
    cy.get(ProductsElements.TaxValue()).should('contain', ProductsFixture.TotalTax)
    cy.get(ProductsElements.TotalValue()).should('contain', ProductsFixture.Total)
    cy.get(ProductsElements.btnFinish()).click()
  }

  VisualizarMensagemCompraEfetuada() {
    cy.get(ProductsElements.ThankYouMessage()).contains("THANK YOU FOR YOUR ORDER").should('be.visible')
  }
}
