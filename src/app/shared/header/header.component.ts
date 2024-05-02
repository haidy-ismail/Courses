import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  @ViewChild('navbar', { static: true }) navbar: ElementRef<HTMLElement> | undefined;

  isMobileNavOpen: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.updateActiveNavLinks();

    // Listen to router events to update active navbar links on route changes
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateActiveNavLinks();
      }
    });
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    // Update active navbar links on window scroll
    this.updateActiveNavLinks();
  }

  private updateActiveNavLinks(): void {
    if (!this.navbar) return;

    const position = window.scrollY + 200;
    const navbarLinks = this.navbar.nativeElement.querySelectorAll('.scrollto');
    
    navbarLinks.forEach((link: Element) => {
        // Cast link to HTMLElement to access properties like classList
        const htmlLink = link as HTMLElement;
        
        // Clear active class from all links
        htmlLink.classList.remove('active');

        const href = htmlLink.getAttribute('href') || htmlLink.getAttribute('routerLink');
        if (!href) return;

        const section = document.querySelector(href);
        if (!section) return;

        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        const sectionBottom = sectionTop + section.clientHeight;

        // Add active class to the link if it's within the section range
        if (position >= sectionTop && position <= sectionBottom) {
            htmlLink.classList.add('active');
        }
    });
}


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
