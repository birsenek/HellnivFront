import { MatDialogModule } from '@angular/material/dialog';
import { AuthGuard } from './components/guards/auth.guard';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { HomeComponent } from './views/home/home.component';

import { CardCrudComponent } from './views/card-crud/card-crud.component';
import { CardCreateComponent } from './components/card/card-create/card-create.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CardReadTemplateComponent } from './components/card/card-read-template/card-read-template.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CardUpdateComponent } from './components/card/card-update/card-update.component';
import { CardDeleteComponent } from './components/card/card-delete/card-delete.component';
import { UserCrudComponent } from './views/user-crud/user-crud.component';
import { UserReadComponent } from './components/user/user-read/user-read.component';
import { UserCreateComponent } from './components/user/user-create/user-create.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { LoginComponent } from './components/user/login/login.component';
import { JwtModule } from '@auth0/angular-jwt';
import { CardModalComponent } from './components/card-modal/card-modal.component';

export function tokenGetter() {
  return localStorage.getItem("jwt");
} 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CardCrudComponent,
    CardCreateComponent,
    CardReadTemplateComponent,
    CardUpdateComponent,
    CardDeleteComponent,
    UserCrudComponent,
    UserReadComponent,
    UserCreateComponent,
    LoginComponent,
    CardModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    CdkAccordionModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:7111", "localhost:4200"],
        disallowedRoutes: []
      }
    })
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
