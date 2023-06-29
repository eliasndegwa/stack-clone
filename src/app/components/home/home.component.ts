import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { QuestionService } from 'src/app/services/questionService/question.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  askQuestionForm!: FormGroup
  questions:any[]=[]

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router,
    private questionService: QuestionService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.askQuestionForm = this.formBuilder.group({
      heading: ['', Validators.required],
      description: ['', Validators.required],
      tags: ['', Validators.required]
    });

    this.questionService.getQuestions().subscribe(data => {
      this.questions = data;
    }, error => {
      this.toastr.warning('Error fetching questions:', error);
    });
  }

  submitQuestion(): void {
    if (this.askQuestionForm.invalid) {
      this.toastr.warning('Please enter correct details')      
    } else {
      const newQuestion={
        heading: this.askQuestionForm.value.heading,
        description: this.askQuestionForm.value.description,
        tags: this.askQuestionForm.value.tags
      }
      this.http.post('http://localhost:3000/questions',newQuestion).subscribe(()=>{
        this.toastr.success('Question added successfully')
      },
      (error)=>{
        this.toastr.warning('Registration failed',error)  
      }
      )
      this.closeModal()
      this.reloadPage()
    }
  }

  reloadPage(): void {
    window.location.reload()
  }

  

  openModal() {
    const modal = document.querySelector(".modal") as HTMLElement
    if (modal !== null) {
      modal.style.display = 'block'
    }
  }
  closeModal() {
    const modal = document.querySelector(".modal") as HTMLElement
    if (modal !== null) {
      modal.style.display = 'none'
    }
  }
}
