import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ourservice',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './ourservice.component.html',
  styleUrl: './ourservice.component.css'
})
export class OurserviceComponent {

}
