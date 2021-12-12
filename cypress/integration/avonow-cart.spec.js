/// <reference types="cypress" />
import { TEST_ } from "./test-base";

context(TEST_("AvoNow Cart"), () => {
  const CART_BADGE = ".MuiBadge-badge";
  const SHOPPING_CART_BUTTON = "#shopping-cart-button";
  const CART_ITEM = ".CartTableProduct-row";
  const CART_ITEM_PLUS = ".DirtyButton-plusButton";
  const CART_ITEM_PRICE_TOTAL = ".CartTableProduct-total";
  const CART_ITEM_COUNT = ".DirtyButton-countButton";

  it("validate cart badge", () => {
    const itemsNumber = 3;

    cy.openStore()

    cy.addItemsToCart("Frozen", itemsNumber)

    cy.get(CART_BADGE).should("have.text", itemsNumber)
  });

  it("validate cart items", () => {
    const itemsNumber = 2;

    cy.openStore()

    cy.addItemsToCart("Frozen", itemsNumber)

    cy.get(SHOPPING_CART_BUTTON).click()

    cy.get(CART_ITEM).should("have.length", itemsNumber);
  });

  it("increase item amount in cart", () => {
    const itemsNumber = 1;
    let origPrice;
    let newPrice;

    cy.openStore()

    cy.addItemsToCart("Frozen", itemsNumber)

    cy.get(SHOPPING_CART_BUTTON).click()

    cy.get(CART_ITEM_PRICE_TOTAL).then((el) => {
      origPrice = parseFloat(el.text().replace("$", ""));

      cy.get(CART_ITEM).find(CART_ITEM_PLUS).click()

      cy.get(CART_ITEM_PRICE_TOTAL).then((el) => {
        newPrice = parseFloat(el.text().replace("$", ""));

        expect(newPrice).to.equal(origPrice * 2);

        // cy.get(CART_ITEM_COUNT).should("have.text", "2")
      });
    });
  });
});
