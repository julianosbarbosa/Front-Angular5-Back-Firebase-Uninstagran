import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit(): void {
    var config = {
      apiKey: "AIzaSyAAKnL5lylH9E_RyeMUrYGZ74sWhGamEZM",
      authDomain: "jta-uninstagran.firebaseapp.com",
      databaseURL: "https://jta-uninstagran.firebaseio.com",
      projectId: "jta-uninstagran",
      storageBucket: "jta-uninstagran.appspot.com",
      messagingSenderId: "942824815799"
    };
    firebase.initializeApp(config)
  }
}
