export default new class ProductsElements {
    addToCart = (productname) => `[data-test="add-to-cart-sauce-labs-${productname}"]`
    ShoppingCartIcon = () => '[id="shopping_cart_container"]'
    ShoppingCartItemsQuantity = () => '[class="inventory_item_name"]'
    btnCheckout = () => '[data-test="checkout"]'
    iptFirstName = () => '[data-test="firstName"]'
    iptLastName = () => '[data-test="lastName"]'
    iptPostalCode = () => '[data-test="postalCode"]'
    btnContinueToPayment = () => '[data-test="continue"]'
    FirstCartItemName = () => '[id="item_4_title_link"]'
    SecondCartItemName = () => '[id="item_0_title_link"]'
    ThirdCartItemName = () => '[id="item_5_title_link"]'
    FourthCartItemName = () => '[id="item_2_title_link"]'
    SubtotalValue = () => '[class="summary_subtotal_label"]'
    TaxValue = () => '[class="summary_tax_label"]'
    TotalValue = () => '[class="summary_total_label"]'
    btnFinish = () => '[data-test="finish"]'
    ThankYouMessage = () => '[class="complete-header"]'
  }