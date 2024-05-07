import { Page } from "playwright";

class Common {
  /**TODOが完了エリアに存在することを確認*/
  async checkExistTodoCompleteArea(page: Page, todo: string) {
    await page.waitForTimeout(2000);
    const todoRegex = new RegExp(`^${todo}戻す$`);
    const existTodo = await page
      .locator("ul")
      .filter({ hasText: todoRegex })
      .isVisible();
    if (!existTodo) {
      throw new Error("TODOが完了リストに存在しません");
    }
  }

  /**TODOが完了エリアに存在しないことを確認*/
  async checkNotExistTodoCompleteArea(page: Page, todo: string) {
    await page.waitForTimeout(2000);
    const todoRegex = new RegExp(`^${todo}戻す$`);
    const existTodo = await page
      .locator("ul")
      .filter({ hasText: todoRegex })
      .isVisible();
    if (existTodo) {
      throw new Error("TODOが完了リストに存在します");
    }
  }

  /**TODOが未完了エリアに存在することを確認*/
  async checkExistTodoIncompleteArea(page: Page, todo: string) {
    await page.waitForTimeout(2000);
    const todoText = `${todo}完了削除`;
    const existTodo = await page
      .locator("ul")
      .filter({ hasText: todoText })
      .isVisible();
    if (!existTodo) {
      throw new Error("TODOが未完了エリアに存在しません");
    }
  }

  /**TODOが未完了エリアに存在しないことを確認*/
  async checkNotExistTodoIncompleteArea(page: Page, todo: string) {
    await page.waitForTimeout(2000);
    const todoText = `${todo}完了削除`;
    const existTodo = await page
      .locator("ul")
      .filter({ hasText: todoText })
      .isVisible();
    if (existTodo) {
      throw new Error("TODOが未完了エリアに存在します");
    }
  }
}
export default new Common();
