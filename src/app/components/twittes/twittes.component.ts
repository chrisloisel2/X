import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TweetCardComponent } from '../tweet-card/tweet-card.component';
import { CurrentComponent } from '../current/current.component';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
	selector: 'app-twittes',
	standalone: true,
	imports: [CommonModule, TweetCardComponent, CurrentComponent],
	templateUrl: './twittes.component.html',
	styleUrl: './twittes.component.css'
})
export class TwittesComponent {

	constructor(public router: Router, public auth: AuthService) { }

	currentTweet: any;


	goToConnexion() {
		this.router.navigate(['/connexion']);
	}


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

	afficherElement(tweet: any) {
		console.log(tweet);
		this.currentTweet = tweet;
	}
}
