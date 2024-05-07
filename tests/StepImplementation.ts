import {
  Step,
  BeforeSuite,
  BeforeScenario,
  AfterScenario,
  Gauge,
} from "gauge-ts";
import { Browser, chromium, Page } from "playwright";
import assert = require("assert");
import createTodo from "./createTodo";
import completeTodo from "./completeTodo";
import common from "./common";
import returnTodo from "./returnTodo";
import { exec } from "child_process";

let browser: Browser;
let page: Page;

export default class StepImplementation {
  @BeforeSuite()
  public async suiteSetup() {}

  @BeforeScenario()
  public async beforeScenario() {
    browser = await chromium.launch({
      headless: true,
    });
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto(process.env.TODO_URL);
  }

  @AfterScenario()
  public async afterScenario() {
    await browser.close();
  }

  @Step("<todo>というTODOを入力する")
  public async inputTodo(todo: string) {
    await createTodo.inputTodo(page, todo);
  }

  @Step("追加ボタンをクリックする")
  public async clickAddButton() {
    await createTodo.clickAddButton(page);
  }

  @Step("完了ボタンをクリックする")
  public async clickCompleteTodo() {
    await completeTodo.clickCompleteTodo(page);
  }

  @Step("<todo>というTODOが完了エリアに存在することを確認する")
  public async checkExistTodoCompleteArea(todo: string) {
    await common.checkExistTodoCompleteArea(page, todo);
    await Gauge.captureScreenshot();
  }

  @Step("<todo>というTODOが完了エリアに存在しないことを確認する")
  public async checkNotExistTodoCompleteArea(todo: string) {
    await common.checkNotExistTodoCompleteArea(page, todo);
    await Gauge.captureScreenshot();
  }

  @Step("<todo>というTODOが未完了エリアに存在することを確認する")
  public async checkExistTodoIncompleteArea(todo: string) {
    await common.checkExistTodoIncompleteArea(page, todo);
    await Gauge.captureScreenshot();
  }

  @Step("<todo>というTODOが未完了エリアに存在しないことを確認する")
  public async checkNotExistTodoIncompleteArea(todo: string) {
    await common.checkNotExistTodoIncompleteArea(page, todo);
    await Gauge.captureScreenshot();
  }

  @Step("削除ボタンをクリックする")
  public async clickDeleteButton() {
    await createTodo.clickDeleteButton(page);
  }

  @Step("戻すボタンをクリックする")
  public async clickReturnButton() {
    await returnTodo.clickReturnButton(page);
  }
}
