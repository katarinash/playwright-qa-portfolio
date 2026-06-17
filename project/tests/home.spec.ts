import { test } from "./fixtures";
import { homePageMenu } from "./home.data";

test.describe("Home page tests", () => {
test.beforeEach(async ({ homePage }) => {
    await homePage.open();
});

test("t_01_check_sidebar_menu_items", async ({ homePage }) => {
    await homePage.sidebarMenu.open();

    await homePage.sidebarMenu.expectItemsCount(10);
    await homePage.sidebarMenu.verifyMenuItems(homePageMenu);
});

test("t_02_check_login_button", async ({ homePage, loginPage }) => {
    await homePage.loginButton.click();
    await loginPage.checkCurrentPage();
});

test("t_03_check_community_button", async ({ homePage, communityPage }) => {
    await homePage.communityButton.click();
    await communityPage.checkCurrentPage();
});
})