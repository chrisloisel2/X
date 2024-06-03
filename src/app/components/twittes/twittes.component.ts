import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
	selector: 'app-twittes',
	standalone: true,
	imports: [CommonModule],
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
}
