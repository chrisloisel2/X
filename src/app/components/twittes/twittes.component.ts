import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TweetCardComponent } from '../tweet-card/tweet-card.component';

@Component({
	selector: 'app-twittes',
	standalone: true,
	imports: [CommonModule, TweetCardComponent],
	templateUrl: './twittes.component.html',
	styleUrl: './twittes.component.css'
})
export class TwittesComponent {

	constructor() { }

	isConnected = true;


	tweetList = [
		{
			id: 1,
			username: 'User1',
			content: 'Content1',
		},
		{
			id: 2,
			username: 'User2',
			content: 'Content2',
		},
		{
			id: 3,
			username: 'User3',
			content: 'Content3',
		},
	];

	tweetList1 = [
		{
			id: 1,
			username: 'User1',
			content: 'Content1',
		},
		{
			id: 2,
			username: 'User2',
			content: 'Content2',
		},
		{
			id: 3,
			username: 'User3',
			content: 'Content3',
		},
	];

	afficherElement(id: Number) {
		console.log('Element clické : ' + id);
	}
}
