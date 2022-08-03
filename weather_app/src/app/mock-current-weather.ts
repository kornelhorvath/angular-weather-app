import { CurrentWeather, Weather } from "./weather"

export const CURRENT: CurrentWeather = 
{
  "coord": {
    "lon": 19.0402,
    "lat": 47.4979
  },
  "weather": [
    {
      "id": 801,
      "main": "Clouds",
      "description": "few clouds",
      "icon": "02d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 29.29,
    "feels_like": 29.55,
    "temp_min": 28.17,
    "temp_max": 29.8,
    "pressure": 1018,
    "humidity": 46
  },
  "visibility": 10000,
  "wind": {
    "speed": 1.54,
    "deg": 0
  },
  "clouds": {
    "all": 20
  },
  "dt": 1659517517,
  "sys": {
    "type": 2,
    "id": 2009661,
    "country": "HU",
    "sunrise": 1659497029,
    "sunset": 1659550570
  },
  "timezone": 7200,
  "id": 3054643,
  "name": "Budapest",
  "cod": 200
}