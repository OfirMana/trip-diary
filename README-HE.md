# יומן מסע — שלד התחלה ב-Astro

זה שלד מוכן להתחלה:
- דף בית
- דף יום
- תיקיות מסודרות
- דוגמה של יום 1
- סקריפט קטן להקטנת תמונות
- workflow מוכן ל-GitHub Pages

## מה עושים עכשיו

### 1) פותחים ריפו חדש בגיטהאב
למשל:
`trip-diary`

**מומלץ ריפו ציבורי** כדי ש-GitHub Pages יישאר בחינם.

### 2) מורידים את ה-ZIP הזה ומחלצים
שים את כל הקבצים בתיקייה מקומית במחשב.

### 3) מתקינים את Astro
בטרמינל בתוך התיקייה:

```bash
npm install
```

### 4) מתקינים Pillow בשביל הקטנת תמונות
```bash
python -m pip install pillow
```

### 5) מעדכנים את astro.config.mjs
בקובץ הזה תחליף:
- `YOUR_GITHUB_USERNAME`
- `trip-diary`

אם שם הריפו שלך שונה, גם ה-`base` צריך להשתנות.

### 6) מריצים מקומית
```bash
npm run dev
```

### 7) נכנסים לכתובת המקומית
בדרך כלל:
`http://localhost:4321`

---

## איך מוסיפים יום חדש

### א. יוצרים תיקיית תמונות
למשל:
`public/images/day-002`

### ב. מקטינים לשם את התמונות
שומרים את התמונות המקוריות ב-Drive, ואת גרסאות הווב מכניסים לפרויקט.

לדוגמה:
```bash
python tools/resize_images.py raw/day-002 public/images/day-002
```

### ג. יוצרים קובץ תוכן חדש
למשל:
`src/content/days/day-002.md`

ומעתיקים את המבנה של יום 1.

---

## פורמט מומלץ לתמונות
הכי פשוט:
- לשמור מקוריים ב-Drive
- לאתר להשתמש ב-JPG מוקטן
- רוחב עד בערך 1600px מספיק לגמרי

---

## העלאה לגיטהאב

```bash
git init
git add .
git commit -m "first version"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/trip-diary.git
git push -u origin main
```

---

## הפעלת GitHub Pages
אחרי שהקבצים עלו:
- נכנסים ל-Repository
- Settings
- Pages
- Source = GitHub Actions

ה-workflow שכבר קיים בתיקייה `.github/workflows/deploy.yml`
אמור לבנות ולפרסם את האתר אוטומטית.

---

## הערה חשובה
אל תעלה ל-GitHub את כל התמונות המקוריות מהטלפון.
תעלה רק גרסאות ווב מוקטנות.

Drive = גיבוי וארכיון  
GitHub = האתר עצמו
