import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConvertComponent } from './components/convert/convert.component';
import { CompareComponent } from './components/compare/compare.component';

const routes: Routes = [
  { path: '', redirectTo: '/convert', pathMatch: 'full' },
  { path: 'convert', component: ConvertComponent },
  { path: 'compare', component: CompareComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
