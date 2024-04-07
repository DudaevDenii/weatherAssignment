export type WeatherT = {
  latitude: number;
  longitude: number;
  hourly_units: {
    temperature_2m: string;
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
  };
};
