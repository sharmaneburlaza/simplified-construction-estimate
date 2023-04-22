import { Component } from '@angular/core';
import { Item, Path, ROUTERLINK } from './_lib/constants/routes';

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
        key: Item.CONCRETE,
        label: 'Concrete',
        children: [
          { 
            key: Path.CONCRETE_SLAB,
            label: 'Concrete Slab',
            data: {
              href: '/' + ROUTERLINK.concreteSlab,
              routerLink: ROUTERLINK.concreteSlab
            }
          },
          { 
            key: Path.SQUARE_CONCRETE_COLUMN, 
            label: 'Square Concrete Columns', 
            data: {
              href: '/' + ROUTERLINK.squareConcreteColumn,
              routerLink: ROUTERLINK.squareConcreteColumn,
            }
          },
          { 
            key: Path.POST_AND_FOOTING, 
            label: 'Post and Footing',
            data: {
              href: '/' + ROUTERLINK.postAndFooting,
              routerLink: ROUTERLINK.postAndFooting,
            }
          },
          { 
            key: Path.RECTANGULAR_COLUMN, 
            label: 'Rectangular Column',
            data: {
              href: '/' + ROUTERLINK.rectangularColumn,
              routerLink: ROUTERLINK.rectangularColumn,
            }
          },
          { 
            key: Path.RECTANGULAR_BEAM_AND_GIRDER, 
            label: 'Rectangular Beam and Girder',
            data: {
              href: '/' + ROUTERLINK.rectangularBeamAndGirder,
              routerLink: ROUTERLINK.rectangularBeamAndGirder,
            }
          },
          { 
            key: Path.CIRCULAR_COLUMN, 
            label: 'Circular Column',
            data: {
              href: '/' + ROUTERLINK.circularColumn,
              routerLink: ROUTERLINK.circularColumn,
            }
          },
          { 
            key: Path.CONCRETE_PIPE, 
            label: 'Concrete Pipe',
            data: {
              href: '/' + ROUTERLINK.concretePipe,
              routerLink: ROUTERLINK.concretePipe
            }
          },
        ]
      },
      {
        key: '1',
        label: 'Masonry',
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
        key: '1',
        label: 'Metal Reinforcement',
        data: 'Metal Reinforcement',
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
