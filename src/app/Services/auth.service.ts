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
}
