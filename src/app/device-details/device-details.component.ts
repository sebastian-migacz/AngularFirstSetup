import { Component, OnInit, Input } from '@angular/core';
import { Device } from '../interfaces/device';
import { DEVICES } from '../mockupTables/mock-devices';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css']
})
export class DeviceDetailsComponent implements OnInit {

  @Input() device?: Device;
  constructor() { }

  ngOnInit(): void {
  }

}
