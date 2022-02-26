import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

@Directive({
  selector: '[appButtonBehavior]'
})
export class ButtonBehaviorDirective implements OnInit, OnDestroy {

  @Input() waitingResponse$: BehaviorSubject<boolean>;

  subscription: Subscription;

  originalState: string;

  disableColor: string = "#aaa";

  constructor(
    private elementRef: ElementRef,
  ) { }

  ngOnInit(): void {
    this.originalState = this.elementRef.nativeElement.style;
    this.subscription = this.waitingResponse$.subscribe(waiting => this.changeButtonColor(waiting))
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  changeButtonColor(waiting: boolean) {
    if(waiting){
      this.elementRef.nativeElement.style.backgroundColor = this.disableColor;
    } else {
      this.elementRef.nativeElement.style = this.originalState;
    }
  }

}
