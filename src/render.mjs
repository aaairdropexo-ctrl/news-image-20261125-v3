// Build-time renderer for the v3 newspaper page. NOT part of the entry
// program: it only turns src/page.html into entry.png on this machine.
// It uses the Playwright Chromium already installed on this VM and
// reads nothing from the network.
// Playwright is installed globally with the MCP server on this VM; load
// it by absolute path (ESM cannot resolve it from this folder).
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require(
  '/home/hatch/.nvm/versions/node/v26.13.1/lib/node_modules/@playwright/mcp/node_modules/playwright-core',
);
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');
const CHROME = '/home/hatch/.cache/ms-playwright/chromium-1255/chrome-linux64/chrome';

const browser = await chromium.launch({
  executablePath: CHROME,
  args: ['--no-sandbox', '--force-device-scale-factor=1', '--disable-lcd-text'],
});
const page = await browser.newPage({
  viewport: { width: 1024, height: 1024 },
  deviceScaleFactor: 1,
});
await page.goto('file://' + join(root, 'src', 'page.html'), { waitUntil: 'load' });
await page.waitForTimeout(400);
await page.screenshot({
  path: join(root, 'entry.png'),
  clip: { x: 0, y: 0, width: 1024, height: 1024 },
});
await browser.close();
console.log('rendered entry.png');
