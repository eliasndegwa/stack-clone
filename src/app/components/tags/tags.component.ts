import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Tag } from 'src/app/Interfaces';
import { TagService } from 'src/app/services/tagService/tag.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit{
  tags: Tag[]=[]
  constructor(private tagService: TagService, private toastr: ToastrService){}

  ngOnInit(): void {
    this.tagService.getTags().subscribe(data => {
      this.tags = data
    }, error => {
      this.toastr.warning('Error fetching questions:', error);
    });
  }
}
