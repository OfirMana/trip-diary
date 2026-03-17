import { defineConfig } from 'astro/config';

// חשוב:
// 1) החלף את YOUR_GITHUB_USERNAME בשם המשתמש שלך בגיטהאב
// 2) החלף את trip-diary בשם הריפו שלך
// אם בעתיד תחבר דומיין פרטי, אפשר להוריד את base ולשים site לדומיין החדש.
export default defineConfig({
  site: 'https://YOUR_GITHUB_USERNAME.github.io',
  base: '/trip-diary',
});
