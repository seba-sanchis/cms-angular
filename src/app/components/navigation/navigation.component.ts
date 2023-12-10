import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  links = [
    {
      name: 'Dashboard',
      url: '/',
    },
    {
      name: 'Órdenes',
      url: '/orders',
    },
    {
      name: 'Productos',
      url: '/products',
    },
    {
      name: 'Usuarios',
      url: '/users',
    },
    {
      name: 'Contenido',
      url: '/content',
    },
  ];

  activeLink: string = '';

  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        this.activeLink = event.url;
      });
  }

  isActiveLink(url: string): boolean {
    return this.activeLink === url;
  }
}