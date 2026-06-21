import { expect, Locator, Page } from "@playwright/test";

export class NewsSection {
    readonly newsSection: Locator;
    readonly newsItem: Locator;

    constructor(private page: Page) {
        this.newsSection = page.locator(".news-listInner");
        this.newsItem = page.locator(".news-list__item.tu-slider__item");
    }

    async verifyNewsStructure(expectedCount: number) {
        await expect(this.newsItem).toHaveCount(expectedCount);

        for (let i = 0; i < expectedCount; i++) {
            const item = this.newsItem.nth(i);

            const link = item.locator("a");
            const date = item.locator(".news-list__item-date");
            const title = item.locator(".news-list__item-title");

            await expect(link).toHaveAttribute("href", /theukrainians\.org\/news\//);
            await expect(date).toBeVisible();
            await expect(title).toBeVisible();
        }
    }
}