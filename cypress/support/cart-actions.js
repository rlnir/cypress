//TODO: add add to cart by api
Cypress.Commands.add("addItemsToCart", (category, numberOfItems) => {
    cy.get(".Category-name").each((el) => {
        if (el.text() === category) {
            cy.wrap(el).click()
            return;
        }
    });

    cy.get(".Product-addToCartContainer button").each((el, i) => {
        if (i < numberOfItems) {
            cy.wrap(el).scrollIntoView().click();
            cy.wait(100)
        }
    })
});