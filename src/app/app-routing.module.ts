import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConvertComponent } from './components/convert/convert.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
