import { Pipe, PipeTransform } from '@angular/core';
import { Driver } from '../models/season.model';

@Pipe({
  name: 'driver'
})
export class DriverPipe implements PipeTransform {

  transform(value: Driver, ...args: unknown[]): unknown {
    return value ? `${value.givenName} ${value.familyName}` : '';
  }

}
