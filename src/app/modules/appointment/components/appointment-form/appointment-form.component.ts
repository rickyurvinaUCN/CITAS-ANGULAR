import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { UserService } from '../../services/user.service';
import { UserInteface } from '../../models/owner-model';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
})
export class AppointmentFormComponent implements OnInit, OnDestroy {
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading: boolean;
  private unsubscribe: Subscription[] = [];

  users!:Observable<UserInteface[]>;

  constructor(private cdr: ChangeDetectorRef,
    private userService:UserService) {
    const loadingSubscr = this.isLoading$
      .asObservable()
      .subscribe((res) => (this.isLoading = res));
    this.unsubscribe.push(loadingSubscr);
    this.users = this.userService.getAll();

  }

  ngOnInit(): void {
    this.getAllUsers();
  }


  getAllUsers(){
    this.users = this.userService.getAll();
    console.log(this.users)
  }

  saveSettings() {
    this.isLoading$.next(true);
    setTimeout(() => {
      this.isLoading$.next(false);
      this.cdr.detectChanges();
    }, 1500);
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
