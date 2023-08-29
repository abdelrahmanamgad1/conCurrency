import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorInterceptor } from './core/interceptors/error-catching.interceptor';
import { NavigationFormComponent } from './components/navigation-form/navigation-form.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ConvertComponent } from './components/convert/convert.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ApiService } from './core/services/api.service';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { RateCardComponent } from './components/rate-card/rate-card.component';
import { CompareComponent } from './components/compare/compare.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { KeyFilterModule } from 'primeng/keyfilter';
import { SpinnerComponent } from './shared/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationFormComponent,
    LandingPageComponent,
    RateCardComponent,
    ConvertComponent,
    CompareComponent,
    FavouritesComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    DropdownModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    DynamicDialogModule,
    KeyFilterModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
    ApiService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
