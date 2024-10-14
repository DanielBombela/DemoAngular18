import { Component, computed, input, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MATERIAL_MODULES } from '../shared/material/material.imports';
import { animate, style, transition, trigger } from '@angular/animations';
import ItemMenuComponent from '../shared/components/item-menu/item-menu.component';

export const menuItems: any[] = [
  {
    icon: 'dashboard',
    label: 'Dashboard',
    route: 'dashboard',
  },
  {
    icon: 'analytics',
    label: 'Catalogos',
    route: 'dashboard/catalogs',
  },
/**
 *   {
    icon: 'video_library',
    label: 'Content',
    route: 'content',

    subItems: [
      {
        icon: 'play_circle',
        label: 'Videos',
        route: 'videos',

        subItems: [
          {
            icon: 'movie',
            label: 'Shorts',
            route: 'shorts',

            subItems: [
              {
                icon: 'play_circle',
                label: 'Videos',
                route: 'videos',

              },
            ],
          },
          {
            icon: 'tv',
            label: 'Long Form',
            route: 'long-form',

          },
        ],
      },
      {
        icon: 'playlist_play',
        label: 'Playlists',
        route: 'playlists',

      },
      {
        icon: 'post_add',
        label: 'Posts',
        route: 'posts',

      },
    ],
  },
  {
    icon: 'analytics',
    label: 'Analytics',
    route: 'analytics',

  },
  {
    icon: 'comment',
    label: 'Comments',
    route: 'comments',

  },
 */
];

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule,MATERIAL_MODULES, ItemMenuComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  animations: [
    trigger('expandContractMenu', [
      transition(':enter', [
        style({ opacity: 0, height: '0px' }),
        animate('500ms ease-in-out', style({ opacity: 1, height: '*' })),
      ]),
      transition(':leave', [
        animate('500ms ease-in-out', style({ opacity: 0, height: '0px' })),
      ]),
    ]),
  ],
})
export default class DashboardComponent {
  collapsed = signal(true);
  sidenavWidth = computed(() => (this.collapsed() ? '65px' : '250px'));
  menuItems = menuItems;

  profilePicSize = computed(() => (this.collapsed() ? '32' : '100'));
  folders: any[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    },
  ];
  routeHistory = input('');

  level = computed(() => this.routeHistory().split('/').length - 1);
  indentation = computed(() =>
    this.collapsed() ? '16px' : `${16 + this.level() * 16}px`
  );

  nestedItemOpen = signal(false);


  selectedItem: number | null = null;
  collapsedd: boolean = true;  // Controla si los subítems están colapsados o no

  selectItem(index: number) {
    this.selectedItem = index;
  }

  toggleSubItems() {
    this.collapsedd = !this.collapsedd;  // Alterna entre colapsar y expandir
  }
}
