import { Component } from '@angular/core';

import { MyridePage } from '../myride/myride';
import { ChatsPage } from '../chats/chats';
// import { ListridePage } from '../listride/listride';
import { WalletPage } from '../wallet/wallet';
import { MorePage } from '../more/more';
import { FindridePage } from '../findride/findride';
import { RatetripPage } from '../ratetrip/ratetrip';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FindridePage;
  tab2Root = MyridePage;
  tab4Root = WalletPage;
  tab5Root = MorePage;

  constructor() {

  }
}
