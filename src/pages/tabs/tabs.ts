import { Component } from '@angular/core';

  
import { IonicPage } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { SignUpService } from '../../services/signup.service';
@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = 'WalletPage';

  tab2Root = 'FindridePage';

  tab3Root = 'MorePage';

  constructor(public signUpService: SignUpService, public angularFireAuth: AngularFireAuth) {

  }
}
