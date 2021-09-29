import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';

import { Device } from '../interfaces/device';
import { DEVICES } from '../mockupTables/mock-devices';

@Injectable({
  providedIn: 'root'
})

export class DeviceService {

  constructor(private messageService: MessageService) { }

  getDevices(): Observable<Device[]> {
    const devices = of(DEVICES);
    this.messageService.add('DeviceService: fetched Devices');
    return devices;
  }
  
  getDevice(id: number): Observable<Device> {

    const device = DEVICES.find(h => h.deviceID == id)!;
      this.messageService.add('DeviceService: f dev id=${id}');
    return of (device);
  }
}


