import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { concreteProportions } from 'src/app/_shared/constants/concrete-proportion';
import { Aggregates } from 'src/app/_shared/models/concrete-models';

@Component({
  selector: 'app-concrete-slab',
  templateUrl: './concrete-slab.component.html',
  styleUrls: ['./concrete-slab.component.scss']
})
export class ConcreteSlabComponent {
  concretePropClasses: string[] = [];
  cementBags: number[] = [40, 50]
  cForm!: FormGroup<any>;
  aggregates: Aggregates | undefined;

  constructor(private fb: FormBuilder) {}
  
  ngOnInit() {
    this.cForm = this.fb.group({
      thickness: [0, [Validators.required, Validators.pattern("^[0-9]*$")]],
      width: [0, [Validators.required, Validators.pattern("^[0-9]*$")]],
      length: [0, [Validators.required, Validators.pattern("^[0-9]*$")]],
      proportionClass: ['', [Validators.required]],
      cementBag: [0, [Validators.required]],
    });
    this.getConcretePropClass();
  }

  onSubmit() {
    this.calculateAggregates();
  }

  getConcretePropClass(): void {
    concreteProportions.forEach(cp => this.concretePropClasses.push(cp.class));
  }

  getVolume(thickness: number , width: number, length: number): number {
    return thickness * width * length;
  }

  calculateAggregates() {
    const {thickness, width, length, proportionClass, cementBag} = this.cForm?.value;
    const volume = this.getVolume(+thickness, +width, +length);
    const propClass = concreteProportions.find(cp => cp.class === proportionClass);
    if (propClass) {
      let cement;
      const sand = +volume * +propClass.sand;
      const gravel = +volume * +propClass.gravel;
      if (cementBag == 40) {
        cement = +volume * +propClass.cementInBag40kg;
      } else if (cementBag == 50) {
        cement = +volume * +propClass.cementInBag50kg;
      }
      if (cement && sand && gravel) {
        this.aggregates = {cement, sand, gravel};
      }
    }
  }
}
