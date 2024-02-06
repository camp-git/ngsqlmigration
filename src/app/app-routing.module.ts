import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ss2pg',
    pathMatch: 'full',
  },
  {
    path: 'ss2pg',
    component: TestComponent,
    data: { source: 'SQL Server' },
  },
  {
    path: 'o2pg',
    component: TestComponent,
    data: { source: 'Oracle DB' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
