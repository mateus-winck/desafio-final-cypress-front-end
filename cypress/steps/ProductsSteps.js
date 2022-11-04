import ProductsPage from "../Pages/ProductsPage"

Given(/^que acesso a página de Produtos$/, () => {
	ProductsPage.acessarPaginaDeProdutos()
},

Given(/^adiciono ao carrinho os produtos que desejo comprar$/, () => {
	ProductsPage.adicionarProdutosAoCarrinho()
}),

Given(/^confirmo os produtos no carrinho$/, () => {
	ProductsPage.confirmarProdutos()
}),

Given(/^informo os dados para entrega do pedido$/, () => {
	ProductsPage.InformarDadosParaEntrega()
}),

When(/^finalizo a compra$/, () => {
	ProductsPage.FinalizarCompra()
}),

Then(/^devo visualizar mensagem indicando que a compra foi efetivada$/, () => {
	ProductsPage.VisualizarMensagemCompraEfetuada()
})
)
