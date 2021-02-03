import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.page.html',
  styleUrls: ['./configuracoes.page.scss'],
})
export class ConfiguracoesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

/*  

  const toggle = document.querySelector('#themeToggle');

  toggle.addEventListener('ionChange', (ev) => {
    document.body.classList.toggle('dark', ev.detail.checked);
  });
  
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

   loadApp() {
    checkToggle(prefersDark.matches);
  }
  
  // Called by the media query to check/uncheck the toggle
   checkToggle(shouldCheck) {
    toggle.checked = shouldCheck;
  } */


}
