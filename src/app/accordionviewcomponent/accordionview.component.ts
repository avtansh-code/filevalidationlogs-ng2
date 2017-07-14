import { Component, Input, OnInit, trigger, state, style, transition, animate } from '@angular/core';

import { DataExchangeService } from '../services/dataexchange.service'
import { DataManipulationService } from '../services/datamanipulation.service'

@Component({
    selector: 'accordion-view',
    template: 
    `
    <div class="acc-view">
    <accordion [closeOthers]="oneAtATime">
        <div *ngFor="let lname of listNames(); let i = index">
            <accordion-group *ngIf="fileData[lname].length>0" 
                #group class="accgrp {{lname}}">
                <div accordion-heading 
                        [ngStyle] = "labelStyle[i]">
                    <h4 [ngStyle] = "labelText[i]"><b>{{lname|uppercase}} ({{fileData[lname].length}})</b>
                    <i class="pull-right float-xs-right zmdi"
                    [ngClass]="{'zmdi-caret-down': group?.isOpen, 'zmdi-caret-right': !group?.isOpen}"></i>
                    </h4>
                </div>
                <div [style.border] = "'1px solid'+listColors[lname]"  class="acc-body">
                    <list-view [list]="fileData[lname]" [list-styling]="textStyle[i]"></list-view>
                </div>
            </accordion-group>
        </div>
    </accordion>
    </div>
    `,
    styles: [
    `
        .acc-view{
            margin-top: 30px;
        }

        :host /deep/ .panel{
            margin-bottom:50px !important;
            border-radius: 0 !important;
            padding: 0px !important;
        }

        :host /deep/ .panel-heading{
            padding:0px !important;
            margin-top: -10px !important;
            border-bottom: 0px !important;
        }

        :host /deep/ .panel-body{
            padding: 0px !important;
            border: 0px !important;
        }

        .acc-body{
            padding: 2em 4.5em 0em 4.5em !important;
        }
        `
    ],
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
    private labelText:any = [];
    private labelStyle:any = [];
    private textStyle:any = [];
    @Input('file-data') fileData: any;

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