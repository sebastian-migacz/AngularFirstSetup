import { Injectable } from '@angular/core';

import { Device } from './interfaces/device';
import { DEVICES } from './mockupTables/mock-devices';

@Injectable({
  providedIn: 'root'
})

export class DeviceService {

  constructor() { }

  getDevices(): Device[] {
    return DEVICES;
  }
}

