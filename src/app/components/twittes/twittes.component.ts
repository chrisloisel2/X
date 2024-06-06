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




	afficherElement(tweet: any) {
		console.log(tweet);
		this.currentTweet = tweet;
	}
}
