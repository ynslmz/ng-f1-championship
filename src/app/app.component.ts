import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { App } from './shared/store/app.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NgMobiquity';

  constructor(store: Store) {
    store.dispatch(new App.LoadSeasons())
  }

}
