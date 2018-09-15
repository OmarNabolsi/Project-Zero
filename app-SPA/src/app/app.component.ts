import { Post } from './models/post';
import { Component, OnInit } from '@angular/core';
import { PostService } from './_services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  posts: Post[];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.getPosts().subscribe((data: Post[]) => {
      this.posts = data;
    }, error => {
      alert(error);
    });
  }

  onPostAdded() {
    this.loadPosts();
  }
}
