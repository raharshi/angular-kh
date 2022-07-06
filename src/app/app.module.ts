import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { CommunicationComponent } from './communication/communication.component';
import { ParentComponent } from './communication/parent/parent.component';
import { ChildComponent } from './communication/child/child.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { CpParentComponent } from './content-projection/cp-parent/cp-parent.component';
import { CpChildComponent } from './content-projection/cp-child/cp-child.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';
import { UserService } from './services/user.service';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { ObservableExamplesComponent } from './observable-examples/observable-examples.component';
import { SubjectComponent } from './observable-examples/subject/subject.component'
import { SharedService } from './services/shared.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BindingComponent,
    DirectivesComponent,
    CommunicationComponent,
    ParentComponent,
    ChildComponent,
    ContentProjectionComponent,
    CpParentComponent,
    CpChildComponent,
    FormsComponent,
    ReactiveFormsComponent,
    UsersComponent,
    UserComponent,
    ObservableExamplesComponent,
    SubjectComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [UserService, SharedService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
