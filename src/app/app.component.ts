import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @Input() view: 'main' | 'form' = 'form';
  formEmail!: FormGroup;
  constructor(
    private fb: FormBuilder
  ) { 
    this.formEmail = this.fb.group({
      name: ['', Validators.required], 
      email: ['', Validators.required],
      market: [false, Validators.required],
      transacinal: [false, Validators.required],
      comincacao: null,
      pesquisa: null,
    })

    this.formEmail.get('market')?.valueChanges.subscribe((value) => {
      if (value) {
        this.formEmail.get('transacinal')?.setValue(false);
      }
    });

    // Observa mudanças no campo "transacinal"
    this.formEmail.get('transacinal')?.valueChanges.subscribe((value) => {
      if (value) {
        this.formEmail.get('market')?.setValue(false);
      }
    });

   }

  async ngOnInit() {
  }

  onSubmit() {
    console.log(this.formEmail);
  }
}
