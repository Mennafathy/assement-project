import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteComponent } from './autocomplete.component';
import { AutocompleteRoutingModule } from './autocomplete-rotuting.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [AutocompleteComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AutocompleteRoutingModule
  ]
})
export class AutocompleteModule { }
