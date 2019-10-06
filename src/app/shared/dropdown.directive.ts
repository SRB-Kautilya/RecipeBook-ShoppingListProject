import { Directive, HostListener, HostBinding } from '@angular/core';
@Directive({
    selector:'[appdropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;
    @HostListener('click') toggleopen() {
        this.isOpen = !this.isOpen;
      }


    }

