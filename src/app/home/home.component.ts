import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  nodes: TreeNode[] = [];
  
  ngOnInit() {
    this.nodes = [
      {
        key: 'Concrete',
        label: 'Concrete',
        expanded: true,
        children: [
          { key: '0-0', label: 'What is Angular', data: 'https://angular.io', type: 'url' },
          { 
            key: 'concrete-slab', 
            label: 'Concrete Slab', 
            data: 'http://localhost:4200/concrete/concrete-slab'
          },
          { 
            key: '0-0-0', 
            label: 'Square Concrete Columns', 
            data: 'Square Concrete Columns' 
          },
          { 
            key: '0-0-0', 
            label: 'Post and Footing', 
            data: 'Post and Footing' 
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
