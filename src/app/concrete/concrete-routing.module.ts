import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Path } from '../_shared/constants/routes';
import { CircularColumnComponent } from './circular-column/circular-column.component';
import { ConcretePipeComponent } from './concrete-pipe/concrete-pipe.component';
import { ConcreteSlabComponent } from './concrete-slab/concrete-slab.component';
import { PostAndFootingComponent } from './post-and-footing/post-and-footing.component';
import { RectangularBeamAndGirderComponent } from './rectangular-beam-and-girder/rectangular-beam-and-girder.component';
import { RectangularColumnComponent } from './rectangular-column/rectangular-column.component';
import { SquareConcreteColumnComponent } from './square-concrete-column/square-concrete-column.component';

const routes: Routes = [
  { path: Path.CONCRETE_SLAB, component: ConcreteSlabComponent },
  { path: Path.SQUARE_CONCRETE_COLUMN, component: SquareConcreteColumnComponent },
  { path: Path.POST_AND_FOOTING, component: PostAndFootingComponent },
  { path: Path.RECTANGULAR_COLUMN, component: RectangularColumnComponent },
  { path: Path.RECTANGULAR_BEAM_AND_GIRDER, component: RectangularBeamAndGirderComponent },
  { path: Path.CIRCULAR_COLUMN, component: CircularColumnComponent },
  { path: Path.CONCRETE_PIPE, component: ConcretePipeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConcreteRoutingModule { }
