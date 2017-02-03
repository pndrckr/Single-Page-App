import { SinglePageAppPage } from './app.po';

describe('single-page-app App', function() {
  let page: SinglePageAppPage;

  beforeEach(() => {
    page = new SinglePageAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
