import { Page } from "playwright";

class CompleteTodo {
  /**完了ボタンをクリック*/
  async clickCompleteTodo(page: Page) {
    await page.getByRole("button", { name: "完了" }).click();
  }
}
export default new CompleteTodo();
