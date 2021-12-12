/// <reference types="cypress" />
import { TEST_ } from "./test-base";

context(TEST_("AvoNow Login"), () => {
  const SIGN_IN_ERROR = ".SignInForm-error";
  const PROMOTION_BANNER = ".PromotionBanner-mainContainer";

  it("Open a store", () => {
    cy.openStore("microsoft")

    cy.get(PROMOTION_BANNER).should("exist")
  });

  it("Invalid user login", () => {
    cy.fixture("invalid-user").as("invalidUser").then((user) => {
      cy.loginByUI(user)

      cy.get(SIGN_IN_ERROR).should("have.text", Cypress.env("signInErrorMessage"))
    });
  });
});
