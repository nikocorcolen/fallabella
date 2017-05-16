import { FalabellaPage } from './app.po';

describe('falabella App', () => {
  let page: FalabellaPage;

  beforeEach(() => {
    page = new FalabellaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
