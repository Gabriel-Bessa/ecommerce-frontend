import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {LoginService} from "../login/login.service";
import {finalize} from "rxjs";
import {ToastService} from "../../components/service/toast.service";
import {Router} from "@angular/router";

@Component({
  selector: 'ec-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  items: MenuItem[] = [
    {label: 'Dados Pessoais'},
    {label: 'Endereço'}
  ];
  activeIndex: number = 0;
  form: FormGroup;
  isLoading: boolean = false;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private http: HttpClient,
              private toastService: ToastService, private router: Router) {
    this.form = this.formBuilder.group({
      name: ['Gabriel', [Validators.required]],
      email: ['bessagabriel490@gmail.com', [Validators.required]],
      cpf: ['15767646643', [Validators.required]],
      password: ['123456', [Validators.required]],
      birthDate: [null, [Validators.required]],
      cep: ['3260402', [Validators.required]],
      street: [null, [Validators.required]],
      neighborhood: [null, [Validators.required]],
      number: [null, [Validators.required]],
      city: [null, [Validators.required]],
      uf: [null, [Validators.required]],
      complement: [null, [Validators.required]],
    })
  }

  onActiveIndexChange(event: number) {
    this.activeIndex = event;
  }

  ngOnInit(): void {
  }

  searchCep() {
    let cep = this.form.get('cep')?.value ?? null;
    console.log(this.form.get('cep')?.valid === false);
    if (cep != null && cep.length === 8) {
      this.http.get(`https://viacep.com.br/ws/${this.form.get('cep')?.value}/json/`).subscribe((resp: any) => {
        this.form.get('street')?.setValue(resp.logradouro)
        this.form.get('neighborhood')?.setValue(resp.bairro)
        this.form.get('city')?.setValue(resp.localidade)
        this.form.get('uf')?.setValue(resp.uf)
        this.form.get('complement')?.setValue(resp.complemento)
      })
    }
  }

  register() {
    this.form.markAllAsTouched()
    if (this.form.valid) {
      this.isLoading = true;
      this.form.markAsPristine()
      this.loginService.register(this.form.getRawValue()).pipe(finalize(() => {
        this.isLoading = false;
      })).subscribe(resp => {
        this.toastService.sendSuccess('Cadastro de usuário', 'Usuário cadastrado com sucesso!')
        this.router.navigate(['login'])
      })
    }
  }

  nextTab() {
    this.activeIndex = 1;
  }
}
