const BASE_DAY_RATE_EUR = 95;
const SURFACE_PER_GOAT_DAY = 1200;

const terrainMultipliers = {
  herbe: 1,
  herbe_haute: 1.05,
  ronces: 1.35,
  pente: 1.2,
  friche: 1.45,
  sous_bois: 1.25
};

function normalizeSurface(surface) {
  const numericSurface = Number(surface || 1000);
  if (Number.isNaN(numericSurface) || numericSurface <= 0) {
    return 1000;
  }
  return numericSurface;
}

function estimateQuote(surface, terrainType) {
  const normalizedSurface = normalizeSurface(surface);
  const multiplier = terrainMultipliers[terrainType] || 1;
  const days = Math.max(1, Math.ceil(normalizedSurface / SURFACE_PER_GOAT_DAY));
  const largeFieldSurcharge = normalizedSurface > 10000 ? 180 : 0;

  return Math.round(days * BASE_DAY_RATE_EUR * multiplier + largeFieldSurcharge);
}

module.exports = {
  estimateQuote,
  normalizeSurface,
  terrainMultipliers
};
