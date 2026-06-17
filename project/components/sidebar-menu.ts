import { expect, Locator, Page } from "@playwright/test";
import { MenuItem } from "../types/sidemenu-types";

export class SidebarMenu {
    readonly sidebarMenu: Locator;
    readonly items: Locator;

    constructor(private page: Page) {
        this.sidebarMenu = page.locator(".header__toggler");
        this.items = page.locator("#sidebar-menu li a");
    }

    async open() {
        await this.sidebarMenu.click();
    }

    async expectItemsCount(count: number) {
        await expect(this.items).toHaveCount(count);
    }
    
    async verifyMenuItems(items: MenuItem[]) {
        await expect(this.items).toHaveCount(items.length);
        for( let i = 0; i < items.length; i++) {
            const item = items[i];

            await expect(this.items.nth(i)).toHaveText(item.name);
            await expect (this.items.nth(i)).toHaveAttribute("href", item.href);
        }
    }
}