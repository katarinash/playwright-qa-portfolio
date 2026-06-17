import { Locator, Page } from "@playwright/test";
import { UniversalPage } from "./universal-page";
import { SidebarMenu } from "../components/sidebar-menu";

export class BasePage extends UniversalPage {
    readonly loginButton: Locator;
    readonly communityButton: Locator;

  constructor(page: Page, pageUrl: string, baseUrl?: string) {
    super(page, pageUrl, baseUrl);
    this.loginButton = page.getByRole("link", { name: "Вхід" });
    this.communityButton = page.getByRole("link", { name: "Спільнота" }).nth(0);
  }

  get sidebarMenu() {
    return new SidebarMenu(this.page);
  }
}