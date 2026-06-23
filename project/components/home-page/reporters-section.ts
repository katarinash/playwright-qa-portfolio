import { Page } from "@playwright/test";
import { BaseSection } from "./base-section";

export class ReportersSection extends BaseSection {
    constructor (page: Page) {
    const root = page.locator('.reporters-listWrap.section')
    super(root)
    }
}