import { Week2t2Page } from './app.po';

describe('week2t2 App', function() {
  let page: Week2t2Page;

  beforeEach(() => {
    page = new Week2t2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
