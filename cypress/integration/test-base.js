export function TEST_(suiteName) {
    return `${Cypress.browser.name}_${suiteName}`;
}

beforeEach(() => {
    cy.viewport(1920, 1080)
    cy.visit("/");
});

afterEach(function () {
    const testTitle = this.currentTest?.title;

    if (this.currentTest?.isPassed() != true) {
        console.error("Test failed!!!");
    } else {
        console.info("Test passed! 😀");
    }
});
