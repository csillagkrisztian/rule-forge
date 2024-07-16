import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run board_game_bloom:serve',
        production: 'nx run board_game_bloom:preview',
      },
      ciWebServerCommand: 'nx run board_game_bloom:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
