import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AGGREGATES } from 'src/app/_shared/constants/aggregates';
import { CONCRETE_PROPORTIONS } from 'src/app/_shared/constants/concrete-proportion';
import { Aggregates } from 'src/app/_shared/models/concrete-models';
import { calculateAggregates } from 'src/app/_shared/utils';

@Component({
  selector: 'app-concrete-slab',
  templateUrl: './concrete-slab.component.html',
  styleUrls: ['./concrete-slab.component.scss']
})
export class ConcreteSlabComponent {
  concretePropClasses: string[] = [];
  cementBags: number[] = [40, 50]
  cForm!: FormGroup<any>;
  aggregates: Aggregates = AGGREGATES;

  constructor(private fb: FormBuilder) {}
  
  ngOnInit(): void {
    this.initForm();
    this.getConcretePropClass();
  }

  initForm(): void {
    this.cForm = this.fb.group({
      thickness: [null, [Validators.required, Validators.pattern("^[0-9]*$")]],
      width: [null, [Validators.required, Validators.pattern("^[0-9]*$")]],
      length: [null, [Validators.required, Validators.pattern("^[0-9]*$")]],
      proportionClass: ['', [Validators.required]],
      cementBag: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    this.getAggregates();
  }

  getConcretePropClass(): void {
    CONCRETE_PROPORTIONS.forEach(cp => this.concretePropClasses.push(cp.class));
  }

  getVolume(thickness: number , width: number, length: number): number {
    return thickness * width * length;
  }

  getAggregates(): void {
    const {thickness, width, length, proportionClass, cementBag} = this.cForm?.value;
    const volume = this.getVolume(+thickness, +width, +length);
    this.aggregates = calculateAggregates(proportionClass, volume, cementBag);
  }

  reset(): void {
    this.resetForm();
    this.resetAggregates();
  }

  resetForm(): void {
    this.cForm?.patchValue({
      thickness: null,
      width: null,
      length: null,
      proportionClass: '',
      cementBag: ''
    });
  }

  resetAggregates(): void {
    this.aggregates = AGGREGATES;
  }
}
