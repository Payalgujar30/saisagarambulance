import { Component } from '@angular/core';
import { Feedback } from '../models/feedback';
import { FeedbackService } from '../services/feedback.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
f:Feedback=new Feedback();
constructor(private fServ:FeedbackService)
{

}
submitdata(addfrm:any)
{
  if(addfrm.valid)
    {
      this.f.emailid=localStorage.getItem("emailid")
      this.f.name=localStorage.getItem("name")
      this.fServ.newFeedback(this.f).subscribe((data:Feedback)=>{
        if(data!=null)
          alert('Thank you for feedback')
        else
        alert('problem ocuured')
      })
    }
}
}