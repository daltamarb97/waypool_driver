import { Component } from '@angular/core';

  
import { IonicPage } from 'ionic-angular';
import { sendUsersService } from '../../services/sendUsers.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { SignUpService } from '../../services/signup.service';
@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'FindridePage';
  tab2Root = 'MyridePage';
  tab4Root = 'WalletPage';
  tab5Root = 'MorePage';

  constructor(public signUpService: SignUpService, public angularFireAuth: AngularFireAuth) {

  }
}
