describe("Opportunity", () => {

  Cypress.on("uncaught:exception", () => {
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
  });

  it("Adding new customer", () => {
    cy.get(".hp-float-right > .ant-btn").click();
    cy.get(":nth-child(3) > .ant-btn").click().wait(1000);
    cy.get("#basic_series").click();
    cy.get("div[title='New1']").click();
    cy.get("#basic_customerName").type("Naveen");
    cy.get("#basic_customerGroup").click();
    cy.get(
      "div[title='Customers'] div[class='ant-select-item-option-content']"
    ).click();
    cy.xpath("(//input[@id='basic_currency'])[2]").click();
    cy.get(
      "div[title='INR'] div[class='ant-select-item-option-content']"
    ).click();
    cy.xpath("(//input[@id='basic_email'])[2]").type("abcd@gmail.com");
    cy.xpath("(//input[@id='basic_phone'])[2]").type("1234567890");
    cy.get("#basic_salesemployee").click();
    cy.get(
      "div[title='-No Sales Employee-'] div[class='ant-select-item-option-content']"
    ).click();
    cy.get("#basic_industry").click();
    cy.get(
      "div[title='AMC'] div[class='ant-select-item-option-content']"
    ).click();
    cy.get("#firstName").type("Naveen");
    cy.get("#lastName").type("kumar");
    cy.get("#position").type("Manager");
    cy.get("#email").type("xyz@gmail.com");
    cy.get("#mobile").type("0987654321");
    cy.get(':nth-child(6) > .ant-space > [style=""] > .ant-btn > span').click();
    cy.get("#rc-tabs-3-tab-2").click();
    cy.xpath("(//div[@class='ant-select-selector'])[13]").click();
    cy.get(
      "div[title='Both'] div[class='ant-select-item-option-content']"
    ).click();
    cy.get("#name").type("Naveen");
    cy.get("#street").type("5th street");
    cy.get("#block").type("A");
    cy.get("#city").type("Chennai");
    cy.get("#zipcode").type("600097");
    cy.get("#country").type("India");
    cy.get(
      "div[title='India'] div[class='ant-select-item-option-content']"
    ).click();
    cy.get("#state").type("Tamil nadu");
    cy.get(
      "div[title='Tamil Nadu'] div[class='ant-select-item-option-content']"
    ).click();
    cy.xpath("//span[normalize-space()='Add Address']").click();
    cy.get(".ant-row > :nth-child(1) > .ant-btn > span").click().wait(1000);
    cy.get(".ant-modal-confirm-content").contains("Customer added succesfully");
    cy.get(".ant-modal-confirm-btns > .ant-btn > span").click();
  });

  it("After clicking exiting customer, customers should list in dropdown page", () => {
    cy.get(".hp-float-right > .ant-btn").click();
    cy.get(".ant-switch").click();
    cy.get("#basic_customerCode").click();
    cy.get(
      "div[title='Naveen - CUS0035'] div[class='ant-select-item-option-content']"
    )
      .scrollIntoView({ duration: 3000 })
      .click();
  });

  it("Create an opportunity for existing customer", () => {
    cy.get(".hp-float-right > .ant-btn").click(); //new opportunity
    cy.get(".ant-switch").click(); //existing opportunity
    cy.get("#basic_customerCode").click(); //customer list
    cy.get("div[title='Naveen - CUS0054']") //selecting customer
      .scrollIntoView({ duration: 3000 })
      .click()
      .wait(1000);
    cy.get("input[placeholder='Designation']").type("Manager"); //designation
    cy.xpath("//a[normalize-space()='Show Additional Info']").click(); //show additional info
    cy.get("input[placeholder='Email']").type("xyz@gmail.com"); //additional email
    cy.get("input[placeholder='Phone']").type("9999999999"); //additional phone
    cy.get("#basic_country").click().type("India"); //country list
    cy.get(
      "div[title='India'] div[class='ant-select-item-option-content']" //selecting country
    ).click();
    cy.get("#basic_state").click().type("Tamil Nadu"); //state list
    cy.get(
      "div[title='Tamil Nadu'] div[class='ant-select-item-option-content']" //selecting state
    ).click();
    cy.get("input[placeholder='City']").type("Chennai"); //city
    cy.get("input[placeholder='Opportunity Description']").type("Bulk vending"); //opportunity description
    cy.xpath("(//div)[196]").click(); //start date
    cy.xpath("(//div[contains(text(),'10')])[19]").click(); //picking date
    cy.xpath("(//div)[206]").click().type("2023-02-24, {enter}"); //end date
    cy.get("#basic_sourceCode").click(); //source list
    cy.get(
      "div[title='Reference'] div[class='ant-select-item-option-content']" //selecting source
    ).click();
    cy.get("#basic_qualification").click(); //qualification
    cy.get(
      "div[title='Hot'] div[class='ant-select-item-option-content']" //selecting qualification
    ).click();
    cy.get("#basic_stageCode").click(); //opportunity stage
    cy.get(
      "div[title='Solution Designed'] div[class='ant-select-item-option-content']" //selecting opportunity stage
    ).click();
    cy.get("#basic_empRespCode").type("srikanth"); //employee responsible
    cy.get(
      "div[title='Srikanth'] div[class='ant-select-item-option-content']" //selecting employee
    ).click();
    cy.xpath("(//div[@class='ant-select-selector'])[8]").click();
    cy.get(
      "div[title='Distribution'] div[class='ant-select-item-option-content']"
    ).click();
    cy.get("input[placeholder='Opportunity Value']").type("1000000");
    cy.get("#basic_currency").click();
    cy.get(
      "div[title='INR'] div[class='ant-select-item-option-content']"
    ).click();
    cy.xpath("(//div[@class='ant-picker'])[3]").type("2023-03-01, {enter}");
    cy.get("input[placeholder='Followup Comments']")
      .type("Can connect on that follow up date")
      .wait(1000);
    cy.xpath(
      "//button[@class='ant-btn ant-btn-primary hp-bg-success-1 hp-border-color-success-1']"
    ).click();
    cy.get(".ant-modal-confirm-title").contains("Added Successfully");
    cy.get(".ant-modal-confirm-btns > .ant-btn").click();
  });

  it("Create an opportunity for new customer", () => {
    cy.get(".hp-float-right > .ant-btn").click();
    cy.get("#basic_companyName").type("Hire & Rent");
    cy.get("#basic_contactPerson").type("Naveen");
    cy.get("#basic_designation").type("Manager");
    cy.get("#basic_email").type("hire@gmail.com");
    cy.get("#basic_phone").type("6590329201");
    cy.xpath("//a[normalize-space()='Show Additional Info']").click(); //additional info
    cy.get("#basic_email1").type("gk@gmail.com");
    cy.get("#basic_phone1").type("9753028792");
    cy.get("#basic_country").click().type("India");
    cy.get(
      "div[title='India'] div[class='ant-select-item-option-content']"
    ).click();
    cy.get("#basic_state").click().type("Tamil Nadu");
    cy.get(
      "div[title='Tamil Nadu'] div[class='ant-select-item-option-content']"
    ).click();
    cy.get("#basic_city").type("Chennai");
    cy.get("#basic_opprName").type("Rental service");
    cy.xpath("(//div[@class='ant-picker'])[1]")
      .click()
      .type("2023-02-13, {enter}");
    cy.xpath("(//input[@id='basic_endDate'])[1]")
      .click()
      .type("2023-02-28, {enter}");
    cy.get("#basic_sourceCode").click();
    cy.get(
      "div[title='Reference'] div[class='ant-select-item-option-content']"
    ).click();
    cy.get("#basic_qualification").click();
    cy.get(
      "div[title='Hot'] div[class='ant-select-item-option-content']"
    ).click();
    cy.get("#basic_stageCode").click();
    cy.xpath("//div[contains(text(),'Opportunity Identified')]").click();
    cy.get("span[title='10%']").contains("10%");
    cy.get("#basic_empRespCode").type("vikram");
    cy.get(
      "div[title='Vikram.M'] div[class='ant-select-item-option-content']"
    ).click();
    cy.get("#basic_verticalCode").click();
    cy.get(
      "div[title='Distribution'] div[class='ant-select-item-option-content']"
    ).click();
    cy.get("#basic_opprValue").type("500000");
    cy.get("#basic_currency").click();
    cy.get(
      "div[title='INR'] div[class='ant-select-item-option-content']"
    ).click();
    cy.xpath("(//div[@class='ant-picker'])[3]").type("2023-03-02, {enter}");
    cy.get("#basic_comments").type("Online meeting can be possible").wait(1000);
    cy.xpath(
      "//button[@class='ant-btn ant-btn-primary hp-bg-success-1 hp-border-color-success-1']"
    ).click();
    cy.get(".ant-modal-confirm-title").contains("Added Successfully");
    cy.get(".ant-modal-confirm-btns > .ant-btn").click();
  });

  it("Create a quick followup from opportunity list", () => {
    cy.get("li[title='2'] a[rel='nofollow']").click();
    cy.xpath("(//button[@type='button'])[12]").click();
    cy.xpath("//a[normalize-space()='Quick Followup']").click();
    cy.get("#FollowUpDate").click();
    cy.get("td[title='2023-02-28'] div[class='ant-picker-cell-inner']").click();
    cy.get("#Comments").click().type("Can connect virtually");
    cy.get(
      "button[class='ant-btn ant-btn-primary ant-btn-block hp-bg-success-1 hp-border-color-success-1']"
    )
      .click()
      .wait(1000);
    cy.get(".ant-modal-confirm-title").contains("Updated Successfully");
    cy.get(".ant-modal-confirm-btns > .ant-btn").click();
  });

  it("Verify that while posting the documents & special charaters in comments whether it is accepting the data.", () => {
    cy.get("li[title='2'] a[rel='nofollow']").click();
    cy.get("a[href='/NewOpportunity?id=40044']").click();
    cy.get("#basic_comments")
      .click()
      .type("#please refer to document attached @Attachments");
    cy.xpath("(//div[@class='ant-tabs-tab'])[1]").click();
    cy.fixture("Screenshot-(5).png").then((fileContent) => {
      cy.get("button[class='ant-btn ant-btn-primary']").attachFile({
        fileContent: fileContent,
        fileName: "Screenshot-(5).png",
        mimeType: "image/png",
      });
    });
  });

  it("Validate the export option is correctly exported in excel format", () => {
    cy.get("button[class='ant-btn ant-btn-primary']").click();
  });

  it("For existing customer, validate if contact person, designation, email and phone number is auto fetching", () => {
    cy.get(
      "button[class='ant-btn ant-btn-default hp-text-color-primary-1 hp-bg-dark-primary-1 hp-border-color-dark-primary-1 hp-text-color-dark-0']"
    ).click();
    cy.get("button[role='switch']").click();
    cy.get("#basic_customerCode").click().type("naveen");
    cy.get(
      "div[title='Naveen - CUS0055'] div[class='ant-select-item-option-content']"
    ).click();
    cy.get("#basic_contactPerson")
      .scrollIntoView()
      .should("have.value", "Naveen kumar");
    cy.get("#basic_designation").should("have.value", "");
    cy.get("#basic_email").should("have.value", "abcd@gmail.com");
    cy.get("#basic_phone").should("have.value", "1234567890");
  });

  it("Verify after adding the task added showing correctly", () => {
    cy.get("li[title='2'] a[rel='nofollow']").click(); //pagination
    cy.xpath("(//button[@type='button'])[16]").click(); //menu options
    cy.xpath("//a[normalize-space()='Create Task']").click(); //create task
    cy.xpath("(//div[contains(@class,'ant-select-selector')])[5]").click(); //assignee
    cy.get(
      "div[title='manager user'] div[class='ant-select-item-option-content']"
    ).click();
    cy.get("#basic_dueDate").click().type("2023-02-28, {enter}");
    cy.get("#basic_status").click();
    cy.get(
      "div[title='Open'] div[class='ant-select-item-option-content']"
    ).click();
    cy.get("#basic_priority").click();
    cy.get(
      "div[title='Low'] div[class='ant-select-item-option-content']"
    ).click();
    cy.get("#basic_description").click().type("Task 1");
    cy.get("#basic_completed").check();
    cy.get(
      ".ant-btn.ant-btn-primary.ant-btn-block.hp-bg-success-1.hp-border-color-success-1"
    ).click();
    cy.get(".ant-modal-confirm-content").contains("Task added");
    cy.get(".ant-modal-confirm-btns > .ant-btn").click();
    cy.get("a[href='/NewOpportunity?id=40045']").click();
    cy.xpath("(//div[@class='ant-tabs-tab'])[2]").scrollIntoView().click();
  });

  it("Adding 10 tasks and validate the documents whether showing all the data", () => {
    cy.fixture("addTasksData").then((fixtureData) => {
      fixtureData.map((eachTaskData) => {
        cy.get("li[title='2'] a[rel='nofollow']").click(); //pagination
        cy.xpath("(//button[@type='button'])[16]").click(); //menu options
        cy.xpath("//a[normalize-space()='Create Task']").click(); //create task
        cy.xpath("(//div[contains(@class,'ant-select-selector')])[5]").click(); //assignee
        cy.get(
          "div[title='manager user'] div[class='ant-select-item-option-content']"
        ).click();
        cy.get("#basic_dueDate").click().type(eachTaskData.date);
        cy.get("#basic_status").click();
        cy.get(
          "div[title='Open'] div[class='ant-select-item-option-content']"
        ).click();
        cy.get("#basic_priority").click();
        cy.get(
          "div[title='Low'] div[class='ant-select-item-option-content']"
        ).click();
        cy.get("#basic_description").click().type(eachTaskData.description);
        cy.get("#basic_completed").check();
        cy.get(
          ".ant-btn.ant-btn-primary.ant-btn-block.hp-bg-success-1.hp-border-color-success-1"
        ).click();
        cy.get(".ant-modal-confirm-content").contains("Task added");
        cy.get(".ant-modal-confirm-btns > .ant-btn").click();
      });
      cy.get("a[href='/NewOpportunity?id=40045']").click();
      cy.xpath("(//div[@class='ant-tabs-tab'])[2]")
        .scrollIntoView()
        .click()
        .wait(1000);
      cy.xpath("(//a[normalize-space()='2'])[1]").click().wait(1000);
    });
  });

  it("After adding the opportunity, editing and update process need to be checked", () => {
    cy.get("li[title='2'] a[rel='nofollow']").click();
    cy.get("a[href='/NewOpportunity?id=40045']").click();
    cy.get("#basic_startDate").click().type("2023-02-22, {enter}");
    cy.get("#basic_endDate").click().type("2023-03-31, {enter}");
    cy.get(
      "button[class='ant-btn ant-btn-primary hp-bg-success-1 hp-border-color-success-1']"
    ).click();
    cy.get(".ant-modal-confirm-title").contains("Updated Successfully.");
    cy.get("button[class='ant-btn ant-btn-primary'] span").click();
  });

  it("Validate by giving fromDate and toDate in advance filters and check whether it brings date range correctly", () => {
    cy.get("#fromDate").click().clear().type("2023-02-28,{enter}");
    cy.get("#toDate").click().clear().type("2023-03-31,{enter}").wait(1000);
    cy.get(".ant-pagination-item-2 > a").click();
  });

  it("Verify by giving followup date and validate the advance filters options", () => {
    cy.get(".ant-btn-link").click();
    cy.get("div[class='ant-col'] button[type='button']").click();
    cy.get(
      "div[class='ant-col ant-col-8'] div[class='ant-select-selector']"
    ).click();
    cy.get(
      "div[title='Followup Date'] div[class='ant-select-item-option-content']"
    )
      .scrollIntoView() //scroll not working
      .click();
    cy.get("#rc_select_8").click();
    cy.get(
      "div[title='>'] div[class='ant-select-item-option-content']"
    ).click();
    cy.get("input[placeholder='Value']")
      .click()
      .type("2023-02-28,{enter}")
      .wait(1000);
    cy.xpath("(//button[@type='button'])[32]").click();
  });

});
