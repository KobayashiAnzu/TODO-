import { Page } from "playwright";

class CreateTodo {
  /**TODOを入力する*/
  async inputTodo(page: Page, todo: string) {
    await page.getByPlaceholder("TODOを入力").click();
    await page.getByPlaceholder("TODOを入力").fill(todo);
  }

  /**追加ボタンをクリックする*/
  async clickAddButton(page: Page) {
    await page.getByRole("button", { name: "追加" }).click();
  }

  /**削除ボタンをクリックする*/
  async clickDeleteButton(page: Page) {
    await page.getByRole("button", { name: "削除" }).click();
  }
}

export default new CreateTodo();
