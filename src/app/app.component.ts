import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { CONCRETE, ROUTES } from './_shared/constants/routes';

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
            key: 'concrete-slab',
            label: 'Concrete Slab',
            data: {
              href: '/' + ROUTES.CONCRETE_SLAB,
              routerLink: ROUTES.CONCRETE_SLAB
            }
          },
          { 
            key: 'square-concrete-columns', 
            label: 'Square Concrete Columns', 
            data: {
              href: '/' + ROUTES.SQUARE_CONCRETE_COLUMN,
              routerLink: ROUTES.SQUARE_CONCRETE_COLUMN,
            }
          },
          { 
            key: '0-0-0', 
            label: 'Post and Footing', 
            data: {
              href: '/' + ROUTES.POST_AND_FOOTING,
              routerLink: ROUTES.POST_AND_FOOTING,
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
