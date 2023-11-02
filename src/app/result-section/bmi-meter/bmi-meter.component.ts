import {ChangeDetectorRef, Component, ElementRef, Input, SimpleChanges, ViewChild} from '@angular/core';

const BMI_RANGE_MAX = 32.5
const BMI_RANGE_MIN = 16

@Component({
  selector: 'app-bmi-meter',
  templateUrl: './bmi-meter.component.html',
  styleUrls: ['./bmi-meter.component.scss'],
})

export class BmiMeterComponent {
  @Input() bmi = -1
  @Input() visibilityClass = 'hidden'
  @ViewChild('bmiMeterBg')
  bmiMeterBg: ElementRef | undefined
  animation: Animation | undefined

  constructor(private cdRef: ChangeDetectorRef) { }

  percToBmiMap = new Map<number, string>([
    [100 * 2.5 / 16.5, '18.5'],
    [100 * 9 / 16.5, '25.0'],
    [100 * 14 / 16.5, '30.0']])

  percToLabelMap = new Map<number, string>([
    [7.6, 'underweight'],
    [34.8, 'normal-weight'],
    [69.6, 'overweight'],
    [92.4, 'obesity']])

  getBmiAsPerc(): number {
    const bmiRange = BMI_RANGE_MAX - BMI_RANGE_MIN
    return Math.min(Math.max((this.bmi - BMI_RANGE_MIN) * 100 / bmiRange, 0.001), 100)
  }

  getMeterGradient() {
    const percList = Array.from(this.percToLabelMap.keys())
    return `linear-gradient(90deg, rgb(128, 0, 255), blue ${percList[0].toFixed(1)}%,
    green ${percList[1].toFixed(1)}%, #c68100 ${percList[2].toFixed(1)}%,
     red ${percList[3].toFixed(1)}%, rgb(255, 0, 128))`
  }

  ngOnChanges(changes: SimpleChanges) {
    const currentValue = changes['visibilityClass']?.currentValue
    if (currentValue && currentValue !== 'hidden') {
      const widthExpand = [
        {width: 0},
        {width: this.getBmiAsPerc() + '%'}
      ]
      const widthTiming = {
        fill: "forwards",
        duration: 700,
        delay: 0,
      }
      const meterContainer = document.querySelector('.bmi-meter-container')!
      // @ts-ignore
      this.animation = meterContainer.animate(widthExpand, widthTiming)
    } else {
      this.animation?.cancel()
    }
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  protected readonly Array = Array;
}
