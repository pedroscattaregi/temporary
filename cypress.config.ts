import { defineConfig } from 'cypress';

import dotenv from "dotenv";

dotenv.config();
const args = process.env;

module.exports = defineConfig({
  fileServerFolder: '.',
  fixturesFolder: './cypress/fixtures',
  videosFolder: './videos',
  screenshotsFolder: './screenshots',
  requestTimeout: 10000,
  responseTimeout: 60000,
  modifyObstructiveCode: false,
  chromeWebSecurity: false,
  video: Boolean(Number(args.CYPRESS_VIDEO_RECORDER)) || false,
  e2e: {
    specPattern: './cypress/integration/**/*.spec.{js,jsx,ts,tsx}',
    supportFile: './cypress/support/e2e.ts',
    baseUrl: args.CYPRESS_BASE_URL,
    setupNodeEvents(_on, config) {
      require('@cypress/grep/src/plugin')(config);
      return config;
  },
  }
});
