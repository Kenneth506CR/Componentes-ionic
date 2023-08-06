import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.page.html',
  styleUrls: ['./picker.page.scss'],
})
export class PickerPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isPickerOpen = false;

  public pickerColumns = [
    {
      name: 'languages',
      options: [
        {
          text: 'JavaScript',
          value: 'javascript',
        },
        {
          text: 'TypeScript',
          value: 'typescript',
        },
        {
          text: 'Rust',
          value: 'rust',
        },
        {
          text: 'C#',
          value: 'c#',
        },
      ],
    },
  ];

  public pickerButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
    },
    {
      text: 'Confirm',
      handler: (value: { languages: { value: any; }; }) => {
        window.alert(`You selected: ${value.languages.value}`);
      },
    },
  ];

  setOpen(isOpen: boolean) {
    this.isPickerOpen = isOpen;
  }
}
