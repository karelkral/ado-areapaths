import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { HelpComponent } from '../help/help.component';
import { Router } from '@angular/router';
import { TerminalComponent } from '../terminal/terminal.component';

@Component({
  selector: '[app-footer]',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {

	constructor(private bottomSheet: MatBottomSheet, public router: Router) { }

	openTerminalSheet(): void {
		this.bottomSheet.open(TerminalComponent);
	}

	openHelpSheet(): void {
		this.bottomSheet.open(HelpComponent);
	}
}