import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConcreteSlabComponent } from './concrete-slab/concrete-slab.component';
import { PostAndFootingComponent } from './post-and-footing/post-and-footing.component';
import { SquareConcreteColumnComponent } from './square-concrete-column/square-concrete-column.component';

const routes: Routes = [
  { path: 'concrete-slab', component: ConcreteSlabComponent },
  { path: 'post-and-footing', component: PostAndFootingComponent },
  { path: 'square-concrete-column', component: SquareConcreteColumnComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConcreteRoutingModule { }
