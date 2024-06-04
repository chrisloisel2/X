import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-tweet-card',
	standalone: true,
	imports: [],
	templateUrl: './tweet-card.component.html',
	styleUrl: './tweet-card.component.css'
})
export class TweetCardComponent {

	@Input()
	tweet: any;

	@Output()
	ring = new EventEmitter<Number>();


	constructor() { }

	ft_output(nb: Number) {
		this.ring.emit(nb);
	}
}
