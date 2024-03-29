import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteComponent } from './autocomplete.component';


const routes: Routes = [{ path: '', component: AutocompleteComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutocompleteRoutingModule { }
