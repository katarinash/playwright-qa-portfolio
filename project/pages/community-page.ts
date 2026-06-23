import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class CommunityPage extends BasePage {
  readonly historiesList: Locator;
  
  constructor(page: Page) {
    super(page, "/community/");
    this.historiesList = page.locator(".community-hero__text ul li");
  }

  async verifyHistoriesList(expectedItems: string[]) {
    const items = this.historiesList
    await expect(items).toHaveCount(expectedItems.length)

    for (let i = 0; i < expectedItems.length; i++) {
      await expect(items.nth(i)).toHaveText(expectedItems[i])
    }
  }
}