import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  @Input() visible: boolean = false
  @Input() notFoundMessage: string = 'Nothing Found'
  @Input() resetLinkMessage: string = 'Back To homepage'
  @Input() resetLinkRoute: string = '/home'
  constructor() { }

  ngOnInit() { }
}