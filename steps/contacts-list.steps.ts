import { binding, given, when, then, after } from 'cucumber-tsflow';
import { Builder, By, until } from 'selenium-webdriver';

@binding()
export class ContactsSteps {

  private driver: any;

  @when(/I open the app/)
  public async whenIOpenTheApp() : Promise<any> {
    //skip for now - the app is started manually
    this.driver = new Builder()
        .forBrowser('chrome')
        .build();
    this.driver.wait(until.elementLocated(By.tagName('h1')));
    await this.driver.get('http://localhost:8080');
  }

  @when(/The contacts should be displayed with the following properties/)
  public async theContacts(dataTable: any) : Promise<any> {
    const expectations = dataTable.hashes();
    //this.driver.findElements
    console.log('pending');
  }

  @after()
  public after() : void{
    this.driver.close();
  }
}
