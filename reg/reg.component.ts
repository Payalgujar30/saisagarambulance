import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Register } from '../models/register';
import { RegisterServiceService } from '../services/register-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reg',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './reg.component.html',
  styleUrl: './reg.component.css'
})
export class RegComponent implements OnInit{
  reg:Register=new Register();
  ngOnInit(): void {
    
  }
  constructor(private regServ:RegisterServiceService)
  {

  }
  submitdata(addfrm:any)
{
  if(addfrm.valid)
    {
      this.regServ.newUser(this.reg).subscribe((data:Register)=>{
        if(data!=null)
          alert('Registration Successfully')
        else
        alert('This email id or mobile no is  already registered')
      })
    }
}
}
