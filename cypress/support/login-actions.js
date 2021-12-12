Cypress.Commands.add("openStore", (searchText) => {
    cy.get(".FirstSection-checkYourAddressButton").click();

    cy.get("input.MuiOutlinedInput-input")
        .type(searchText || Cypress.env("address"));

    cy.get(".SearchResults-item").as("searchResults");
    cy.get("@searchResults").eq(0).click();
});

//TODO: add login by api
Cypress.Commands.add("loginByUI", (user) => {
    cy.openStore()

    cy.get(".AccountButton-label").click();
    cy.get("input[type=email]").type(user.username)
    cy.get("input[type=password]").type(user.password)
    cy.get("button.SignInForm-signInButton").click();
});