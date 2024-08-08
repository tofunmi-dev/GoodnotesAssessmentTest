/// <reference types= "cypress" />

describe("This test is to validate the ddd notes functions present on the To do app website", () => {
    it("Verify that user add todo tasks on the To do app website", () => {
        //cypress visits page url
        cy.visit("https://qa-challenge-to-do-app.vercel.app/");
        cy.get('Text field').click().type("Tod list{Enter}");
        cy.contains('Text added').should("be.visible")

    });
    it("Verify that user can delete the todo tasks successfully", () => {
        //cypress visits url
        cy.visit("https://qa-challenge-to-do-app.vercel.app/);
        cy.get('Text field').click().type("Tod list{Enter}");
        cy.contains('Text added').should("be.visible")
        cy.get('locator for "X" button').click();
        cy.contains('Text added').should("not.be.visible")
    })

});
it("Verify that when users can change the theme when they click on the theme button", () => {
    //cypress visits url
    cy.visit("https://qa-challenge-to-do-app.vercel.app/);
    cy.get('theme button').click()
    cy.contains('Text added').should("not.be.visible")
    
})