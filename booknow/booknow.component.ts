import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BooknowService } from '../services/booknow.service';
import { Booknow } from '../models/booknow';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-booknow',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './booknow.component.html',
  styleUrl: './booknow.component.css'
})
export class BooknowComponent{
  b:Booknow=new Booknow();
  constructor(private bServe:BooknowService)
  {

  }
  submitdata(addfrm:any)
  {
    
    if(addfrm.valid)
      {
       
        this.bServe.newBooknow(this.b).subscribe((data:Booknow)=>{
          if(data!=null)
            {
            alert('Thank you for booking')
            } 
            else
          alert('problem ocuured')
        })
      }
  }
  
}
