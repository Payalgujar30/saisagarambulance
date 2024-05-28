import { Component, OnInit } from '@angular/core';
import { RegisterServiceService } from '../services/register-service.service';
import { Register } from '../models/register';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './log.component.html',
  styleUrl: './log.component.css'
})
export class LogComponent{
 reg:Register=new Register();
 constructor(private regServ:RegisterServiceService,private router:Router)
 {

 }
 submitdata(addfrm:any)
{
  if(addfrm.valid)
    {
      this.regServ.login(this.reg).subscribe((data:Register)=>{
        if(data!=null)
          {
            localStorage.setItem("emailid",data.emailid)
            localStorage.setItem("name",data.name)
            alert('Login Successful')
            this.router.navigate(['/'])
          }
        else
        alert('problem ocuured')
        
      })
    }
}
}

