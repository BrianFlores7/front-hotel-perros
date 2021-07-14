import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import {ServiceService} from '../app/service.service'
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ServiceService]
})

export class AppComponent implements OnInit {
  formRegistro : FormGroup;
  constructor(private service: ServiceService,private _router: Router,private _formBuilder:FormBuilder,  ) { }
  registros: any = [];

  ngOnInit(): void {
    this.service.getAll().subscribe((res)=>{
      this.registros = res;
    });
    this.formRegistro = this._formBuilder.group({
      nombre_completo: ['',Validators.required],
      telefono: ['',Validators.required],
      diaLlegada: ['',Validators.required],
      diasEstancia : ['', Validators.required],
  })

}

  addRegistro():void{
    
    var data = this.formRegistro.value;
  
    this.service.addRegistro(data.nombre_completo, data.telefono, data.diaLlegada, data.diasEstancia).subscribe((access)=>{
      console.log(access)
    },error=>{
      console.log("Datos inválidos", error)
    })
  }

}
