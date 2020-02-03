import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from "@ionic/storage";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"]
})
export class AppComponent {
  public appPages = [
    {
      title: "Home",
      url: "/home",
      icon: "home"
    },
    {
      title: "Curso Fiel",
      url: "/curso-fiel",
      icon: "school"
    },
    {
      title: "Kotel Travel",
      url: "/kotel-travel",
      icon: "airplane"
    },
    {
      title: "Feligreses",
      url: "/feligreses",
      icon: "contacts"
    },
    {
      title: "Mis recibos",
      url: "/recibos",
      icon: "paper"
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navCtrl: NavController,
    private storage: Storage
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logout() {
    this.storage.set("isUserLoggedIn", false);
    this.navCtrl.navigateForward("/login");
  }
}
