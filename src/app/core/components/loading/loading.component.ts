import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/shared/store/app.state';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  @Select(AppState.selectIsLoading) visibility$!: Observable<boolean>
}

