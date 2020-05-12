import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CoreOneOldModule } from './shared/components/core-one-old/core-one-old.module';
import { BoardModule } from './layout/board/board.module';

@NgModule({
   declarations: [
      AppComponent,
      LayoutComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      SharedModule,
      CoreOneOldModule,
      BoardModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
