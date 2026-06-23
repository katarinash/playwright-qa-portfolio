import { Page } from "@playwright/test";
import { BaseSection } from "./base-section";

export class ProjectsSection extends BaseSection {
    constructor(page: Page) {
        const root = page.locator(".special-projects")
        super(root)
    }
}