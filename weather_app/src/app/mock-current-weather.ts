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

export const HOURLY = {
  "cod": "200",
  "message": 0,
  "cnt": 40,
  "list": [
    {
      "dt": 1659960000,
      "main": {
        "temp": 21.29,
        "feels_like": 21.51,
        "temp_min": 21.29,
        "temp_max": 30.16,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 1007,
        "humidity": 78,
        "temp_kf": -8.87
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 75
      },
      "wind": {
        "speed": 1.89,
        "deg": 310,
        "gust": 1.59
      },
      "visibility": 10000,
      "pop": 0.23,
      "rain": {
        "3h": 0.16
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2022-08-08 12:00:00"
    },
    {
      "dt": 1659970800,
      "main": {
        "temp": 23.84,
        "feels_like": 23.95,
        "temp_min": 23.84,
        "temp_max": 28.93,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 1006,
        "humidity": 64,
        "temp_kf": -5.09
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 83
      },
      "wind": {
        "speed": 5,
        "deg": 314,
        "gust": 4.27
      },
      "visibility": 10000,
      "pop": 0.26,
      "rain": {
        "3h": 0.32
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2022-08-08 15:00:00"
    },
    {
      "dt": 1659981600,
      "main": {
        "temp": 24.68,
        "feels_like": 24.54,
        "temp_min": 24.68,
        "temp_max": 26.37,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 1006,
        "humidity": 51,
        "temp_kf": -1.69
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 90
      },
      "wind": {
        "speed": 3.3,
        "deg": 337,
        "gust": 5.43
      },
      "visibility": 10000,
      "pop": 0.03,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2022-08-08 18:00:00"
    },
    {
      "dt": 1659992400,
      "main": {
        "temp": 22.22,
        "feels_like": 22.14,
        "temp_min": 22.22,
        "temp_max": 22.22,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 1008,
        "humidity": 63,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 98
      },
      "wind": {
        "speed": 2.69,
        "deg": 317,
        "gust": 5.09
      },
      "visibility": 10000,
      "pop": 0.37,
      "rain": {
        "1h": 0.5,
        "3h": 0.78
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2022-08-08 21:00:00"
    },
    {
      "dt": 1660003200,
      "main": {
        "temp": 20.92,
        "feels_like": 20.9,
        "temp_min": 20.92,
        "temp_max": 20.92,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 1008,
        "humidity": 70,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 99
      },
      "wind": {
        "speed": 2,
        "deg": 3,
        "gust": 3.44
      },
      "visibility": 10000,
      "pop": 0.35,
      "rain": {
        "3h": 0.51
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2022-08-09 00:00:00"
    },
    {
      "dt": 1660014000,
      "main": {
        "temp": 19.95,
        "feels_like": 19.8,
        "temp_min": 19.95,
        "temp_max": 19.95,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 1008,
        "humidity": 69,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 2.26,
        "deg": 7,
        "gust": 3.67
      },
      "visibility": 10000,
      "pop": 0.07,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2022-08-09 03:00:00"
    },
    {
      "dt": 1660024800,
      "main": {
        "temp": 21.7,
        "feels_like": 21.47,
        "temp_min": 21.7,
        "temp_max": 21.7,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 1009,
        "humidity": 59,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 2.14,
        "deg": 26,
        "gust": 4.34
      },
      "visibility": 10000,
      "pop": 0.07,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2022-08-09 06:00:00"
    },
    {
      "dt": 1660035600,
      "main": {
        "temp": 27.19,
        "feels_like": 27,
        "temp_min": 27.19,
        "temp_max": 27.19,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 1009,
        "humidity": 40,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 74
      },
      "wind": {
        "speed": 3.04,
        "deg": 56,
        "gust": 3.8
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2022-08-09 09:00:00"
    },
    {
      "dt": 1660046400,
      "main": {
        "temp": 30.68,
        "feels_like": 29.5,
        "temp_min": 30.68,
        "temp_max": 30.68,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 1007,
        "humidity": 31,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 60
      },
      "wind": {
        "speed": 2.11,
        "deg": 29,
        "gust": 2.21
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2022-08-09 12:00:00"
    },
    {
      "dt": 1660057200,
      "main": {
        "temp": 30.86,
        "feels_like": 29.21,
        "temp_min": 30.86,
        "temp_max": 30.86,
        "pressure": 1017,
        "sea_level": 1017,
        "grnd_level": 1006,
        "humidity": 25,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 80
      },
      "wind": {
        "speed": 2.52,
        "deg": 30,
        "gust": 3.32
      },
      "visibility": 10000,
      "pop": 0.04,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2022-08-09 15:00:00"
    },
    {
      "dt": 1660068000,
      "main": {
        "temp": 27.3,
        "feels_like": 26.79,
        "temp_min": 27.3,
        "temp_max": 27.3,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 1007,
        "humidity": 34,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 82
      },
      "wind": {
        "speed": 5.53,
        "deg": 55,
        "gust": 7.33
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2022-08-09 18:00:00"
    },
    {
      "dt": 1660078800,
      "main": {
        "temp": 24.46,
        "feels_like": 23.93,
        "temp_min": 24.46,
        "temp_max": 24.46,
        "pressure": 1021,
        "sea_level": 1021,
        "grnd_level": 1009,
        "humidity": 37,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 60
      },
      "wind": {
        "speed": 4.55,
        "deg": 69,
        "gust": 9.3
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2022-08-09 21:00:00"
    },
    {
      "dt": 1660089600,
      "main": {
        "temp": 22.31,
        "feels_like": 21.69,
        "temp_min": 22.31,
        "temp_max": 22.31,
        "pressure": 1021,
        "sea_level": 1021,
        "grnd_level": 1010,
        "humidity": 42,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 53
      },
      "wind": {
        "speed": 3.26,
        "deg": 17,
        "gust": 7.42
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2022-08-10 00:00:00"
    },
    {
      "dt": 1660100400,
      "main": {
        "temp": 20.59,
        "feels_like": 19.88,
        "temp_min": 20.59,
        "temp_max": 20.59,
        "pressure": 1021,
        "sea_level": 1021,
        "grnd_level": 1009,
        "humidity": 45,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ],
      "clouds": {
        "all": 18
      },
      "wind": {
        "speed": 4.28,
        "deg": 18,
        "gust": 9.66
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2022-08-10 03:00:00"
    },
    {
      "dt": 1660111200,
      "main": {
        "temp": 22.21,
        "feels_like": 21.53,
        "temp_min": 22.21,
        "temp_max": 22.21,
        "pressure": 1022,
        "sea_level": 1022,
        "grnd_level": 1011,
        "humidity": 40,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 9
      },
      "wind": {
        "speed": 5.21,
        "deg": 27,
        "gust": 10
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2022-08-10 06:00:00"
    },
    {
      "dt": 1660122000,
      "main": {
        "temp": 26.33,
        "feels_like": 26.33,
        "temp_min": 26.33,
        "temp_max": 26.33,
        "pressure": 1022,
        "sea_level": 1022,
        "grnd_level": 1010,
        "humidity": 28,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "clouds": {
        "all": 45
      },
      "wind": {
        "speed": 4.62,
        "deg": 34,
        "gust": 6.54
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2022-08-10 09:00:00"
    },
    {
      "dt": 1660132800,
      "main": {
        "temp": 29.17,
        "feels_like": 27.68,
        "temp_min": 29.17,
        "temp_max": 29.17,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 1009,
        "humidity": 23,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
        }
      ],
      "clouds": {
        "all": 23
      },
      "wind": {
        "speed": 4.52,
        "deg": 36,
        "gust": 6.19
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2022-08-10 12:00:00"
    },
    {
      "dt": 1660143600,
      "main": {
        "temp": 29.85,
        "feels_like": 28.15,
        "temp_min": 29.85,
        "temp_max": 29.85,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 1007,
        "humidity": 21,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 3
      },
      "wind": {
        "speed": 5.17,
        "deg": 45,
        "gust": 6.25
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2022-08-10 15:00:00"
    },
    {
      "dt": 1660154400,
      "main": {
        "temp": 25.6,
        "feels_like": 25.08,
        "temp_min": 25.6,
        "temp_max": 25.6,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 1008,
        "humidity": 33,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
        }
      ],
      "clouds": {
        "all": 14
      },
      "wind": {
        "speed": 6.19,
        "deg": 60,
        "gust": 8.43
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2022-08-10 18:00:00"
    },
    {
      "dt": 1660165200,
      "main": {
        "temp": 22.68,
        "feels_like": 22.07,
        "temp_min": 22.68,
        "temp_max": 22.68,
        "pressure": 1021,
        "sea_level": 1021,
        "grnd_level": 1009,
        "humidity": 41,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 2
      },
      "wind": {
        "speed": 4.38,
        "deg": 51,
        "gust": 9.96
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2022-08-10 21:00:00"
    },
    {
      "dt": 1660176000,
      "main": {
        "temp": 21.25,
        "feels_like": 20.63,
        "temp_min": 21.25,
        "temp_max": 21.25,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 1009,
        "humidity": 46,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 1
      },
      "wind": {
        "speed": 3.16,
        "deg": 37,
        "gust": 9.44
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2022-08-11 00:00:00"
    },
    {
      "dt": 1660186800,
      "main": {
        "temp": 19.4,
        "feels_like": 18.75,
        "temp_min": 19.4,
        "temp_max": 19.4,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 1008,
        "humidity": 52,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 5
      },
      "wind": {
        "speed": 3.17,
        "deg": 6,
        "gust": 8.12
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2022-08-11 03:00:00"
    },
    {
      "dt": 1660197600,
      "main": {
        "temp": 21.8,
        "feels_like": 21.16,
        "temp_min": 21.8,
        "temp_max": 21.8,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 1009,
        "humidity": 43,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 4
      },
      "wind": {
        "speed": 3.5,
        "deg": 20,
        "gust": 7.89
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2022-08-11 06:00:00"
    },
    {
      "dt": 1660208400,
      "main": {
        "temp": 26.29,
        "feels_like": 26.29,
        "temp_min": 26.29,
        "temp_max": 26.29,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 1008,
        "humidity": 29,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "clouds": {
        "all": 36
      },
      "wind": {
        "speed": 4.36,
        "deg": 40,
        "gust": 6.73
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2022-08-11 09:00:00"
    },
    {
      "dt": 1660219200,
      "main": {
        "temp": 27.08,
        "feels_like": 26.36,
        "temp_min": 27.08,
        "temp_max": 27.08,
        "pressure": 1018,
        "sea_level": 1018,
        "grnd_level": 1006,
        "humidity": 27,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 64
      },
      "wind": {
        "speed": 3.99,
        "deg": 41,
        "gust": 5.07
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2022-08-11 12:00:00"
    },
    {
      "dt": 1660230000,
      "main": {
        "temp": 27.29,
        "feels_like": 26.45,
        "temp_min": 27.29,
        "temp_max": 27.29,
        "pressure": 1017,
        "sea_level": 1017,
        "grnd_level": 1006,
        "humidity": 26,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 73
      },
      "wind": {
        "speed": 5.13,
        "deg": 42,
        "gust": 5.1
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2022-08-11 15:00:00"
    },
    {
      "dt": 1660240800,
      "main": {
        "temp": 24.02,
        "feels_like": 23.5,
        "temp_min": 24.02,
        "temp_max": 24.02,
        "pressure": 1018,
        "sea_level": 1018,
        "grnd_level": 1006,
        "humidity": 39,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 65
      },
      "wind": {
        "speed": 4.28,
        "deg": 44,
        "gust": 6.62
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2022-08-11 18:00:00"
    },
    {
      "dt": 1660251600,
      "main": {
        "temp": 21.59,
        "feels_like": 21.01,
        "temp_min": 21.59,
        "temp_max": 21.59,
        "pressure": 1018,
        "sea_level": 1018,
        "grnd_level": 1007,
        "humidity": 46,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "clouds": {
        "all": 29
      },
      "wind": {
        "speed": 3.99,
        "deg": 42,
        "gust": 8.41
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2022-08-11 21:00:00"
    },
    {
      "dt": 1660262400,
      "main": {
        "temp": 19.82,
        "feels_like": 19.27,
        "temp_min": 19.82,
        "temp_max": 19.82,
        "pressure": 1018,
        "sea_level": 1018,
        "grnd_level": 1006,
        "humidity": 54,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "clouds": {
        "all": 46
      },
      "wind": {
        "speed": 2.81,
        "deg": 21,
        "gust": 6.07
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2022-08-12 00:00:00"
    },
    {
      "dt": 1660273200,
      "main": {
        "temp": 18.72,
        "feels_like": 18.19,
        "temp_min": 18.72,
        "temp_max": 18.72,
        "pressure": 1018,
        "sea_level": 1018,
        "grnd_level": 1006,
        "humidity": 59,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 83
      },
      "wind": {
        "speed": 2.56,
        "deg": 14,
        "gust": 4.37
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2022-08-12 03:00:00"
    },
    {
      "dt": 1660284000,
      "main": {
        "temp": 20.79,
        "feels_like": 20.28,
        "temp_min": 20.79,
        "temp_max": 20.79,
        "pressure": 1018,
        "sea_level": 1018,
        "grnd_level": 1007,
        "humidity": 52,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 62
      },
      "wind": {
        "speed": 2.48,
        "deg": 39,
        "gust": 4.31
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2022-08-12 06:00:00"
    },
    {
      "dt": 1660294800,
      "main": {
        "temp": 26.32,
        "feels_like": 26.32,
        "temp_min": 26.32,
        "temp_max": 26.32,
        "pressure": 1018,
        "sea_level": 1018,
        "grnd_level": 1006,
        "humidity": 37,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 67
      },
      "wind": {
        "speed": 3.12,
        "deg": 73,
        "gust": 3.95
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2022-08-12 09:00:00"
    },
    {
      "dt": 1660305600,
      "main": {
        "temp": 30.31,
        "feels_like": 28.57,
        "temp_min": 30.31,
        "temp_max": 30.31,
        "pressure": 1016,
        "sea_level": 1016,
        "grnd_level": 1005,
        "humidity": 22,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 84
      },
      "wind": {
        "speed": 2.39,
        "deg": 87,
        "gust": 3.51
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2022-08-12 12:00:00"
    },
    {
      "dt": 1660316400,
      "main": {
        "temp": 31.58,
        "feels_like": 29.59,
        "temp_min": 31.58,
        "temp_max": 31.58,
        "pressure": 1014,
        "sea_level": 1014,
        "grnd_level": 1003,
        "humidity": 20,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "clouds": {
        "all": 46
      },
      "wind": {
        "speed": 2.9,
        "deg": 40,
        "gust": 4.95
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2022-08-12 15:00:00"
    },
    {
      "dt": 1660327200,
      "main": {
        "temp": 28.75,
        "feels_like": 27.36,
        "temp_min": 28.75,
        "temp_max": 28.75,
        "pressure": 1013,
        "sea_level": 1013,
        "grnd_level": 1002,
        "humidity": 23,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 59
      },
      "wind": {
        "speed": 2.39,
        "deg": 30,
        "gust": 5.67
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2022-08-12 18:00:00"
    },
    {
      "dt": 1660338000,
      "main": {
        "temp": 26.01,
        "feels_like": 26.01,
        "temp_min": 26.01,
        "temp_max": 26.01,
        "pressure": 1013,
        "sea_level": 1013,
        "grnd_level": 1002,
        "humidity": 28,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 76
      },
      "wind": {
        "speed": 1.99,
        "deg": 29,
        "gust": 2.84
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2022-08-12 21:00:00"
    },
    {
      "dt": 1660348800,
      "main": {
        "temp": 23.67,
        "feels_like": 23.11,
        "temp_min": 23.67,
        "temp_max": 23.67,
        "pressure": 1014,
        "sea_level": 1014,
        "grnd_level": 1002,
        "humidity": 39,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 53
      },
      "wind": {
        "speed": 2.33,
        "deg": 39,
        "gust": 5.45
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2022-08-13 00:00:00"
    },
    {
      "dt": 1660359600,
      "main": {
        "temp": 22.11,
        "feels_like": 21.92,
        "temp_min": 22.11,
        "temp_max": 22.11,
        "pressure": 1013,
        "sea_level": 1013,
        "grnd_level": 1002,
        "humidity": 59,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 78
      },
      "wind": {
        "speed": 2.4,
        "deg": 73,
        "gust": 7.75
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2022-08-13 03:00:00"
    },
    {
      "dt": 1660370400,
      "main": {
        "temp": 23.84,
        "feels_like": 23.74,
        "temp_min": 23.84,
        "temp_max": 23.84,
        "pressure": 1013,
        "sea_level": 1013,
        "grnd_level": 1002,
        "humidity": 56,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "clouds": {
        "all": 44
      },
      "wind": {
        "speed": 4.57,
        "deg": 75,
        "gust": 7.5
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2022-08-13 06:00:00"
    },
    {
      "dt": 1660381200,
      "main": {
        "temp": 30.39,
        "feels_like": 29.38,
        "temp_min": 30.39,
        "temp_max": 30.39,
        "pressure": 1013,
        "sea_level": 1013,
        "grnd_level": 1001,
        "humidity": 33,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
        }
      ],
      "clouds": {
        "all": 14
      },
      "wind": {
        "speed": 3.26,
        "deg": 104,
        "gust": 4
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2022-08-13 09:00:00"
    }
  ],
  "city": {
    "id": 3054643,
    "name": "Budapest",
    "coord": {
      "lat": 47.4983,
      "lon": 19.0408
    },
    "country": "HU",
    "population": 1696128,
    "timezone": 7200,
    "sunrise": 1659929420,
    "sunset": 1659982124
  }
};