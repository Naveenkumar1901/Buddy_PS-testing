describe("Opportunity", () => {

  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    cy.visit("https://pstest.avaniko.com/login");
    cy.get("#basic_userName").type("Manager");
    cy.get("#basic_password").type("Avan!12345");
    cy.get("button[type='submit']").click().wait(1000);
    cy.get(".hp-mr-24").click();
    cy.get(
      ".ant-drawer-body > .ant-menu > :nth-child(5) > .ant-menu-submenu-title > .ant-menu-title-content"
    ).click();
    cy.get("a[href='/opportunity']").click().wait(1000); 
  })

  it("Adding New Customer", () => {
    cy.get(".hp-float-right > .ant-btn").click();
    cy.get(':nth-child(3) > .ant-btn').click().wait(1000);
    cy.get('#basic_series').click();
    cy.get("div[title='New1']").click();
    cy.get('#basic_customerName').type("Naveen");
    cy.get('#basic_customerGroup').click();
    cy.get("div[title='Customers'] div[class='ant-select-item-option-content']").click();
    cy.xpath("(//input[@id='basic_currency'])[2]").click();
    cy.get("div[title='INR'] div[class='ant-select-item-option-content']").click();
    cy.xpath("(//input[@id='basic_email'])[2]").type("abcd@gmail.com");
    cy.xpath("(//input[@id='basic_phone'])[2]").type("1234567890");
    cy.get("#basic_salesemployee").click();
    cy.get("div[title='-No Sales Employee-'] div[class='ant-select-item-option-content']").click();
    cy.get("#basic_industry").click();
    cy.get("div[title='AMC'] div[class='ant-select-item-option-content']").click();
    cy.get('#firstName').type("Naveen");
    cy.get('#lastName').type("kumar");
    cy.get('#position').type("Manager");
    cy.get('#email').type("xyz@gmail.com");
    cy.get('#mobile').type("0987654321");
    cy.get(':nth-child(6) > .ant-space > [style=""] > .ant-btn > span').click();
    cy.get('#rc-tabs-3-tab-2').click();
    cy.xpath("(//div[@class='ant-select-selector'])[13]").click();
    cy.get("div[title='Both'] div[class='ant-select-item-option-content']").click();
    cy.get('#name').type("Naveen");
    cy.get('#street').type("5th street");
    cy.get('#block').type("A");
    cy.get('#city').type("Chennai");
    cy.get('#zipcode').type("600097");
    cy.get("#country").type("India");
    cy.get("div[title='India'] div[class='ant-select-item-option-content']").click();
    cy.get('#state').type("Tamil nadu");
    cy.get("div[title='Tamil Nadu'] div[class='ant-select-item-option-content']").click();
    cy.xpath("//span[normalize-space()='Add Address']").click();
    cy.get('.ant-row > :nth-child(1) > .ant-btn > span').click().wait(1000);
    cy.get('.ant-modal-confirm-content').contains("Customer added succesfully");
    cy.get('.ant-modal-confirm-btns > .ant-btn > span').click();
  })

  it("After Clicking Exiting Customer, Customers should List in dropdown Page", () => {
    cy.get(".hp-float-right > .ant-btn").click();
    cy.get(".ant-switch").click();
    cy.get("#basic_customerCode").click();
    cy.get(
    "div[title='Naveen - CUS0035'] div[class='ant-select-item-option-content']"
    ).scrollIntoView({ duration: 3000 }).click();
  });

  it("Create an opportunity for existing customer", () => {
    cy.get(".hp-float-right > .ant-btn").click();
    cy.get(".ant-switch").click();
    cy.get("#basic_customerCode").click();
    cy.get(
    "div[title='Naveen - CUS0054']"
    ).scrollIntoView({ duration: 3000 }).click().wait(1000);
    cy.get("#basic_designation").type("Manager");
    cy.xpath("//a[normalize-space()='Show Additional Info']").click();
    cy.get("#basic_email1").type("xyz@gmail.com");
    cy.get("#basic_phone1").type("9999999999");
    cy.get("#basic_country").click().type("India");
    cy.get("div[title='India'] div[class='ant-select-item-option-content']").click();
    cy.get("#basic_state").click().type("Tamil Nadu");
    cy.get("div[title='Tamil Nadu'] div[class='ant-select-item-option-content']").click();
    cy.get("#basic_city").type("Chennai");
    cy.get("#basic_opprName").type("Bulk vending");
    cy.xpath("(//div)[196]").click();
    cy.xpath("(//div[contains(text(),'10')])[19]").click();
    cy.xpath("(//div)[206]").click().type("2023-02-24, {enter}")
    cy.get("#basic_sourceCode").click();
    cy.get("div[title='Reference'] div[class='ant-select-item-option-content']").click();
    cy.get("#basic_qualification").click();
    cy.get("div[title='Hot'] div[class='ant-select-item-option-content']").click();
    cy.get("#basic_stageCode").click();
    cy.get("div[title='Solution Designed'] div[class='ant-select-item-option-content']").click();
    cy.get("#basic_empRespCode").type("srikanth")
    cy.get("div[title='Srikanth'] div[class='ant-select-item-option-content']").click();
    cy.xpath("(//div[@class='ant-select-selector'])[8]").click();
    cy.get("div[title='Distribution'] div[class='ant-select-item-option-content']").click();
    cy.get("#basic_opprValue").type("1000000");
    cy.get('#basic_currency').click();
    cy.get("div[title='INR'] div[class='ant-select-item-option-content']").click();
    cy.xpath("(//div[@class='ant-picker'])[3]").type("2023-03-01, {enter}");
    cy.get("#basic_comments").type("Can connect on that follow up date").wait(1000);
    cy.xpath("//button[@class='ant-btn ant-btn-primary hp-bg-success-1 hp-border-color-success-1']").click();
    cy.get('.ant-modal-confirm-title').contains("Added Successfully");
    cy.get('.ant-modal-confirm-btns > .ant-btn').click();
  })

});
