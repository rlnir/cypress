import "./login-actions";
import "./cart-actions";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
