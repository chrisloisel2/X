import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor() {
	}

	isConected: boolean = false;

	connect() {
		this.isConected = true;
	}

	disconnect() {
		this.isConected = false;
	}

	tweetList1 = [
		{
			img: "https://i.imgur.com/8ybJDVr.png",
			id: 1,
			username: 'User1',
			content: 'Content1',
		},
		{
			img: "https://i.imgur.com/QSTgB6n.png",
			id: 2,
			username: 'User2',
			content: 'Content2',
		},
		{
			img: "https://i.imgur.com/tXxsP2N.png",
			id: 3,
			username: 'User3',
			content: 'Content3',
		},
	];
}
