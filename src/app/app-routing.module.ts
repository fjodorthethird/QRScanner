import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './pages/history/history.component';
import { ScannerComponent } from './pages/scanner/scanner.component';
import { GeneratorComponent } from './pages/generator/generator.component';

const routes: Routes = [
  {path: '', redirectTo: 'scanner', pathMatch: 'full'},
  {path: 'scanner', component: ScannerComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'generator', component: GeneratorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
