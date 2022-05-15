import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HistoryComponent } from './pages/history/history.component';
import { ScannerComponent } from './pages/scanner/scanner.component';

const routes: Routes = [
  {path: '', redirectTo: 'scanner', pathMatch: 'full'},
  {path: 'scanner', component: ScannerComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
