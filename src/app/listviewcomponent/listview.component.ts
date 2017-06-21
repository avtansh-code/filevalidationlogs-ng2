import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { DataExchangeService } from '../services/dataexchange.service'
import { DataManipulationService } from '../services/datamanipulation.service'

@Component({
    selector: 'list-view',
    templateUrl: './listview.component.html',
    styleUrls: ['./listview.component.css']
})
export class ListView implements OnInit{
    constructor(
        private dataexchangeservice: DataExchangeService,
        private datamanipulationservice: DataManipulationService,
        // private sanitizer: DomSanitizer
    ){}
    @Input('list') list: string[];
    @Input('styling') styling:any;
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
    // private listitem(index: number):any {
    //     return this.sanitizer.bypassSecurityTrustHtml(this.list[index]);
    // }
}