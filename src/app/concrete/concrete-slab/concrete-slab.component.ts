import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { concreteProportions } from 'src/app/_shared/constants/concrete-proportion';

@Component({
  selector: 'app-concrete-slab',
  templateUrl: './concrete-slab.component.html',
  styleUrls: ['./concrete-slab.component.scss']
})
export class ConcreteSlabComponent {
  concretePropClasses: string[] = [];
  cementBags: number[] = [40, 50]
  cForm!: FormGroup<any>;

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
    console.log(this.concretePropClasses)
  }

  onSubmit() {
    
  }

  getConcretePropClass(): void {
    concreteProportions.forEach(cp => this.concretePropClasses.push(cp.class));
  }
}
