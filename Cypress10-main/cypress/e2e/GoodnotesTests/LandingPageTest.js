/// <reference types= "cypress" />

describe("This test is to validate the functions present on the goodnotes website", () => {
    it("Verify that user can view the possible options on the goodnotes website", () => {
        //cypress visits page url
        cy.visit("https://www.goodnotes.com/");
        // user rejects cookies
        //     cy.get('#W0wltc > .QS5gu').click();
        //     //User clicks on the search field 
        //     cy.get('#APjFqb').click().type("the boys{enter}");
        //     cy.contains('The Boys').should("be.visible")


        // });
        // it("Verify that cookies option is displayed when user visits the google website", () => {
        //     //cypress visits google url
        //     cy.visit("https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjtwIPNjeiGAxU7bUEAHVFfApYQPAgJ");
        //     cy.get('.GZ7xNe').should("be.visible")
        //     cy.contains('We use cookies and data to').should("be.visible")
        //     // user rejects cookies
        //     // cy.get('#W0wltc > .QS5gu').click();
        //     // //User clicks on the search field 
        //     // cy.get('#APjFqb').click().type("the boys{enter}");
        //     // cy.contains('The Boys').should("be.visible")

        // });
        // it("Verify that user can reject cookies option is displayed when user visits the google website", () => {
        //     //cypress visits google url
        //     cy.visit("https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjtwIPNjeiGAxU7bUEAHVFfApYQPAgJ");
        //     cy.get('.GZ7xNe').should("be.visible")
        //     cy.contains('We use cookies and data to').should("be.visible")
        //     // user rejects cookies
        //     cy.get('#W0wltc > .QS5gu').click();
        //     cy.get('.lnXdpd').should("be.visible");
        //     // cypress adjust screen/device size
        //     //cy.viewport("macbook-16")


    });

});