export interface CurrentWeather {
    coord: Coord;
    weather: Weather[];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
}

export interface Coord {
    lon: number;
    lat: number;
}

export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
}

export interface Wind {
    speed: number;
    deg: number;
}

export interface Clouds {
    all: number;
}

export interface Sys {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
}

export interface HourlyWeather {
    cod: string;
    message: number;
    cnt: number;
    list: List[];
    city: City;
}

export interface City {
    id: number;
    name: string;
    coord: Coord;
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
}

export interface List {
    dt: number;
    main: MainHourly;
    weather: Weather[];
    clouds: Clouds;
    wind: WindHourly;
    visibility: number;
    pop: number;
    rain?: Rain;
    sys: sysHourly;
    dt_txt: string;
}

export interface MainHourly {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
}

export interface WindHourly {
    speed: number;
    deg: number;
    gust: number;
}

export interface sysHourly {
    pod: string;
}

export interface Rain{
    "1h"?: number;
    "3h"?: number;
}

/*
##      ## ######## ######## ##    ## ##       ##    ## 
##  ##  ## ##       ##       ##   ##  ##        ##  ##  
##  ##  ## ##       ##       ##  ##   ##         ####   
##  ##  ## ######   ######   #####    ##          ##    
##  ##  ## ##       ##       ##  ##   ##          ##    
##  ##  ## ##       ##       ##   ##  ##          ##    
 ###  ###  ######## ######## ##    ## ########    ##    

 ##      ## ########    ###    ######## ##     ## ######## ########  
##  ##  ## ##         ## ##      ##    ##     ## ##       ##     ## 
##  ##  ## ##        ##   ##     ##    ##     ## ##       ##     ## 
##  ##  ## ######   ##     ##    ##    ######### ######   ########  
##  ##  ## ##       #########    ##    ##     ## ##       ##   ##   
##  ##  ## ##       ##     ##    ##    ##     ## ##       ##    ##  
 ###  ###  ######## ##     ##    ##    ##     ## ######## ##     ## 
 */

export interface ForecastWeather{
    location: Location;
    current: Current;
    forecast: Forecast;
}

export interface Location {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
}

export interface Condition {
    text: string;
    icon: string;
    code: number;
}

export interface Current {
    last_updated_epoch: number;
    last_updated: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: Condition;
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    vis_km: number;
    vis_miles: number;
    uv: number;
    gust_mph: number;
    gust_kph: number;
}

export interface Condition2 {
    text: string;
    icon: string;
    code: number;
}

export interface Day {
    maxtemp_c: number;
    maxtemp_f: number;
    mintemp_c: number;
    mintemp_f: number;
    avgtemp_c: number;
    avgtemp_f: number;
    maxwind_mph: number;
    maxwind_kph: number;
    totalprecip_mm: number;
    totalprecip_in: number;
    avgvis_km: number;
    avgvis_miles: number;
    avghumidity: number;
    daily_will_it_rain: number;
    daily_chance_of_rain: number;
    daily_will_it_snow: number;
    daily_chance_of_snow: number;
    condition: Condition2;
    uv: number;
}

export interface Astro {
    sunrise: string;
    sunset: string;
    moonrise: string;
    moonset: string;
    moon_phase: string;
    moon_illumination: string;
}

export interface Condition3 {
    text: string;
    icon: string;
    code: number;
}

export interface Hour {
    time_epoch: number;
    time: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: Condition3;
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    windchill_c: number;
    windchill_f: number;
    heatindex_c: number;
    heatindex_f: number;
    dewpoint_c: number;
    dewpoint_f: number;
    will_it_rain: number;
    chance_of_rain: number;
    will_it_snow: number;
    chance_of_snow: number;
    vis_km: number;
    vis_miles: number;
    gust_mph: number;
    gust_kph: number;
    uv: number;
}

export interface Forecastday {
    date: string;
    date_epoch: number;
    day: Day;
    astro: Astro;
    hour: Hour[];
}

export interface Forecast {
    forecastday: Forecastday[];
}