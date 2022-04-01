import {Component, Input, OnInit} from '@angular/core';
import {Follower} from "./shared/follower.model";

@Component({
  selector: 'app-follower',
  templateUrl: './follower.component.html',
  styleUrls: ['./follower.component.scss']
})
export class FollowerComponent {
  @Input() follower: Follower = {} as Follower
}
