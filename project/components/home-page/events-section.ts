import { Page } from "@playwright/test";
import { BaseSection } from "./base-section";

export class EventsSection extends BaseSection {
    constructor( page: Page) {
        const root = page.locator(".events-section.section")
        super(root)
    }
}