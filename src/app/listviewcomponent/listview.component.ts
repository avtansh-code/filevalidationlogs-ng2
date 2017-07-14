import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { DataExchangeService } from '../services/dataexchange.service'
import { DataManipulationService } from '../services/datamanipulation.service'

@Component({
    selector: 'list-view',
    template: 
    `
        <ul class="list-group">
            <div *ngFor="let list_item of list.slice(((currentPage-1)*itemsPerPage), 
                ((currentPage)*itemsPerPage)); let i=index" >
                <li [ngStyle]="listStyling" class="listitem">
                            <div [innerHTML]="list_item"></div>
                </li>
            </div>  
        </ul>
        <div style="text-align:center">
            <pagination class="pagination-sm"
                        [boundaryLinks]="false" 
                        [itemsPerPage]="itemsPerPage"
                        [totalItems]="totalItems"
                        [(ngModel)]="currentPage"
                        [maxSize]="maxSize"
                        [rotate]="'false'"
                        [previousText]="'&lsaquo;'" 
                        [nextText]="'&rsaquo;'" 
                        [firstText]="'&laquo;'" 
                        [lastText]="'&raquo;'"
                        *ngIf="list.length > itemsPerPage">
            </pagination>
        </div>
    `,
    styles: [
    `
        .listitem{
            padding-bottom: 3px;
        }
    `
    ]
})
export class ListView implements OnInit{
    constructor(
        private dataexchangeservice: DataExchangeService,
        private datamanipulationservice: DataManipulationService,
    ){}
    @Input('list') list: string[];
    @Input('list-styling') listStyling:any;
    private totalItems:number;
    private currentPage:number;
    private itemsPerPage:number;
    private maxSize:number;
    ngOnInit():void{
        this.itemsPerPage = this.dataexchangeservice.pageSize;
        this.totalItems = this.list.length;
        this.currentPage = 1;        
        this.maxSize = 5; 
    }
}