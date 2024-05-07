import { Page } from "playwright";

class ReturnTodo {
  /**戻すボタンをクリック*/
  async clickReturnButton(page: Page) {
    await page.getByRole("button", { name: "戻す" }).click();
  }
}
export default new ReturnTodo();
