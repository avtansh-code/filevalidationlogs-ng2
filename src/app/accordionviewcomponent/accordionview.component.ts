import { Component, Input, OnInit, trigger, state, style, transition, animate } from '@angular/core';

import { DataExchangeService } from '../services/dataexchange.service'
import { DataManipulationService } from '../services/datamanipulation.service'

@Component({
    selector: 'accordion-view',
    templateUrl: './accordionview.component.html',
    styleUrls: ['./accordionview.component.css'],
    animations: [
        trigger('openClose', [
            state('closed, void',
                style({ height: "0px" })),
            state('open',
                style({ height: "*" })),
            transition("* => *", animate(200))
        ])
    ]
})
export class AccordionView implements OnInit{
    constructor(
        private dataexchangeservice: DataExchangeService,
        private datamanipulationservice: DataManipulationService
    ){}
    public oneAtATime: boolean = true;
    private listColors:any;
    private labelText:object = [];
    private labelStyle:object = [];
    private textStyle:object = [];
    @Input('file-data') fileData: object;

    /**
     * @returns void
     * initializing the variables with their default values
     * some variables are given a value that have been stored in services
     */
    ngOnInit(): void {
        this.listColors = this.dataexchangeservice.listColors;
        this.datamanipulationservice.initializeStyles();
        this.labelText = this.datamanipulationservice.labelText;
        this.labelStyle = this.datamanipulationservice.labelStyle;
        this.textStyle = this.datamanipulationservice.textStyle;
    }

    /**
     * @returns string
     * returning the names of the lists that are present in the data
     */
    private listNames():string[]{
        return this.dataexchangeservice.listName;
    }
}