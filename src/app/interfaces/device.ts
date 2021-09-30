import { Settings } from "./settings";

export interface Device {

  deviceName : string;
  deviceID : number;
  api_key : string;

  settings : Settings;
}
