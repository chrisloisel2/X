import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';

@Component({
	selector: 'app-connexion',
	standalone: true,
	imports: [],
	templateUrl: './connexion.component.html',
	styleUrl: './connexion.component.css'
})
export class ConnexionComponent {

	constructor(public auth: AuthService) { }
}
