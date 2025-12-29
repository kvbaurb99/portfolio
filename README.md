# 🚀 Jakub Urbański - Portfolio

Zbudowane w **Next.js 16** z ciemnym motywem, fioletowymi akcentami i płynnymi animacjami.

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-purple?logo=framer)

## ✨ Funkcjonalności

- 🌙 **Ciemny motyw** z fioletowymi akcentami
- 🎭 **Płynne animacje** z Framer Motion
- 🌍 **Wielojęzyczność (i18n)** - Polski / English z automatycznym wykrywaniem
- 📱 **Responsywność** - RWD od mobile do desktop
- 🔍 **SEO** - Schema.org JSON-LD, meta tagi, Open Graph
- ⚡ **Wydajność** - optymalizacja Core Web Vitals
- 🎨 **Glassmorphism** - efekty szkła i glow

## 🛠️ Tech Stack

| Kategoria     | Technologie             |
| ------------- | ----------------------- |
| **Framework** | Next.js 16 (App Router) |
| **Język**     | TypeScript              |
| **Styling**   | Tailwind CSS            |
| **Animacje**  | Framer Motion           |
| **Ikony**     | Lucide React            |
| **i18n**      | next-intl               |
| **SEO**       | schema-dts              |
| **Czcionki**  | Syne, JetBrains Mono    |

## 📁 Struktura projektu

```
src/
├── app/
│   ├── globals.css      # Style globalne i zmienne CSS
│   ├── layout.tsx       # Root layout z providers
│   └── page.tsx         # Strona główna
├── components/
│   ├── navigation/      # Navbar z language switch
│   ├── hero/            # Sekcja hero
│   ├── about/           # Sekcja o mnie
│   ├── skills/          # Umiejętności i tech stack
│   ├── projects/        # Portfolio projektów
│   ├── experience/      # Doświadczenie zawodowe
│   ├── contact/         # Formularz kontaktowy
│   ├── footer/          # Stopka
│   └── ui/              # Komponenty UI (LanguageSwitch, etc.)
├── i18n/
│   ├── config.ts        # Konfiguracja lokalizacji
│   └── request.ts       # Auto-detekcja języka
├── seo/
│   ├── SchemaJsonLD.tsx # Dane strukturalne Schema.org
│   └── index.ts         # Eksporty SEO
messages/
├── pl.json              # Tłumaczenia polskie
└── en.json              # Tłumaczenia angielskie
```

## 🚀 Uruchomienie

### Wymagania

- Node.js 18+
- npm / yarn / pnpm

### Instalacja

```bash
# Klonowanie repozytorium
git clone https://github.com/jakuburbanski/portfolio.git
cd portfolio

# Instalacja zależności
npm install

# Uruchomienie serwera developerskiego
npm run dev
```

Otwórz [http://localhost:3000](http://localhost:3000) w przeglądarce.

### Budowanie produkcyjne

```bash
npm run build
npm start
```

## 🎨 Personalizacja

### Kolory

Zmienne CSS w `src/app/globals.css`:

```css
:root {
  --accent-primary: #a855f7; /* Fioletowy główny */
  --accent-secondary: #7c3aed; /* Fioletowy ciemniejszy */
  --accent-tertiary: #c084fc; /* Fioletowy jaśniejszy */
  --background: #0c0c12; /* Tło główne */
}
```

### Czcionki

Zmień w `src/app/layout.tsx`:

- **Syne** - nagłówki i teksty
- **JetBrains Mono** - kod i elementy techniczne

## 📄 Sekcje

| Sekcja            | Opis                                        |
| ----------------- | ------------------------------------------- |
| **Hero**          | Intro z animowanymi elementami i tech stack |
| **O mnie**        | Opis, cechy, statystyki                     |
| **Umiejętności**  | Tech stack z kategoriami i specjalizacjami  |
| **Projekty**      | Portfolio z filtrami i opisami              |
| **Doświadczenie** | Timeline kariery                            |
| **Kontakt**       | Formularz i dane kontaktowe                 |

## 🌍 Wielojęzyczność

- Automatyczne wykrywanie języka z `Accept-Language` header
- Przełącznik w navbarze (🇵🇱 / 🇬🇧)
- Język zapisywany w cookie `NEXT_LOCALE`
- **Brak prefiksu URL** (`/pl`, `/en`)

## 🔍 SEO

Zaimplementowane schematy Schema.org:

- `Person` - dane osobowe
- `WebSite` - informacje o stronie
- `WebPage` - strona główna
- `ProfessionalService` - oferowane usługi

## 📝 Licencja

MIT © Jakub Urbański

---
