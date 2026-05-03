# DriverTraxxx

> Mobile-first lot operations app for Enterprise Rental Car at Louisville Muhammad Ali International Airport (SDF)

---

## What It Is

DriverTraxxx is a Progressive Web App (PWA) built for rental car lot drivers. It runs entirely in the browser — no app store, no login, no backend. Just open it and go.

- Scan or manually log vehicle barcodes on the lot
- Track status, destination, tire issues, shuttle and transport flags
- GPS-tag every entry automatically
- View shift stats and 7-day history on the dashboard
- Auto-backup data every 30 minutes to local storage
- Works offline once loaded

---

## Live App

**[charger71.github.io/drivertraxxx](https://charger71.github.io/drivertraxxx)**

---

## Installation

DriverTraxxx installs as a home screen app on iOS and Android — no App Store required.

**iPhone (Safari only)**
1. Open the link above in Safari
2. Tap the Share button → Add to Home Screen
3. Tap Add

**Android (Chrome)**
1. Open the link above in Chrome
2. Tap Install when prompted, or use ⋮ → Add to Home Screen

> See [GUIDE.md](GUIDE.md) for full setup instructions with screenshots.

---

## Features

| Feature | Details |
|---------|---------|
| Barcode scanner | Code 39 & Code 128 — Enterprise tag formats |
| Manual entry | Fallback for difficult tags |
| GPS tagging | Coordinates saved with every record |
| VIN decode | Auto-fetches year / make / model from NHTSA |
| Shift detection | 6-hour gap auto-splits shifts |
| Weather alerts | Live NWS severe weather alerts for SDF |
| Dashboard | Today, weekly, and 7-day shift breakdown |
| Data & Backup | Auto-backup + JSON export / import |
| Offline support | Works without internet after first load |

---

## Stack

- Vanilla HTML / CSS / JavaScript — single file, no build step
- [ZXing](https://github.com/zxing-js/library) for barcode scanning
- [NHTSA vPIC API](https://vpic.nhtsa.dot.gov/api/) for VIN decoding
- [NWS API](https://www.weather.gov/documentation/services-web-api) for weather alerts
- localStorage for all data — no server, no database

---

## Files

```
/
├── index.html   — the entire app
├── icon.png     — home screen icon
├── GUIDE.md     — setup & user guide
└── README.md    — this file
```

---

## Usage

See **[GUIDE.md](GUIDE.md)** for full instructions including:
- iOS and Android setup
- Profile configuration
- Logging entries and scanning barcodes
- Dashboard and records
- Data export and backup

---

*Built for Enterprise Rental Car Operations — SDF Louisville*
