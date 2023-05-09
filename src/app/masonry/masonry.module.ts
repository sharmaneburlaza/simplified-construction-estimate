import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasonryRoutingModule } from './masonry-routing.module';
import { ConcreteHollowBlocksComponent } from './concrete-hollow-blocks/concrete-hollow-blocks.component';
import { AdobeStoneComponent } from './adobe-stone/adobe-stone.component';
import { RiprapComponent } from './riprap/riprap.component';
import { ConcreteRetainingWallComponent } from './concrete-retaining-wall/concrete-retaining-wall.component';
import { GabionAndMattressComponent } from './gabion-and-mattress/gabion-and-mattress.component';



@NgModule({
  declarations: [
    ConcreteHollowBlocksComponent,
    AdobeStoneComponent,
    RiprapComponent,
    ConcreteRetainingWallComponent,
    GabionAndMattressComponent,
  ],
  imports: [
    CommonModule,
    MasonryRoutingModule
  ]
})
export class MasonryModule { }
