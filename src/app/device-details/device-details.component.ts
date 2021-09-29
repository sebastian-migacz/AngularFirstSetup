import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';

import { DeviceService } from '../services/device.service';
import { Device } from '../interfaces/device';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css']
})

export class DeviceDetailsComponent implements OnInit {

 device: Device | undefined;

  constructor(
    private route: ActivatedRoute,
    private deviceServices: DeviceService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getDevice();
  }

  getDevice(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));
    this.deviceServices.getDevice(id)
      .subscribe(device => this.device = device);
  }

  goBack(): void {
    this.location.back();
  }
}
