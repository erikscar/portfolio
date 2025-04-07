import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, ReactiveFormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      user_name: new FormControl(""),
      user_email: new FormControl(""),
      message: new FormControl("")
    })
  }
  onSubmit(form: FormGroup): void {
    const templateParams = {
      user_name: form.value.user_name,
      user_email: form.value.user_email,
      message: form.value.message
    }

    emailjs.init('YshAnHysSU2COVmMk')
    emailjs.send("email_service", "email_form", templateParams, {
      publicKey: "YshAnHysSU2COVmMk"
    })
    .then(() => alert("Mensagem Enviada com Sucesso"))
    .catch(() => alert("Ocorreu um Erro ao Enviar sua Mensagem"));

    form.reset();
  }

}
