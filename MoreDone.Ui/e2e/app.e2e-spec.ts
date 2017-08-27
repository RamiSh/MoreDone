import { MoreDonePage } from './app.po';

describe('more-done App', () => {
  let page: MoreDonePage;

  beforeEach(() => {
    page = new MoreDonePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
