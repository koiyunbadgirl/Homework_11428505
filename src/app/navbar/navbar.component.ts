import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { StorageService } from '../service/storage.service';
import { CountdownModule } from 'ngx-countdown';
import { Router, RouterModule, RouterStateSnapshot } from '@angular/router';
import { TimerService } from '../service/timer.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    CountdownModule,
    RouterModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent{
  name: string = '';
  time: string  = this.timerService.display;

  constructor(private storageService: StorageService, private router: Router,private timerService: TimerService) {
  }
  ngOnInit() {
    this.name = this.storageService.getUser().fullName
      ? this.storageService.getUser().fullName
      : '';
    this.time = "";
  }
  logout() {
    this.storageService.clean();
    this.router.navigate(['/login'], {});
  }
}