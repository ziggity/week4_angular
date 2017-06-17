import { browser, by, element } from 'protractor';

export class L33T C0D3 B00k CLUBPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
