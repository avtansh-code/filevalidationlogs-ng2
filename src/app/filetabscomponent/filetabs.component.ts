import { Component, Input, OnInit } from '@angular/core';

import { DataExchangeService } from '../services/dataexchange.service'
import { DataManipulationService } from '../services/datamanipulation.service'

@Component({
  selector: 'file-tabs',
  styleUrls: ['./filetabs.component.css'],
  templateUrl: './filetabs.component.html'
})
export class FileTabs implements OnInit{
  constructor(
    private dataexchangeservice: DataExchangeService,
    private datamanipulationservice: DataManipulationService
  ){}
  @Input('data') data: object;
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
