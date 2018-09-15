import { PostService } from './../../_services/post.service';
import { Post } from './../../models/post';
import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  @Output() postCreated = new EventEmitter<Post>();

  constructor(private postService: PostService) {}

  onSave(form: NgForm) {
    const post: Post = {
      id: 0,
      title: form.value.title,
      content: form.value.content
    };
    this.postService.createPost(post).subscribe((data: Post) => {
      this.postCreated.emit(data);
      form.reset();
    }, error => {
      alert(error);
    });
  }
}
