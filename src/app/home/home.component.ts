import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  contents = [
    {
      key: '0',
      label: 'Concrete',
      data: 'Concrete Folder',
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
