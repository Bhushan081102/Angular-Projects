import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TuneRepositoryComponent } from './tune-repository/tune-repository.component';
// we need to import this first
import { HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    TuneRepositoryComponent,
  ],
  imports: [
    BrowserModule,
    //And also import here also
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
