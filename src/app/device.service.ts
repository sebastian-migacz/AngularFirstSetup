import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Device } from './interfaces/device';
import { DEVICES } from './mockupTables/mock-devices';

@Injectable({
  providedIn: 'root'
})

export class DeviceService {

  constructor() { }

  getDevices(): Observable<Device[]> {
    const devices = of(DEVICES);
    return devices;
  }
}

