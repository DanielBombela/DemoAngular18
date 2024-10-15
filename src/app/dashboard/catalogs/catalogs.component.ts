import { Component, OnInit,  input, viewChild } from '@angular/core';
import { MATERIAL_MODULES } from '../../shared/material/material.imports';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-catalogs',
  standalone: true,
  imports: [MATERIAL_MODULES],
  templateUrl: './catalogs.component.html',
  styleUrl: './catalogs.component.scss'
})
export default class CatalogsComponent<T>  implements OnInit{
  displayedColumns = input.required<string[]>();
  data = input.required<T[]>();
  dataSource = new MatTableDataSource<T>();
private readonly _sort = viewChild.required<MatSort>(MatSort);
private readonly _matPaginator = viewChild.required<MatPaginator>(MatPaginator);
  ngOnInit(): void {
      this.dataSource.data = this.data();
      this.dataSource.sort = this._sort();
      this.dataSource.paginator = this._matPaginator();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
