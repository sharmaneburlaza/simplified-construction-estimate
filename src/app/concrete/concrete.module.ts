import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConcreteRoutingModule } from './concrete-routing.module';
import { ConcreteSlabComponent } from './concrete-slab/concrete-slab.component';
import { SquareConcreteColumnComponent } from './square-concrete-column/square-concrete-column.component';
import { PostAndFootingComponent } from './post-and-footing/post-and-footing.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ConcreteSlabComponent,
    SquareConcreteColumnComponent,
    PostAndFootingComponent
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
