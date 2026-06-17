import {test as base } from "@playwright/test";
import { HomePage } from "../pages/home-page";
import { LoginPage } from "../pages/login-page";
import { CommunityPage } from "../pages/community-page";

export const test = base.extend<{
    homePage: HomePage;
    loginPage: LoginPage;
    communityPage: CommunityPage;
}>({
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    communityPage: async ({ page }, use) => {
        const communityPage = new CommunityPage(page);
        await use(communityPage);
    }
});
