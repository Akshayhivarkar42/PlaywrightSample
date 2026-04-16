import { test, expect } from '@playwright/test';

test('test to-do @sanity', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').fill('Buy');
  await page.getByTestId('text-input').press('Enter');
  await expect(page.getByTestId('todo-item-label')).toBeVisible();
  await expect(page.getByTestId('footer-navigation')).toContainText('Active');
  await expect(page.getByText('Double-click to edit a todo')).toBeVisible();
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').fill('sample');
  await page.getByTestId('text-input').press('Enter');
  await page.getByRole('listitem').filter({ hasText: 'Buy' }).getByTestId('todo-item-toggle').check();
  await expect(page.getByTestId('todo-list')).toContainText('Buy');
});