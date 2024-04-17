import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isMobileNavOpen: boolean = false;

  toggleMobileNav() {
    const navbar = document.querySelector('#navbar');
    if (navbar !== null) {
      navbar.classList.toggle('navbar-mobile');
    }
    const toggleButton = document.querySelector('.mobile-nav-toggle');
    if (toggleButton !== null) {
      toggleButton.classList.toggle('bi-list');
      toggleButton.classList.toggle('bi-x');
    }
  }

  toggleDropdown(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    const navbar = document.querySelector('#navbar') as HTMLElement;
    if (navbar !== null && navbar.classList.contains('navbar-mobile')) {
      event.preventDefault();
      const dropdown = target.nextElementSibling;
      if (dropdown !== null) {
        dropdown.classList.toggle('dropdown-active');
      }
    }
  }
  

  scrollToElement(hash: string) {
    const element = document.querySelector(hash);
    if (element !== null) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollTo(hash: string) {
    const navbar = document.querySelector('#navbar');
    if (navbar !== null && navbar.classList.contains('navbar-mobile')) {
      navbar.classList.remove('navbar-mobile');
      const navbarToggle = document.querySelector('.mobile-nav-toggle');
      if (navbarToggle !== null) {
        navbarToggle.classList.toggle('bi-list');
        navbarToggle.classList.toggle('bi-x');
      }
    }
    this.scrollToElement(hash);
  }

  // toggleDropdown(event: MouseEvent) {
  //   event.preventDefault();
  //   const target = event.currentTarget as HTMLElement;
  //   const dropdown = target.nextElementSibling;
  //   if (dropdown !== null) {
  //     dropdown.classList.toggle('dropdown-active');
  //   }
  // }
  

}
