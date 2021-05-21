import { Component, Input } from '@angular/core';

@Component({
    selector: 'oc-app-description',
    templateUrl: './oc-app-description.component.html',
    styleUrls: ['./oc-app-description.component.scss'],
})
export class OcAppDescriptionComponent {
    /** App Description text */
    @Input() appDescription: string = '';
    @Input() set header(header: string) {
        if (header) {
            this.headerText = header;
        }
    }
    /**
     * Text that will be shown on expand description button
     * Default: 'Show full description'
     */
    @Input() expandDescriptionText: string = 'Show full description';
    /** Show full description always. Text for expand description will not be shown */
    @Input() showFullDescription: boolean = false;
    /** String with classes that will be applied to the header */
    @Input() headerClass: string;
    /** Header of the App Description section */
    headerText: string = '';
    constructor() {}

    triggerDescription(): void {
        this.showFullDescription = !this.showFullDescription;
        this.showFullDescription
            ? (this.expandDescriptionText = 'Hide full description')
            : (this.expandDescriptionText = 'Show full description');
    }
}
