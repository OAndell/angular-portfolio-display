import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  constructor() { }

  getEntries(){
    return [
      {
        title: "Andell.eu",
        image: "assets/images/andell.eu.png",
        link: "https://andell.eu/Oscar",
        description:"Personal website developed in React and Flask. I enjoy learning and experimenting with different technologies and solutions. One such project is my personal website made for displaying contact info, CV and portfolio. The site is a self-hosted web application with a React frontend and a flask backend site serving data from a MySQL database."
      },
      {
        title: "Riksdagskollen",
        image: "https://lh3.googleusercontent.com/E5_pihuiIT0FkSSiK7HNa2l1oAgXEhoTE_d577a8nk9pW3cslC3rrqKIe8LkYt0DXF4=s360-rw",
        link: "https://play.google.com/store/apps/details?id=se.oandell.riksdagen&hl=en",
        description:"The creator and one of two of the developers of the Android application Riksdagskollen. Riksdagskollen is an application that provides an accessible way to follow the elected representatives and view the work that goes on in the Swedish parliament. Riksdagskollen parses the public API from the Swedish parliament and offers features such as viewing, reading and listening to debates, viewing decisions and voting history, customized push notifications and more. Riksdagskollen also integrates the Twitter API to show elected officials and parties tweet timelines. The app is available on Google Play and has since its launch received thousands of downloads and a lot of positive feedback from users. "
      },
      {
        title: "LinkedIn",
        image: "assets/images/Linkedin.png",
        link: "https://www.linkedin.com/in/oscar-andell-156ba0138/",
        description:"Connect with me on LinkedIn"
      },
      {
        title: "Windy Tree Animation",
        image: "https://raw.githubusercontent.com/OAndell/windy-tree-animation/master/screenshot.png",
        link: "https://oandell.github.io/windy-tree-animation/",
        description:"Some experimentation with grapical programming. Written in the Javascript library P5.js"
      },
      {
        title: "Resume",
        image: "https://andell.eu/profileImages/oscar2.jpg",
        link: "https://drive.google.com/file/d/1mSyWhLg_nIY8-Y4mIKmlz15DazuTFeyR/view",
        description:"My CV"
      },
      {
        title: "Github Profile",
        image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        link: "https://github.com/OAndell",
        description:"Collections of projects and idéas in varius states of completion"
      },
      {
        title: "Instagram",
        image: "assets/images/instagram.png",
        link: "https://www.instagram.com/oscarandell/",
        description:"Some pictures"
      }
    ];
  }
}
