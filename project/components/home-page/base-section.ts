import { expect, Locator } from "@playwright/test";
import { SectionHeading } from "../../types/section-registry";

export class BaseSection {
    readonly sectionHeading: Locator;
    constructor(protected root: Locator){
        this.sectionHeading = root.locator(".section__heading")
    }

    async verifySectionHeading(element: SectionHeading) {
        const title = this.sectionHeading.locator("h2")
        const link = this.sectionHeading.locator("a")
        const other = this.sectionHeading.locator("a")

        await expect(title).toHaveText(element.title)
        await expect(link).toHaveAttribute("href", element.link)
        await expect(other).toHaveText(element.more)
    }
}