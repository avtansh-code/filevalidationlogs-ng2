import { Component, Input, OnInit } from '@angular/core';

import { DataExchangeService } from '../services/dataexchange.service'
import { DataManipulationService } from '../services/datamanipulation.service'

@Component({
  selector: 'file-tabs',
  styles: [
    `
    :host /deep/ .mat-ink-bar{
        height: 5px !important;
        color: #4931B2 !important;
    }

    :host /deep/ .mat-tab-label-active{
        background-color: #ffffff !important;
        color: #4931B2 !important;
    }

    :host /deep/ .mat-tab-label{
        font-weight: bold;
        font-size: 1.2em;
        min-width: 100px !important;
        max-width: 200px !important;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis; 
    }

    :host /deep/ .mat-raised-button{
        min-width: 0px !important;
        padding: 0px 5px !important;
    }
    :host /deep/ .mat-tab-header{
        width: calc(100% - 30px);
    }

    :host /deep/ .mat-tab-body{
        border-spacing: 0px;
    }
    .and-text{
        color: #000;
    }

    .tab-controller{
        margin-top: 30px;
        position: relative;
    }

    .download{
        right:0;
        top: 15px;
        width: auto;
        position:absolute;
        
    }

    .download{
        cursor: pointer;
        z-index: 1000;
        text-decoration: none !important;
    }
    
    .top_bar{
        font-size: 1.5em;
        padding: 0px;
        margin-top: 30px;
        font-weight: bold;
    }

    .download:focus{
        outline: none !important;
    }

    .glyphicon{
        margin: 0px !important;
    }
    `
  ],
  template: `
    <div class="top_bar" *ngIf="customTitle === true">
        <span [innerHtml] = "title">
        </span>
    </div>
    <div class="tab-controller">
        <span class="download" (click)="setupDownloadLink()" [style.display]="downloadIcon">
            <i class="zmdi zmdi-download zmdi-hc-3x"></i>
        </span>
        <div class="filetabs">
            <md-tab-group>
                <span *ngFor="let file of fileList(); let i=index">
                    <md-tab label={{file|uppercase}}
                        *ngIf="fileCount(file) > 0">
                        <accordion-view [file-data]="fileData(file)"></accordion-view>
                    </md-tab>
                </span>
            </md-tab-group>
        </div>
    </div>
  `
})
export class FileTabs implements OnInit{
  constructor(
    private dataexchangeservice: DataExchangeService,
    private datamanipulationservice: DataManipulationService
  ){}
  @Input('data') data: any;
  @Input('list-colors') listColors: any;
  @Input('label-size') labelSize: string;
  @Input('text-size') textSize: string;
  @Input('download-icon') downloadIcon: string;
  @Input('page-size') pageSize: number;
  @Input('title') title: string;

  private customTitle: boolean = true;
  
  ngOnInit(): void{
    
    if(this.labelSize === undefined){
        this.labelSize = "25px";
    }

    if(this.textSize === undefined){
        this.textSize = "15px"
    }

    if(this.pageSize === undefined){
        this.pageSize = 10;
    }

    if(this.downloadIcon === undefined){
        this.downloadIcon = "block";
    }

    if(this.listColors === undefined){
        let lists = Object.keys(this.data[Object.keys(this.data)[0]]);
        let lColors: string = '{';
        for(let list of lists){
            lColors += `"${list}":"#000000",`;
        }
        lColors = lColors.slice(0, -1);
        lColors += "}";
        this.listColors = JSON.parse(lColors);
    }

    if(this.title === undefined){
        this.customTitle = false;
    }

    this.dataexchangeservice.data = this.data;
    this.dataexchangeservice.labelSize = this.labelSize;
    this.dataexchangeservice.listColors = this.listColors;
    this.dataexchangeservice.pageSize = this.pageSize;
    this.dataexchangeservice.textSize = this.textSize;
  }

  private fileList(): string[]{
    return this.dataexchangeservice.fileList;
  }

  /**
     * @returns string
     * returns the names of all the lists present in the data
     * returned value called from fvlFacadeService
     */
    public listNames():string[]{
        return this.dataexchangeservice.listName;
    } 

    
    /**
     * @param  {string} list
     * @returns number
     * returns the total count of the logs present in all the files for the passed listname
     * returned value called from fvlFacadeService
     */
    public totalCount(list:string):number{
        return this.datamanipulationservice.totalCount(list);
    }

    
    /**
     * @param  {string} file
     * @returns number
     * returns the count of the total logs given in the passed filename
     * returned value called from fvlFacadeService
     */
    public fileCount(file:string):number{
        return this.datamanipulationservice.fileCount(file);
    }

    
    /**
     * @param  {string} list
     * @returns string
     * returns the color associated to the passed list
     */
    public listColor(list:string):string{
        return this.listColors[list];
    }

    
    /**
     * @param  {string} file
     * @returns any
     * returns the data for a particular file(the one passed as argument)
     */
    public fileData(file:string):any{
        return this.data[file];
    }

   
    /**
     * @returns void
     * setting up the download link - including the download action
     */
    public setupDownloadLink():void{ 
        this.datamanipulationservice.downloadlinkHtml();
    }
}
