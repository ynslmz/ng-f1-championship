import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() isVisible = false;
  @Output() close = new EventEmitter<void>();

  ngOnInit() {
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        this.closeModal();
      }
    });
  }

  closeModal() {
    this.isVisible = false;
    this.close.emit();
  }

  preventPropagation(event: Event) {
    event.stopPropagation();
  }
}
