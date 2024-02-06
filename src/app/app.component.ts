import { HttpClient } from '@angular/common/http';
import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private readonly router: Router) {}
  navigateto(selectedMigration:any) {
    console.log(selectedMigration.value);
    this.router.navigate([selectedMigration.value]);
  }
}
