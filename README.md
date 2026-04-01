# 🛰️ SATTRACK — Real‑time 3D Satellite Tracker

![SATTRACK screenshot](https://via.placeholder.com/800x400?text=SATTRACK+3D+Globe) <!-- Add actual screenshot later -->

**Live demo:** [sattrack.vercel.app](https://sattrack.vercel.app) *(after deployment)*

SATTRACK visualizes thousands of active satellites in real time using live TLE data from [Celestrak](https://celestrak.org). It combines a 3D Earth model with accurate orbit propagation (SGP4) and includes satellite metadata such as downlink frequencies, mode, and country. An integrated WebSDR panel lets you tune into amateur radio downlinks directly from the browser.

---

## ✨ Features

- 🌍 **3D Earth** – High‑resolution texture, stars, atmosphere glow.
- 🛰️ **Live satellite tracking** – Positions updated in real time using SGP4.
- 🎨 **Colour‑coded categories** – Space stations, weather, amateur, navigation, science, etc.
- 📡 **Satellite details** – NORAD ID, altitude, velocity, latitude/longitude, inclination, orbital period.
- 📻 **WebSDR integration** – Click on a satellite with a known frequency to open a WebSDR receiver (Netherlands, UK, US, Japan) tuned to its downlink.
- 🔍 **Search & filter** – Find satellites by name or category.
- 🖱️ **Interactive globe** – Drag to rotate, scroll to zoom, click on any satellite to track.
- 📦 **CORS‑free proxy** – Uses a serverless function to fetch TLEs, avoiding browser CORS restrictions.

---
##  🛠️ How It Works

    TLE Data – The app fetches live TLEs from Celestrak via a serverless function (/api/celestrak?group=...) to avoid CORS.

    Propagation – Using satellite.js, each satellite’s position is calculated in real time.

    3D Visualization – Satellites are drawn as sprites (custom canvas icons) in the 3D scene, with Earth rotating at the correct sidereal rate.

    WebSDR – When you select a satellite, the WebSDR panel loads a receiver tuned to its downlink frequency (if known).

##  📡 Data Sources

    TLEs – Celestrak (live)

    Satellite metadata – Curated dataset (downlink frequencies, modes, descriptions) based on public sources (AMSAT, SatNOGS, etc.)

##  👤 Author

Daniel Miranda Barcelona – Excal1bur
Independent security researcher.

## 📄 License

MIT – free to use and modify.



