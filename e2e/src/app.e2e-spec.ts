import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have the title', () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual('Félix Boisselier');
  });
});
