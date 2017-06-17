import { L33T C0D3 B00k CLUBPage } from './app.po';

describe('L33T C0D3 B00k CLUB App', () => {
  let page: L33T C0D3 B00k CLUBPage;

  beforeEach(() => {
    page = new L33T C0D3 B00k CLUBPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
