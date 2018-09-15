import { PostService } from './../../_services/post.service';
import { Post } from './../../models/post';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  @Input() posts: Post[];

  constructor(private postService: PostService) {}

  reloadPosts() {
    this.postService.getPosts().subscribe((data: Post[]) => {
      this.posts = data;
    }, error => {
      alert(error);
    });
  }

  delete(id) {
    const accept = confirm('Are you sure you want to delete the post?');
    if (accept) {
      this.postService.deletePost(id).subscribe(() => {
        this.reloadPosts();
        alert('Post is deleted.');
      }, error => {
        alert(error);
      });
    }
  }

}
