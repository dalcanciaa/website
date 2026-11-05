# Dalcanciaa | Official Website (`Dalcanciaa.com`)

<div align="center">
  <img src="assets/logo.png" width="100" height="100" alt="Dalcanciaa Logo" style="border-radius: 20px;" />
  <h1>Dalcanciaa</h1>
  <p><strong>Spiritual Clarity Meets Precision Engineering</strong></p>
  <p>The official parent website for the Dalcanciaa ecosystem of Islamic and lifestyle applications.</p>
</div>

---

## 🌟 Overview

**Dalcanciaa** develops purpose-built Islamic digital applications engineered with exquisite 3D craft, authentic heritage, and absolute privacy.

This repository hosts the official web hub for **[Dalcanciaa.com](https://dalcanciaa.com/)**, deployed directly via **GitHub Pages**.

---

## 📱 Ecosystem Applications

1. **Quran 13 Line** *(Flagship Application — [View Dedicated Page](quran.html))*
   - **Mushaf Reader:** Complete 13-Line IndoPak script format (847 pages in WebP) plus optional downloadable 850-page Color Tajweed rules edition.
   - **4-in-1 Reading Mode Sheet:** Centralized modal for edition switching, persistent pinch/double-tap zoom, reading orientation (Vertical continuous scroll vs Horizontal swipe), and horizontal page transitions (Realistic page curl with paper turn sound effect vs Smooth scroll).
   - **GPS Prayer Times & Qibla Compass:** Accurate offline timetable calculation powered by `adhan` (5 daily prayers + Sunrise) and magnetic Qibla direction finder pointing directly to the Kaaba.
   - **Zakat Calculator & PDF Statements:** Multi-currency wealth assessment with live gold/silver Nisab checks, 2.5% calculation breakdown, shareable PDF statement exports (`ZakatPdfService`), and Islamic debt jurisprudence guidance in English and Tamil.
   - **Islamic Hijri Calendar:** Gregorian-to-Hijri synchronization, annual Islamic events, and interactive 2-in-1 Month & Year Picker bottom sheet with authentic Arabic calligraphy.
   - **Salawat Dhikr Counter & Analytics:** Dedicated `SalawatProvider`, SQLite persistent session tracking (`salawat_sessions`), time-window overview metrics (Today, Week, Month, All-Time), in-progress count persistence, Arabic-only display toggles, and Friday Salawat reminder notifications with live dashboard banner.
   - **40+ Quran Duas:** Thematically categorized supplications with Arabic text, English transliteration, English and Tamil translations, scholarly canonical page references, and dynamic **"Read in Quran"** direct navigation.
   - **Asma-ul-Husna (99 Names of Allah):** Complete 99 Divine Names with Arabic calligraphy, transliteration, English meanings, and audio pronunciation with sequential "Play All" recitation mode.
   - **Interactive Quran Quiz:** Engaging Islamic knowledge quiz supporting English and Tamil (தமிழ்), with instant haptic applause, confetti animations, answer explanations, and report card modal.
   - **Reading Analytics & Streaks:** Daily reading goal progress ring, consecutive reading streak counter with milestone celebrations, Khatam completion history, and granular Ayah-level chronological timeline.
   - **Two Flavor Editions:** Available on Google Play as **Quran 13 Line** (Free with a 7-day 100% ad-free trial, optional ₹150 lifetime purchase, zero ads in reader) and **Quran 13 Line Ad-Free** (₹150 paid upfront, zero ads forever, no IAP, AdMob never initialized).
   - **100% Offline-First & Privacy-Focused:** All reading and tools operate fully offline with zero user accounts and zero telemetry. Optional Google Drive backup.

2. **Dalcanciaa Habits** *(Coming Soon)*
   - Daily 5 Salah tracking with Sunnah, Tahajjud, and Duha logging.
   - Quran Juz and Ayah daily reading goal streaks.
   - Digital Tasbih & Adhkar counters.
   - 100% on-device privacy with zero external telemetry.

3. **Dalcanciaa Baby Names** *(In Research)*
   - Verified Arabic & Islamic names with scholarly origins and root meanings.
   - Quranic occurrences and prophetic connections.
   - Native audio pronunciation guides.

---

## 🗂️ Website Structure

- **`index.html`**: Parent brand landing page showcasing the Dalcanciaa studio, product catalog, core values, and community waitlist.
- **`quran.html`**: Dedicated flagship application page showcasing the 13-Line Quran app with 3D device mockups, feature-by-feature breakdowns, and full screenshot gallery.
- **`styles.css`**: Unified modern 3D design system with glassmorphism, responsive layouts, and animations.
- **`main.js`**: Interactive particle canvas, scroll reveals, 3D tilt effects, and gallery controls.
- **`CNAME`**: Configured for custom domain `dalcanciaa.com`.
- **`sitemap.xml` & `robots.txt`**: SEO configuration.

---

## 🛠️ Local Development

Open `index.html` or `quran.html` in any browser or run a local static server:

```bash
# Using Python
python -m http.server 8000

# Or using Node
npx serve .
```

---

© 2026 Dalcanciaa. Crafted with Ihsan.
