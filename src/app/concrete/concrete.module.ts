import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConcreteRoutingModule } from './concrete-routing.module';
import { ConcreteSlabComponent } from './concrete-slab/concrete-slab.component';
import { SquareConcreteColumnComponent } from './square-concrete-column/square-concrete-column.component';
import { PostAndFootingComponent } from './post-and-footing/post-and-footing.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RectangularColumnComponent } from './rectangular-column/rectangular-column.component';
import { RectangularBeamAndGirderComponent } from './rectangular-beam-and-girder/rectangular-beam-and-girder.component';
import { CircularColumnComponent } from './circular-column/circular-column.component';
import { ConcretePipeComponent } from './concrete-pipe/concrete-pipe.component';


@NgModule({
  declarations: [
    ConcreteSlabComponent,
    SquareConcreteColumnComponent,
    PostAndFootingComponent,
    RectangularColumnComponent,
    RectangularBeamAndGirderComponent,
    CircularColumnComponent,
    ConcretePipeComponent
  ],
  imports: [
    CommonModule,
    ConcreteRoutingModule,
    ReactiveFormsModule
  ],
  exports: [

  ]
})
export class ConcreteModule { }
