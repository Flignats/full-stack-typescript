import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';

@NgModule({
	imports: [CommonModule, AboutRoutingModule, MatCardModule],
	declarations: [AboutComponent],
	exports: [AboutComponent]
})
export class AboutModule {}
