import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  public otherDetail = true;
  public addres = false;
  public customer = false;
  public contract = false;
  public report = false;
  public remark=false;
  constructor() { }

  ngOnInit(): void {
  }
  otherDetails(): void {

    this.otherDetail = true;
    this.addres = false;
    this.customer = false;
    this.contract = false;
    this.report = false;
    this.remark=false;
  }

  public address(): void {
    this.otherDetail = false;
    this.addres = true;
    this.customer = false;
    this.contract = false;
    this.report = false;
    this.remark=false;
  }
  public customers(): void {
    this.otherDetail = false;
    this.addres = false;
    this.customer = true;
    this.contract = false;
    this.report = false;
    this.remark=false;
  }
  public contracts(): void {
    this.otherDetail = false;
    this.addres = false;
    this.customer = false;
    this.contract = true;
    this.report = false;
    this.remark=false;
  }
  public reports(): void {
    this.otherDetail = false;
    this.addres = false;
    this.customer = false;
    this.contract = false;
    this.report = true;
    this.remark=false;
  }
  public remarks(): void {
    this.otherDetail = false;
    this.addres = false;
    this.customer = false;
    this.contract = false;
    this.report = false;
    this.remark=true;
  }
}
