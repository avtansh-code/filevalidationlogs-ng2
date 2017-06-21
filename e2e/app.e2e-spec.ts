import { FilevalidationlogsPage } from './app.po';

describe('filevalidationlogs App', () => {
  let page: FilevalidationlogsPage;

  beforeEach(() => {
    page = new FilevalidationlogsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
