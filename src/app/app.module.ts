import { AuthService } from './services/auth.service';
import { RoutingModuleModule } from './routing-module.module';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from './services/users.service';
import { UserComponent } from './user/user.component';

import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { FormsModule } from '@angular/forms';

import { NavComponent } from './nav/nav.component';
import { UserDataComponent } from './user-data/user-data.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatTabsModule} from "@angular/material/tabs";
import {MatIconModule} from "@angular/material/icon";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { EditoriComponent } from './editori/editori.component';
import { AutoriComponent } from './autori/autori.component';
import { EditoriDetailComponent } from './editori-detail/editori-detail.component';
import { AutoriDetailComponent } from './autori-detail/autori-detail.component';



import { AutoriCreateComponent } from './autori-create/autori-create.component';
import { EditoriCreateComponent } from './editori-create/editori-create.component';
import { LibriCreateComponent } from './libri-create/libri-create.component';
import { PrestitiCreateComponent } from './prestiti-create/prestiti-create.component';
import { PrestitiDetailComponent } from './prestiti-detail/prestiti-detail.component';
import { LibriDetailComponent } from './libri-detail/libri-detail.component';
import { LibriComponent } from './libri/libri.component';
import { PrestitiComponent } from './prestiti/prestiti.component';
import { NavAdminComponent } from './nav-admin/nav-admin.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatListModule} from "@angular/material/list";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule, MAT_DATE_LOCALE} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import {MatGridListModule} from "@angular/material/grid-list";
import { RichiesteComponent } from './richieste/richieste.component';
import { RichiesteDetailComponent } from './richieste-detail/richieste-detail.component';
import { RichiesteUserComponent } from './richieste-user/richieste-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import { UtenteComponent } from './utente/utente.component';
import {MatDialogModule} from '@angular/material/dialog';
import { TestComponent } from './test/test.component';















@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
      UserDetailComponent,
      NavComponent,
      UserDataComponent,
      LoginComponent,
      SignupComponent,
      EditoriComponent,
      AutoriComponent,
      EditoriDetailComponent,
      AutoriDetailComponent,
      AutoriCreateComponent,
      EditoriCreateComponent,
      LibriCreateComponent,
      PrestitiCreateComponent,
      PrestitiDetailComponent,
      LibriDetailComponent,
      LibriComponent,
      PrestitiComponent,
      NavAdminComponent,
      DashboardComponent,
      BookComponent,
      RichiesteComponent,
      RichiesteDetailComponent,
      RichiesteUserComponent,
      UtenteComponent,
      TestComponent
   ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        RoutingModuleModule,
        MatFormFieldModule,
        MatCardModule,
        MatTabsModule,
        MatIconModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatMenuModule,
        MatTableModule,
        MatButtonModule,
        MatInputModule,
        MatSnackBarModule,
        RouterModule,
        MatProgressSpinnerModule,
        MatSidenavModule,
        MatSlideToggleModule,
        MatListModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        MatGridListModule,
        Ng2SearchPipeModule,
        MatAutocompleteModule,
        MatSlideToggleModule,
        MatDialogModule


    ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'it-IT'},
    UserService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
