import { QandaPage } from './app.po';

describe('qanda App', () => {
  let page: QandaPage;

  beforeEach(() => {
    page = new QandaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
