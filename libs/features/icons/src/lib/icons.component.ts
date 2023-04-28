import { CommonModule, DOCUMENT } from '@angular/common';
import {
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	EventEmitter,
	inject,
	Input,
	OnInit,
	Output
} from '@angular/core';
import { IconName } from '@full-stack-typescript/models';
import { IconRegistryService } from '@full-stack-typescript/services/icon-registry';

@Component({
	selector: 'full-stack-typescript-icons',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './icons.component.html',
	styleUrls: ['./icons.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconsComponent implements OnInit {
	private document = inject(DOCUMENT);
	private element = inject(ElementRef);
	private iconRegistryService = inject(IconRegistryService);
	private svgIcon!: SVGElement;

	@Input() color: string | undefined;
	@Input() fill: string | undefined;
	@Input() height = '50';
	@Input() isClickable = false;
	@Input() stroke: string | undefined;
	@Input() width = '50';

	@Input()
	set name(iconName: IconName) {
		const container =
			this.element.nativeElement.querySelector('.icon-container');

		if (this.svgIcon) {
			container.removeChild(this.svgIcon);
		}

		const svgData = this.iconRegistryService.getIcon(iconName) || '';
		const svgElement = this.svgElementFromString(svgData);

		container.appendChild(svgElement);

		this.svgIcon = svgElement;
	}

	@Output() clicked = new EventEmitter<void>();

	private svgElementFromString(svgContent: string): SVGElement {
		const div = this.document.createElement('div');
		div.innerHTML = svgContent.trim();

		return (
			div.querySelector('svg') ||
			this.document.createElementNS('http://www.w3.org/2000/svg', 'path')
		);
	}

	ngOnInit() {
		this.svgIcon.setAttribute('width', this.width);
		this.svgIcon.setAttribute('height', this.height);

		if (this.color) {
			this.svgIcon.setAttribute('color', this.color);
		}
		if (this.fill) {
			this.svgIcon.setAttribute('color', this.fill);
		}
		if (this.stroke) {
			this.svgIcon.setAttribute('color', this.stroke);
		}
	}

	onIconClicked() {
		this.clicked.emit();
	}
}
