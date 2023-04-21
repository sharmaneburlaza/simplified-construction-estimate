import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AGGREGATES } from 'src/app/_shared/constants/aggregates';
import { CONCRETE_PROPORTIONS } from 'src/app/_shared/constants/concrete-proportion';
import { Aggregates } from 'src/app/_shared/models/concrete-models';
import { calculateAggregates } from 'src/app/_shared/utils';

const METER_PER_INCH = 0.0254;
const METER_PER_CM = 0.01;

@Component({
  selector: 'app-square-concrete-column',
  templateUrl: './square-concrete-column.component.html',
  styleUrls: ['./square-concrete-column.component.scss']
})
export class SquareConcreteColumnComponent {
  concretePropClasses: string[] = [];
  cementBags: number[] = [40, 50];
  sccForm!: FormGroup<any>;
  aggregates: Aggregates = AGGREGATES;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    this.getConcretePropClass();
  }

  initForm(): void {
    this.sccForm = this.fb.group({
      width: [null, [Validators.required, Validators.pattern("^[0-9]*$")]],
      widthUnit: ['', [Validators.required]],
      height: [null, [Validators.required, Validators.pattern("^[0-9]*$")]],
      numberOfColumns: [null, [Validators.required, Validators.pattern("^[0-9]*$")]],
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

  getVolume(width: number, height: number): number {
    return width * width * height;
  }

  convertToMeter(width: number, unit: string): number {
    if (unit === 'inch') {
      return width * METER_PER_INCH;
    } else {
      return width * METER_PER_CM;
    }
  }

  getAggregates(): void {
    const {
      width, 
      widthUnit, 
      height, 
      numberOfColumns, 
      proportionClass, 
      cementBag
    } = this.sccForm?.value;
    const widthInMeter = this.convertToMeter(width, widthUnit);
    const volume = this.getVolume(+widthInMeter, +height);
    const totalVolume = volume * numberOfColumns;
    this.aggregates = calculateAggregates(proportionClass, totalVolume, cementBag);
  }

  reset() {
    this.resetForm();
    this.resetAggregates();
  }

  resetForm(): void {
    this.sccForm?.patchValue({
      width: null,
      widthUnit: '',
      height: null,
      numberOfColumns: null,
      proportionClass: '',
      cementBag: ''
    });
  }

  resetAggregates(): void {
    this.aggregates = AGGREGATES;
  }
}
