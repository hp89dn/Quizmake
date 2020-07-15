import { PagesModule } from './pages/pages.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthModule } from './auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

// 2. Add your credentials from step 1
const config = {
  apiKey: "AIzaSyD6clAI3VjsAnVOIBRlwGOlqoTwa4_y_PE",
  authDomain: "quiz-dtu-2020.firebaseapp.com",
  databaseURL: "https://quiz-dtu-2020.firebaseio.com",
  projectId: "quiz-dtu-2020",
  storageBucket: "quiz-dtu-2020.appspot.com",
  messagingSenderId: "36689406666",
  appId: "1:36689406666:web:235cadee0a28bb0e16e233"
};
import * as firebase from 'firebase';
import { environment } from 'src/environments/environment';

firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    PagesModule,

    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }