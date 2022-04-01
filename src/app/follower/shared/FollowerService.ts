import {HttpClient} from "@angular/common/http";
import {Follower} from "./follower.model";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FollowerService {
  constructor(private httpClient: HttpClient) {
  }

  getFollowers(page: number = 1) {
    return this.httpClient.get<Follower[]>(`https://api.github.com/users/mosh-hamedani/followers?page=${page}`)
  }
}
