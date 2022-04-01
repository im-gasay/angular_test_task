import {Component, HostListener} from '@angular/core';
import {Follower} from "./follower/shared/follower.model";
import {FollowerService} from "./follower/shared/FollowerService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular_test_task';
  page = 1

  followers: Follower[] = []

  constructor(
    private followerService: FollowerService,
  ) {
    followerService.getFollowers().subscribe(followers => this.followers = followers)
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    let endPage = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    )

    if (window.scrollY + window.innerHeight >= endPage) {
      console.log(true)
      this.page++
      this.followerService.getFollowers(this.page).subscribe(followers => this.followers.push(...followers))
    }

  }
}
