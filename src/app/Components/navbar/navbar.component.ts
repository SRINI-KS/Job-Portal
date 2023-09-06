import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit {
  @ViewChild ('menu_button ')  button!:ElementRef;

   @ViewChild ('menu')  menu!:ElementRef;



 ngAfterViewInit(): void {
  this.button.nativeElement.addEventListener('click', () => {
        this.menu.nativeElement.classList.toggle('hidden');
       }); 
 }

}
