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

	img = '';
	titre = '';
	constructor(public auth: AuthService, public http: HttpClient) {
		this.http.get("https://backendchristopherloisel.azurewebsites.net/api/backGet?").subscribe((data: any) => {
			console.log(data);
			this.img = data.contenu;
			this.titre = data.titre;
		})
	}

}
