describe("", () => {
  beforeEach(() => {
    cy.visit("https://pstest.avaniko.com/login");
    cy.get("#basic_userName").type("Manager");
    cy.get("#basic_password").type("Avan!12345");
    cy.get("button[type='submit']").click().wait(1000);
    cy.get(".hp-mr-24").click();
  });

  it.only("Verify the tasks showing correctly in tasks dialoug-box while user updating using edit option.", () => {
    cy.xpath("(//a[normalize-space()='Tasks'])[1]").click({ force: true });
    cy.get(
      ":nth-child(4) > .ant-list-item-action > :nth-child(1) > .hp-mt-8"
    ).click();
    cy.get("span[title='Open']").click();
    cy.get(
      "div[title='In Progress'] div[class='ant-select-item-option-content']"
    ).click();
    cy.get("span[title='Medium']").click();
    cy.get(
      "div[title='Low'] div[class='ant-select-item-option-content']"
    ).click();
    cy.get("#basic_description").clear().type("Task has been updated");
    cy.get("#basic_favourite").check();
    cy.get(
      "button[class='ant-btn ant-btn-primary ant-btn-block hp-bg-success-1 hp-border-color-success-1']"
    ).click();
    cy.get(".ant-modal-confirm-btns > .ant-btn").click();
  });
});
