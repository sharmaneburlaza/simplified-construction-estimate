import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Item, Path, ROUTERLINK } from './_lib/constants/routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simplified-construction-estimates';
  nodes: any = [];
 
  constructor(private router: Router) {}
  
  ngOnInit() {
    this.nodes = [
      {
        key: Item.CONCRETE,
        label: 'Concrete',
        children: [
          { 
            key: Path.CONCRETE_SLAB,
            label: 'Concrete Slab',
            routerLink: ROUTERLINK.concreteSlab
          },
          { 
            key: Path.SQUARE_CONCRETE_COLUMN, 
            label: 'Square Concrete Columns', 
            routerLink: ROUTERLINK.squareConcreteColumn,
          },
          { 
            key: Path.POST_AND_FOOTING, 
            label: 'Post and Footing',
            routerLink: ROUTERLINK.postAndFooting,
          },
          { 
            key: Path.RECTANGULAR_COLUMN, 
            label: 'Rectangular Column',
            routerLink: ROUTERLINK.rectangularColumn,
          },
          { 
            key: Path.RECTANGULAR_BEAM_AND_GIRDER, 
            label: 'Rectangular Beam and Girder',
            routerLink: ROUTERLINK.rectangularBeamAndGirder,
          },
          { 
            key: Path.CIRCULAR_COLUMN, 
            label: 'Circular Column',
            routerLink: ROUTERLINK.circularColumn,
          },
          { 
            key: Path.CONCRETE_PIPE, 
            label: 'Concrete Pipe',
            routerLink: ROUTERLINK.concretePipe
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
            label: 'Concrete Hollow Blocks', 
            data: 'Expenses Document' 
          },
          { 
            key: '0-0-0', 
            label: 'Adobe Stone', 
            data: 'Expenses Document' 
          },
          { 
            key: '0-0-0', 
            label: 'Riprap', 
            data: 'Expenses Document' 
          },
          { 
            key: '0-0-0', 
            label: 'Concrete Retaining Wall', 
            data: 'Expenses Document' 
          },
          { 
            key: '0-0-0', 
            label: 'Gabion and Mattress', 
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
  
  nodeSelect(event: { node: { routerLink: string; }; }) {
    this.router.navigate(['/'+event.node.routerLink])
  }

  nodeUnselect(event: any) {

  }
}
