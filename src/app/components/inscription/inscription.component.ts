import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';

@Component({
	selector: 'app-inscription',
	standalone: true,
	imports: [],
	templateUrl: './inscription.component.html',
	styleUrl: './inscription.component.css'
})
export class InscriptionComponent {
	constructor(public auth: AuthService) { }

}
