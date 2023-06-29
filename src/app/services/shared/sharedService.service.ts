import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Question } from "src/app/Interfaces";
@Injectable({
    providedIn:"root"
})
export class SharedService{
    private  QuestionSubject=new Subject<Question>
    private question$ = this.QuestionSubject.asObservable()
    getQuestion(question:Question){
        return this.QuestionSubject.next(question)
    }
}