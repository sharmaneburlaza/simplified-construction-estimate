import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConcreteComponent } from './concrete/concrete.component';
import { MasonryComponent } from './masonry/masonry.component';
import { MetalReinforcementComponent } from './metal-reinforcement/metal-reinforcement.component';
import { LumberComponent } from './lumber/lumber.component';
import { FormsScafoldingAndStagingComponent } from './forms-scafolding-and-staging/forms-scafolding-and-staging.component';
import { RoofingMaterialsComponent } from './roofing-materials/roofing-materials.component';
import { TileworkComponent } from './tilework/tilework.component';
import { HardwareComponent } from './hardware/hardware.component';
import { PaintingComponent } from './painting/painting.component';
import { HomeComponent } from './home/home.component';

import { TreeModule } from 'primeng/tree';
import { ConcreteSlabComponent } from './concrete/concrete-slab/concrete-slab.component';
import { SquareConcreteColumnComponent } from './concrete/square-concrete-column/square-concrete-column.component';
import { PostAndFootingComponent } from './concrete/post-and-footing/post-and-footing.component';

@NgModule({
  declarations: [
    AppComponent,
    ConcreteComponent,
    MasonryComponent,
    MetalReinforcementComponent,
    LumberComponent,
    FormsScafoldingAndStagingComponent,
    RoofingMaterialsComponent,
    TileworkComponent,
    HardwareComponent,
    PaintingComponent,
    HomeComponent,
    ConcreteSlabComponent,
    SquareConcreteColumnComponent,
    PostAndFootingComponent
  ],
  imports: [
    TreeModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
