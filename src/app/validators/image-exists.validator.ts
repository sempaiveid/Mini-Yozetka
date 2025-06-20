import { AbstractControl } from '@angular/forms';
import { Observable, of } from 'rxjs';

export function imageExistsValidator() {
  return (control: AbstractControl) => {
    const url = control.value;
    if (!url) {
      return of(null);
    }

    return new Observable(observer => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        observer.next(null);
        observer.complete();
      };
      img.onerror = () => {
        observer.next({ imageNotFound: true });
        observer.complete();
      };
    });
  };
}
