import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
//import { LogService } from './services/log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  events = ['Kilometri', 'Metri', 'Centimetri'];

  value: number;

  clone = '';
  newValue1 = '';
  newValue2 = '';
  newValue3 = '';
  newValueEdited1Clone = '';
  newValueEdited2Clone = '';
  newValueEdited3Clone = '';
  newValueEdited1 = '';
  newValueEdited2 = '';
  newValueEdited3 = '';

  // What to clone
  @ViewChild('clone1') template1;
  // Where to insert the cloned content
  @ViewChild('container1', { read: ViewContainerRef }) container1;

  // What to clone
  @ViewChild('clone2') template2;
  // Where to insert the cloned content
  @ViewChild('container2', { read: ViewContainerRef }) container2;

  // What to clone
  @ViewChild('clone3') template3;
  // Where to insert the cloned content
  @ViewChild('container3', { read: ViewContainerRef }) container3;

  constructor() { }

  ngOnInit() {
    this.value = JSON.parse(localStorage.getItem('value'));
  }
  onSubmit() {
    localStorage.setItem('value', JSON.stringify(this.value));
  }

  /*delete item*/
  deleteItem(element) {
    element.target.parentElement.parentElement.remove();
  }


  addUnit1(event) {
    //console.log(event.target.parentElement.parentElement);
    if (event.target.nextElementSibling.value === 'Metri') {
      this.newValue1 = this.value * 1000 + ' ' + event.target.nextElementSibling.value;
    } else if (event.target.nextElementSibling.value === 'Centimetri') {
      this.newValue1 = this.value * 100000 + ' ' + event.target.nextElementSibling.value;
    } else if (event.target.nextElementSibling.value === 'Kilometri') {
      this.newValue1 = this.value + ' ' + event.target.nextElementSibling.value;
    }
    this.container1.createEmbeddedView(this.template1);
  }

  addUnit2(event) {
    //console.log(event.target.parentElement.parentElement);
    if (event.target.nextElementSibling.value === 'Metri') {
      this.newValue2 = this.value * 1000 + ' ' + event.target.nextElementSibling.value;
    } else if (event.target.nextElementSibling.value === 'Centimetri') {
      this.newValue2 = this.value * 100000 + ' ' + event.target.nextElementSibling.value;
    } else if (event.target.nextElementSibling.value === 'Kilometri') {
      this.newValue2 = this.value + ' ' + event.target.nextElementSibling.value;
    }
    this.container2.createEmbeddedView(this.template2);
  }

  addUnit3(event) {
    //console.log(event.target.parentElement.parentElement);
    if (event.target.nextElementSibling.value === 'Metri') {
      this.newValue3 = this.value * 1000 + ' ' + event.target.nextElementSibling.value;
    } else if (event.target.nextElementSibling.value === 'Centimetri') {
      this.newValue3 = this.value * 100000 + ' ' + event.target.nextElementSibling.value;
    } else if (event.target.nextElementSibling.value === 'Kilometri') {
      this.newValue3 = this.value + ' ' + event.target.nextElementSibling.value;
    }
    this.container3.createEmbeddedView(this.template3);
  }


  edit1(event) {
    if (event.target.value === 'Metri') {
      this.newValueEdited1 = this.value * 1000 + ' ' + event.target.value;
    } else if (event.target.value === 'Centimetri') {
      this.newValueEdited1 = this.value * 100000 + ' ' + event.target.value;
    } else if (event.target.value === 'Kilometri') {
      this.newValueEdited1 = this.value + ' ' + event.target.value;
    }
    //console.log('edit1 => ', event.target.value)
    //console.log('this.newValueEdited1 ', this.newValueEdited1)
  }
  edit2(event) {
    if (event.target.value === 'Metri') {
      this.newValueEdited2 = this.value * 1000 + ' ' + event.target.value;
    } else if (event.target.value === 'Centimetri') {
      this.newValueEdited2 = this.value * 100000 + ' ' + event.target.value;
    } else if (event.target.value === 'Kilometri') {
      this.newValueEdited2 = this.value + ' ' + event.target.value;
    }
    //console.log(event.target.value)
  }
  edit3(event) {
    if (event.target.value === 'Metri') {
      this.newValueEdited3 = this.value * 1000 + ' ' + event.target.value;
    } else if (event.target.value === 'Centimetri') {
      this.newValueEdited3 = this.value * 100000 + ' ' + event.target.value;
    } else if (event.target.value === 'Kilometri') {
      this.newValueEdited3 = this.value + ' ' + event.target.value;
    }
    //console.log(event.target.value)
  }
  edit1clone(event) {
    if (event.target.value === 'Metri') {
      this.newValueEdited1Clone = this.value * 1000 + ' ' + event.target.value;
    } else if (event.target.value === 'Centimetri') {
      this.newValueEdited1Clone = this.value * 100000 + ' ' + event.target.value;
    } else if (event.target.value === 'Kilometri') {
      this.newValueEdited1Clone = this.value + ' ' + event.target.value;
    }
    //console.log('edit1clone => ', event.target.value)
    //console.log('this.newValueEdited1Clone ', this.newValueEdited1Clone)
  }
  edit2clone(event) {
    if (event.target.value === 'Metri') {
      this.newValueEdited2Clone = this.value * 1000 + ' ' + event.target.value;
    } else if (event.target.value === 'Centimetri') {
      this.newValueEdited2Clone = this.value * 100000 + ' ' + event.target.value;
    } else if (event.target.value === 'Kilometri') {
      this.newValueEdited2Clone = this.value + ' ' + event.target.value;
    }
    //console.log('edit2clone => ', event.target.value)
    //console.log('this.newValueEdited2Clone ', this.newValueEdited2Clone)
  }
  edit3clone(event) {
    if (event.target.value === 'Metri') {
      this.newValueEdited3Clone = this.value * 1000 + ' ' + event.target.value;
    } else if (event.target.value === 'Centimetri') {
      this.newValueEdited3Clone = this.value * 100000 + ' ' + event.target.value;
    } else if (event.target.value === 'Kilometri') {
      this.newValueEdited3Clone = this.value + ' ' + event.target.value;
    }
    //console.log('edit3clone => ', event.target.value)
    //console.log('this.newValueEdited3Clone ', this.newValueEdited3Clone)
  }

}