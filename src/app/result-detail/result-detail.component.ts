import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  id: number;
  name: string;
  gender: string;
  address: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Gregg J. Loyd', gender: 'Male', address: '3073 Manitoba Street,  Bracebridge, ON P1L 2B7'},
  {id: 2, name: 'Arthur N. Pearsall', gender: 'Male', address: '149 Heatherleigh,  Cooksville, ON L5A 1V9'},
  {id: 3, name: 'Jeanne R. Shepherd', gender: 'Female', address: '4150 Blanshard,  Victoria, BC V8W 2H9'},
  {id: 4, name: 'Edison K. Coffey', gender: 'Male', address: '2637 Nelson Street,  Larder Lake, ON P0K 1L0'},
  {id: 5, name: 'Carolyn R. Jackson', gender: 'Female', address: '1392 Queens Sq,  Hespeler, ON N3C 1H3'},
]

@Component({
  selector: 'app-result-detail',
  templateUrl: './result-detail.component.html',
  styleUrls: ['./result-detail.component.scss']
})

export class ResultDetailComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['id', 'name', 'gender', 'address'];
  dataSource = ELEMENT_DATA;

  ngOnInit() {
  }

}
