import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {

    LOGO = require('./assets/logo.png');
    PROJECTS = require('./assets/projects.jpg');
    SPONSOR = require('./assets/sponsor.jpg');

    data: {
        title: string,
        icon: any,
        content: string
    }[]

    constructor() { }

    ngOnInit() {
        this.data = [];
        this.data.push({
            title: 'Overview',
            icon: this.LOGO,
            content: `Leading Regional company with a foundation that believes the future of business is being a Force-for-Good.
            It has tasked the technology department to develop a Platform-for-Good that will a enabler for sustainable digital 
            collaboration ecosystem (thrive and support itself without outside influence) for its stakeholders 
            (Social enterprises, Business Associations, Non-Profit/Voluntary Organizations and Self-Sponsored Groups) 
            to support the global goals for sustainable development. 
            The platform brings together the sponsors of public value creation, stakeholders, local and global partners, 
            all with a single purpose: “Act to solve problems for the Common Good”. 
            It allows participants to find each other and work on projects. 
            Participants could work on a single or multiple projects contributing public value, 
            while constantly improving their knowledge and understanding of the various issues.`
        });

        this.data.push({
            title: 'Sponsors',
            icon: this.SPONSOR,
            content: 'Be a sponsor today!'
        });

        this.data.push({
            title: 'Projects',
            icon: this.PROJECTS,
            content: 'Projects blah blah blah'
        });
     }
}
