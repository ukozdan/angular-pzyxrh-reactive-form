import { Component } from '@angular/core';

export type EditorType = 'name' | 'profile' | 'payment' | 'home';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editor: EditorType = 'home';

  /*get showNameEditor() {
    return this.editor === 'name';
  }

  get showProfileEditor() {
    return this.editor === 'profile';
  }*/

  get showPaymentForm() {
    return this.editor === 'payment';
  }

  get showHome() {
    return this.editor === 'home';
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/