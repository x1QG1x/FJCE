import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RawMaterialProvider } from '../providers/raw-material/raw-material';
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {TabsPage} from "../pages/tabs/tabs";
import {JournalPage} from "../pages/journal/journal";
import {RecipePage} from "../pages/recipe/recipe";
import {StockPage} from "../pages/stock/stock";
import {ConsumptionPage} from "../pages/consumption/consumption";
import {NewStockPage} from "../pages/new-stock/new-stock";
import {ReactiveFormsModule} from "@angular/forms";
import { RecipeProvider } from '../providers/recipe/recipe';
import {NewRecipePage} from "../pages/new-recipe/new-recipe";
import {EditProductionPage} from "../pages/edit-production/edit-production";
import {EditStockModificationPage} from "../pages/edit-stock-modification/edit-stock-modification";
import {EditStockModificationDetailPage} from "../pages/edit-stock-modification-detail/edit-stock-modification-detail";
import {LoginPage} from "../pages/login/login";
import {AngularFireAuthModule} from "angularfire2/auth";
import {devEnv, prodEnv} from "./environments";
import {SettingsPage} from "../pages/settings/settings";
import { VersionProvider } from '../providers/version/version';
import {Http, HttpModule} from "@angular/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {IonicStorageModule} from "@ionic/storage";

let firebaseConfig = process.env.IONIC_ENV === "dev" ? devEnv.firebase : prodEnv.firebase;

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    JournalPage,
    RecipePage,
    StockPage,
    ConsumptionPage,
    NewStockPage,
    NewRecipePage,
    EditProductionPage,
    EditStockModificationPage,
    EditStockModificationDetailPage,
    LoginPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    JournalPage,
    RecipePage,
    StockPage,
    ConsumptionPage,
    NewStockPage,
    NewRecipePage,
    EditProductionPage,
    EditStockModificationPage,
    EditStockModificationDetailPage,
    LoginPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RawMaterialProvider,
    RecipeProvider,
    VersionProvider
  ]
})
export class AppModule {}
