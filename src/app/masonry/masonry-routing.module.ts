import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Path } from '../_lib/constants/routes';
import { AdobeStoneComponent } from './adobe-stone/adobe-stone.component';
import { ConcreteHollowBlocksComponent } from './concrete-hollow-blocks/concrete-hollow-blocks.component';

const routes: Routes = [
  {path: Path.ADOBE_STONE, component: AdobeStoneComponent},
  {path: Path.CONCRETE_HOLLOW_BLOCKS, component: ConcreteHollowBlocksComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasonryRoutingModule { }
