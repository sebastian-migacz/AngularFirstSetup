import { Component, OnInit } from '@angular/core';
import { Device } from '../interfaces/device';
import { DEVICES } from '../mockupTables/mock-devices';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})

export class DeviceComponent implements OnInit {

  coreDevices = DEVICES;
  selectedDevice?: Device;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(device: Device): void{
    this.selectedDevice = device;
  }

  terarium1st: Device = {
    deviceID: 1,
    deviceName: 'Initial terra',
    api_key: 'xD420XDXD'
  };
  

 

 
}
