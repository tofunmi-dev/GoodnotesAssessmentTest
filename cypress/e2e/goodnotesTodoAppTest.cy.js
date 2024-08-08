/// <reference types= "cypress" />

describe("This test is to validate add and delete scenarios into the quales app", () => {
    it("Verify user can add todo tasks successfully on the todo website", () => {
        cy.visit("https://qa-challenge-to-do-app.vercel.app/");
        cy.get('.Searchbar_container__XovFl').type("Tofunmi{Enter}")
        cy.get('.flex-1').should("be.visible")
        cy.contains("Tofunmi")

    });
    it("Verify that when users checks off a task it is visible on the completed tab", () => {
        cy.visit("https://qa-challenge-to-do-app.vercel.app/");
        cy.get('.Searchbar_container__XovFl').type("Tofunmi{Enter}")
        cy.get('.flex-1').should("be.visible")
        cy.get('.ToDoItem_checkButton__2_9ec').click()
        cy.get('.flex-1').should("be.visible")
        cy.get('.FilterBar_container__34jnd > :nth-child(2)').click()
        cy.get('.active').click()
        cy.get('.flex-1').should("be.visible")
    });
    it("Verify that users can delete completed tasks successfully by clicking the clear completed button", () => {
        cy.visit("https://qa-challenge-to-do-app.vercel.app/");
        cy.get('.Searchbar_container__XovFl').type("Tofunmi{Enter}")
        cy.get('.Searchbar_container__XovFl').type("Tofunmi 2{Enter}")
        cy.get('.flex-1').should("be.visible")
        cy.get(':nth-child(1) > .flex > .flex-1').should("be.visible")
        cy.get(':nth-child(2) > .flex > .ToDoItem_checkButton__2_9ec').click()
        cy.get('.ToDoItems_clearButton__1rBzr').click()
            .should('have.length', 1)
            .last()

    });
    it("Verify that users check off a task on the todo list, the checked off task is not visible on the active page", () => {
        cy.visit("https://qa-challenge-to-do-app.vercel.app/");
        cy.get('.Searchbar_container__XovFl').type("Tofunmi{Enter}")
        cy.get('.flex-1').should("be.visible")
        cy.get('.ToDoItem_checkButton__2_9ec').click()
        cy.get('.flex-1').should("be.visible")
        cy.get('.FilterBar_container__34jnd > :nth-child(2)').click()
        cy.get('.flex-1').should("not.be.visible")
    });
});

//ToDoItem_deleteButton_2Obwj > svg > path
