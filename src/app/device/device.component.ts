import { Component, OnInit } from '@angular/core';
import { Device } from '../interfaces/device';
import { DEVICES } from '../mockupTables/mock-devices';
import { DeviceService } from '../services/device.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})

export class DeviceComponent implements OnInit {

  coreDevices = DEVICES;
  selectedDevice?: Device;
  devices: Device[] = [];

  constructor(private deviceService: DeviceService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getDevices();
  }

  onSelect(device: Device): void{
    this.selectedDevice = device;
    this.messageService.add('DeviceComponent: Selected devices id=${device.deviceID}');
  }

  terarium1st: Device = {
    deviceID: 1,
    deviceName: 'Initial terra',
    api_key: 'xD420XDXD'
  };
  
  getDevices(): void {
    this.deviceService.getDevices()
        .subscribe(devices => this.coreDevices = this.coreDevices);
  
}
 
}
