import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { PostService } from '../../_services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: Post[];

  constructor(private postService: PostService) { }

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
