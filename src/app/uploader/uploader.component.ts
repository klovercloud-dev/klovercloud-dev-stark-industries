import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Avengers} from "../avengers/avengers";
import {AvengersService} from "../avengers/service/avengers.service";

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit {

  msg:string
  res:boolean
  uploaderForm:FormGroup
  private avenger: Avengers;

  constructor(private avengersService:AvengersService) { }

  ngOnInit(): void {

    this.uploaderForm=new FormGroup({
      name:new FormControl(),
      code:new FormControl(),
      missions:new FormControl(),
      fileSource: new FormControl('', [Validators.required]),
      file: new FormControl('', [Validators.required])
    })
  }

  get f(){
    return this.uploaderForm.controls;
  }

  onFileChange(event) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploaderForm.patchValue({
        fileSource: file
      });
    }
  }
  submit(){
    const formData = new FormData();
    formData.append('file', this.uploaderForm.get('fileSource').value);
    this.avenger=new Avengers(this.uploaderForm.get('code').value,this.uploaderForm.get('name').value,null,null,null,this.uploaderForm.get('missions').value)
    // var avengerString = JSON.stringify(this.avenger);
    formData.append('avenger', JSON.stringify(this.avenger));
    this.avengersService.post(formData).subscribe((res) => {
      if (res==="Operation Successful!"){
        this.msg=res
      }
    },error => this.msg=error.message)


  }
}
