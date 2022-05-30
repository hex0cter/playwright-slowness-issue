import { test, expect } from "@playwright/test";

test("test checkboxes and Radio buttons without placements", async ({ page }) => {
  const newSignUrl = "https://staging.scrive.com/s/9221714692412077704/9221932570715111975/e2d6e750aba8283a";

  await page.goto(newSignUrl, { waitUntil: "networkidle" });
  await expect(page).toHaveURL(/new\/sign/);
});
