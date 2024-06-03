import { Component, Input } from '@angular/core';

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
}
