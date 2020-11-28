import { Component } from '@angular/core';
import { Person } from './model/person';
import { ApiService } from './service/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'httpclient-headers-app';

  people: Person[] | undefined;
  person = new Person();

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.refreshPeople()
  }

  refreshPeople() {
    this.apiService.getPeopleDelete()
      .subscribe(data => {
        this.people = data;
      })

  }

  addPerson() {
    this.apiService.addPerson(this.person)
      .subscribe(data => {
        this.person = new Person();
        this.refreshPeople();
      })

  }
}
