import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminService } from '../../services/admin.service';
import { User } from '../../user';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  personList!: Observable<User[]>;

  constructor(
    private adminservice: AdminService
  ) { }

  ngOnInit(): void {
    this.personList = this.adminservice.getPersonList();
  }

}
