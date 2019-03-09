import { Component } from '@angular/core';

  
import { IonicPage } from 'ionic-angular';
@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'FindridePage';
  tab2Root = 'MyridePage';
  tab4Root = 'WalletPage';
  tab5Root = 'MorePage';

  constructor() {

  }
}
