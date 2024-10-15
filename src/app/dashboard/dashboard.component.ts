import { ChangeDetectorRef, Component, OnInit, computed, inject, input, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { MATERIAL_MODULES } from '../shared/material/material.imports';
import { animate, style, transition, trigger } from '@angular/animations';
import ItemMenuComponent from '../shared/components/item-menu/item-menu.component';
import { MediaMatcher } from '@angular/cdk/layout';
import CatalogsComponent from "./catalogs/catalogs.component";


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, MATERIAL_MODULES, ItemMenuComponent, RouterLink, RouterModule, CatalogsComponent],
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
export default class DashboardComponent implements OnInit {
  mobileQuery!: MediaQueryList;
   route = inject(Router);
   ActivatedRoute = inject(ActivatedRoute);

  private _mobileQueryListener: () => void;
  constructor() {
    const changeDetectorRef = inject(ChangeDetectorRef);
    const media = inject(MediaMatcher);

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
itemsMenu:any [] = [
  {name:'Instancias',icon:'apartment',children:[], route:"/dashboard/instances", isActive:false},
  {
    name:'Catalogos',
    icon:'list_alt',
  children:[
    {name:'Países',icon:'public', route:"/dashboard/catalogs", isActive:false},
   // {name:'Países',Icon:'dashboard', route:"", isActive:false},
   // {name:'Países',Icon:'dashboard', route:"", isActive:false}
  ],
  route:null,
  isActive:false
}
]

  collapsed = signal(true);
  sidenavWidth = computed(() => (this.collapsed() ? '65px' : '250px'));

  profilePicSize = computed(() => (this.collapsed() ? '60' : '110'));

  selectedItem: any;


ngOnInit(): void {
  const currentRoute = this.route.url; // Obtiene la ruta actual

    // Recorrer el array itemsMenu para buscar coincidencias
    this.itemsMenu.forEach(item => {
      // Comprobar si la ruta del item coincide con la actual
      if (item.route === currentRoute) {
        item.isActive = true;
      } else {
        item.isActive = false;
      }

      // Si tiene hijos, comprobar también
      item.children.forEach((subItem:any) => {
        if (subItem.route === currentRoute) {
          subItem.isActive = true;
          item.isActive = true; // Esto es para que también el padre se marque como activo
        } else {
          subItem.isActive = false;
        }
      });
    });
  }



  //TABLA
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];;
}


