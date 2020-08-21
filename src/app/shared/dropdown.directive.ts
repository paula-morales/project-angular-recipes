import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
  selector: "[appDropdown]",
})
export class DropdownDirective {
  //to bind properties of the element where the directive is placed
  //attach or detached a class
  //if it is true it will be attached, if it is false it won't be attached
  @HostBinding("class.open") isOpen = false;

  //to listen to an event
  @HostListener("click") toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
