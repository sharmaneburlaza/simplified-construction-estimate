import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { CONCRETE, Path } from './_shared/constants/routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simplified-construction-estimates';
  nodes: any = [];
  
  ngOnInit() {
    this.nodes = [
      {
        key: CONCRETE,
        label: 'Concrete',
        children: [
          { 
            key: Path.CONCRETE_SLAB,
            label: 'Concrete Slab',
            data: {
              href: '/' + CONCRETE + '/' + Path.CONCRETE_SLAB,
              routerLink: CONCRETE + '/' + Path.CONCRETE_SLAB
            }
          },
          { 
            key: Path.SQUARE_CONCRETE_COLUMN, 
            label: 'Square Concrete Columns', 
            data: {
              href: '/' + CONCRETE + '/' + Path.SQUARE_CONCRETE_COLUMN,
              routerLink: CONCRETE + '/' + Path.SQUARE_CONCRETE_COLUMN,
            }
          },
          { 
            key: Path.POST_AND_FOOTING, 
            label: 'Post and Footing',
            data: {
              href: '/' + CONCRETE + '/' + Path.POST_AND_FOOTING,
              routerLink: CONCRETE + '/' + Path.POST_AND_FOOTING,
            }
          },
          { 
            key: Path.RECTANGULAR_COLUMN, 
            label: 'Rectangular Column',
            data: {
              href: '/' + CONCRETE + '/' + Path.RECTANGULAR_COLUMN,
              routerLink: CONCRETE + '/' + Path.RECTANGULAR_COLUMN,
            }
          },
          { 
            key: Path.RECTANGULAR_BEAM_AND_GIRDER, 
            label: 'Rectangular Beam and Girder',
            data: {
              href: '/' + CONCRETE + '/' + Path.RECTANGULAR_BEAM_AND_GIRDER,
              routerLink: CONCRETE + '/' + Path.RECTANGULAR_BEAM_AND_GIRDER,
            }
          },
          { 
            key: Path.CIRCULAR_COLUMN, 
            label: 'Circular Column',
            data: {
              href: '/' + CONCRETE + '/' + Path.CIRCULAR_COLUMN,
              routerLink: CONCRETE + '/' + Path.CIRCULAR_COLUMN,
            }
          },
          { 
            key: Path.CONCRETE_PIPE, 
            label: 'Concrete Pipe',
            data: {
              href: '/' + CONCRETE + '/' + Path.CONCRETE_PIPE,
              routerLink: CONCRETE + '/' + Path.CONCRETE_PIPE,
            }
          },
        ]
      },
      {
        key: '1',
        label: 'Metal Reinforcement',
        data: 'Masonry Folder',
        icon: 'pi pi-fw pi-inbox',
        children: [
          { 
            key: '0-0-0', 
            label: 'Expenses.doc', 
            icon: 'pi pi-fw pi-file', 
            data: 'Expenses Document' 
          },
          { 
            key: '0-0-0', 
            label: 'Expenses.doc', 
            icon: 'pi pi-fw pi-file', 
            data: 'Expenses Document' 
          },
        ]
      },
      {
        key: '0',
        label: 'Lumber',
        data: 'Lumber Folder',
        icon: 'pi pi-fw pi-inbox',
        children: [
          { 
            key: '0-0-0', 
            label: 'Expenses.doc', 
            icon: 'pi pi-fw pi-file', 
            data: 'Expenses Document' 
          },
          { 
            key: '0-0-0', 
            label: 'Expenses.doc', 
            icon: 'pi pi-fw pi-file', 
            data: 'Expenses Document' 
          },
        ]
      },
      {
        key: '0',
        label: 'Forms, Scaffolding and Staging',
        data: 'Forms, Scaffolding and Staging Folder',
        icon: 'pi pi-fw pi-inbox',
        children: [
          { 
            key: '0-0-0', 
            label: 'Expenses.doc', 
            icon: 'pi pi-fw pi-file', 
            data: 'Expenses Document' 
          },
          { 
            key: '0-0-0', 
            label: 'Expenses.doc', 
            icon: 'pi pi-fw pi-file', 
            data: 'Expenses Document' 
          },
        ]
      },
      {
        key: '0',
        label: 'Roofing Materials',
        data: 'Roofing Materials Folder',
        icon: 'pi pi-fw pi-inbox',
        children: [
          { 
            key: '0-0-0', 
            label: 'Expenses.doc', 
            icon: 'pi pi-fw pi-file', 
            data: 'Expenses Document' 
          },
          { 
            key: '0-0-0', 
            label: 'Expenses.doc', 
            icon: 'pi pi-fw pi-file', 
            data: 'Expenses Document' 
          },
        ]
      },
      {
        key: '0',
        label: 'Tilework',
        data: 'Tilework Folder',
        icon: 'pi pi-fw pi-inbox',
        children: [
          { 
            key: '0-0-0', 
            label: 'Expenses.doc', 
            icon: 'pi pi-fw pi-file', 
            data: 'Expenses Document' 
          },
          { 
            key: '0-0-0', 
            label: 'Expenses.doc', 
            icon: 'pi pi-fw pi-file', 
            data: 'Expenses Document' 
          },
        ]
      },
      {
        key: '0',
        label: 'Hardware',
        data: 'Hardware Folder',
        icon: 'pi pi-fw pi-inbox',
        children: [
          { 
            key: '0-0-0', 
            label: 'Expenses.doc', 
            icon: 'pi pi-fw pi-file', 
            data: 'Expenses Document' 
          },
          { 
            key: '0-0-0', 
            label: 'Expenses.doc', 
            icon: 'pi pi-fw pi-file', 
            data: 'Expenses Document' 
          },
        ]
      },
      {
        key: '0',
        label: 'Painting',
        data: 'Painting Folder',
        icon: 'pi pi-fw pi-inbox',
        children: [
          { 
            key: '0-0-0', 
            label: 'Expenses.doc', 
            icon: 'pi pi-fw pi-file', 
            data: 'Expenses Document' 
          },
          { 
            key: '0-0-0', 
            label: 'Expenses.doc', 
            icon: 'pi pi-fw pi-file', 
            data: 'Expenses Document' 
          },
        ]
      }
    ]
  }
}
