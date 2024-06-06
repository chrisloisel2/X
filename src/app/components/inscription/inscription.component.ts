import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-inscription',
	standalone: true,
	imports: [],
	templateUrl: './inscription.component.html',
	styleUrl: './inscription.component.css'
})
export class InscriptionComponent {
	constructor(public auth: AuthService, public http: HttpClient) {
		this.http.get("https://api.chucknorris.io/jokes/random").subscribe((data) => {
			console.log(data);
		})
	}

}
