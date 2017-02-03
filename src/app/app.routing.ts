import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';

import { ContactComponent } from './components/pages/contact/contact.component';

const appRoutes: Routes = [
	{
		path:'',
		component: HomeComponent
	},

	{	
		path:'about',
		component: AboutComponent
	},

		{	
		path:'contact',
		component: AboutComponent
	}

]; 

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);