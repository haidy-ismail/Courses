import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-control-pannel',
  templateUrl: './control-pannel.component.html',
  styleUrls: ['./control-pannel.component.css']
})
export class ControlPannelComponent implements OnInit {
  private overlayRef: OverlayRef | null = null;
  @ViewChild('modalTemplate', { static: true }) modalTemplate!: TemplateRef<any>;

  constructor(private overlay: Overlay, private viewContainerRef: ViewContainerRef) {}

  
  ngOnInit() {
    // This lifecycle hook ensures that the modalTemplate is available when needed
  }
  openModal() {
    console.log('Opening modal...');
    if (!this.overlayRef) {
        this.overlayRef = this.overlay.create({
            hasBackdrop: true,
            backdropClass: 'cdk-overlay-dark-backdrop',
            panelClass: 'custom-modal-panel'
        });
        const portal = new TemplatePortal(this.modalTemplate, this.viewContainerRef);
        console.log('Attaching portal...');
        this.overlayRef.attach(portal);
        console.log('Portal attached, modal should be visible now.');

        this.overlayRef.backdropClick().subscribe(() => {
            console.log('Backdrop clicked. Closing modal...');
            this.closeModal();
        });
    }
}



  closeModal() {
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = null;
    }
  }
}
