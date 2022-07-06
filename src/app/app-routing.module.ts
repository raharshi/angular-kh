import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { CommunicationComponent } from './communication/communication.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'communication', component: CommunicationComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'forms', component: FormsComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
