import { Component, OnInit } from '@angular/core';
import {ClientService} from "../../service/client.service";
import {FormBuilder, Validators} from "@angular/forms";
import {ToastrModule, ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  constructor(public clientService:ClientService, public formBuilder:FormBuilder, public ngxtoastr:ToastrService) { }

  ngOnInit(): void {
    if (this.clientService.choixmenu=='A'){
      this.infoForm()
    }
  }

  infoForm(){
    this.clientService.dataForm=this.formBuilder.group({
      libelle:['',[Validators.required]],
      adresse:['',[Validators.required, Validators.minLength(5)]],
      tel:['',[Validators.required, Validators.minLength(8)]],
      email:['',[Validators.required, Validators.minLength(10)]],
      fax:['',[Validators.required, Validators.minLength(8)]],
      login:['',[Validators.required, Validators.minLength(8)]],
      pwd:['',[Validators.required, Validators.minLength(8)]],
    });
  }
  resetForm(){
    this.clientService.dataForm.reset();
  }
  onSubmit(){
    if (this.clientService.choixmenu=='A'){
      this.addData()
    }else{
      this.updatedata();
    }
  }
  addData(){
    this.clientService.createData(this.clientService.dataForm.value)
      .subscribe(data=>{
        this.ngxtoastr.success('Validation est fait avec success!!')
        this.resetForm();
      });
  }

  updatedata() {
    this.clientService.updateData(this.clientService.dataForm.value.id, this.clientService.dataForm.value)
      .subscribe(data=>{
        this.ngxtoastr.success('Modification avec success!!');
        this.resetForm();
      })
  }
}
