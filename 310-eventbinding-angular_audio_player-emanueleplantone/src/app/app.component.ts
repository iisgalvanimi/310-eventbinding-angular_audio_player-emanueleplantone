import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = '310-eventbinding-angular_audio_player-emanueleplantone';
playSound(){
    let audio = new Audio();
    audio.src="../assets/a-team_con_man.wav";
    audio.load();
    audio.play();

}

}

