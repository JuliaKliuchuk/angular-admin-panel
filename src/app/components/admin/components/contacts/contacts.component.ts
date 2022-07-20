import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
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
    private activatedRoute: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.personList = this.activatedRoute.data.pipe(map((data) => data?.['users'] ))
  }
}
