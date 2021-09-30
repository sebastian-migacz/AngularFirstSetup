import { Time } from "@angular/common";

export interface Settings {

    sprinklerStatus: boolean;
    waterfallStatus: boolean;
    growlightStatus: boolean;
    heatStatus: boolean;

    sprinklerOnTime?: Time;
    waterfallOnTime?: Time;
    growlightOnTime?: Time;

    heatTargetTemp?: number | 24;
    sprinklerTargetHum?: number | 65;

    sprinklerOffTime?: Time;
    waterfallOffTime?: Time;
    growlightOffTime?: Time;

    rgb_R: number;
    rgb_G: number;
    rgb_B: number;

  }