import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { TwittesComponent } from './components/twittes/twittes.component';

export const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'insciption', component: InscriptionComponent },
	{ path: 'connexion', component: ConnexionComponent },
	{ path: 'tweet', component: TwittesComponent }
];
