import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTableModule, MatButtonModule, MatFormFieldModule } from '@angular/material';

import { WelcomeComponent } from './welcome/welcome.component';
import { UploadComponent } from './upload/upload.component';
import { ResultDetailComponent } from './result-detail/result-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



const appRoutes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent,
    data: { title: 'Welcome Page' }
  },
  {
    path: 'upload-data',
    component: UploadComponent,
    data: { title: 'Upload Data' }
  },
  {
    path: 'result-details',
    component: ResultDetailComponent,
    data: { title: 'Result Details' }
  },
  { path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    UploadComponent,
    ResultDetailComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
