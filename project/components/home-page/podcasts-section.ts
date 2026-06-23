import { expect, Locator, Page } from "@playwright/test";
import { PodcastItems } from "../../types/podcast-types";
import { BaseSection } from "./base-section";

export class PodcastsSection extends BaseSection {
    readonly podcastItems: Locator
     
    constructor( page: Page) {
        const root = page.locator('.podcast.section')
        super(root)

        this.podcastItems = root.locator(".podcast__item.tu-slider__item")
    }

    async verifyPodcastItems(items: PodcastItems[]) {
        await expect(this.podcastItems).toHaveCount(items.length)
        for (let i = 0; i < items.length; i++) {
            const item = this.podcastItems.nth(i)

            const link = item.locator(".podcast__link");
            const image = item.locator("img");
            const title = item.locator(".podcast__title");

            await expect(link).toHaveAttribute("href", items[i].href)
            await expect(image).toHaveAttribute("src", items[i].image)
            await expect(title).toHaveText(items[i].title)
        }
    }
}