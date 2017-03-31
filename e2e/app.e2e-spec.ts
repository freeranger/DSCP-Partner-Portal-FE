import { DSCPPartnerPortalFrontEndPage } from './app.po';

describe('dscp-partner-portal-front-end App', () => {
  let page: DSCPPartnerPortalFrontEndPage;

  beforeEach(() => {
    page = new DSCPPartnerPortalFrontEndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
