export const apiUrl: string = "https://rsapi.goong.io";
export const mapUrl: string = "https://tiles.goong.io/assets";
export const apiKey: string = import.meta.env.VITE_API_KEY; // you need an account to get key from: https://account.goong.io/keys
export const mapKey: string = import.meta.env.VITE_MAP_KEY; // you need an account to get key from: https://account.goong.io/keys

export const directionVehicle: string = "car"; // bike, taxi, trunk, hd
export const center: [number, number] = [
  105.85242472181584, 21.029579719995272,
];
export const zoom = 14;
export const radiusInMeters = 500; // Radius in meters
export const mapStyles = [
  { name: "Normal", url: `${mapUrl}goong_map_web.json?api_key=${mapKey}` },
  { name: "Satellite", url: `${mapUrl}goong_satellite.json?api_key=${mapKey}` },
  { name: "Dark", url: `${mapUrl}goong_map_dark.json?api_key=${mapKey}` },
  { name: "Light", url: `${mapUrl}navigation_day.json?api_key=${mapKey}` },
  { name: "Night", url: `${mapUrl}navigation_night.json?api_key=${mapKey}` },
];

export const longitudeBounds = {
  min: 105.780335,
  max: 105.851317,
};

export const latitudeBounds = {
  min: 21.017861,
  max: 21.048984,
};

// 21.048984, 105.780335
// 21.017861, 105.851317
