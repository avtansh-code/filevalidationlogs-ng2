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
  @Input('listcolors') listcolors: object;
  @Input('labelsize') labelsize: string;
  @Input('textsize') textsize: string;
  @Input('download-icon') downloadIcon: string;
  @Input('page-size') pageSize: number;
  
  ngOnInit(): void{
    this.dataexchangeservice.Data = this.data;
    this.dataexchangeservice.labelSize = this.labelsize;
    this.dataexchangeservice.listColors = this.listcolors;
    this.dataexchangeservice.pageSize = this.pageSize;
    this.dataexchangeservice.textSize = this.textsize;
  }

  private file_list(): string[]{
    return this.dataexchangeservice.fileList;
  }

  /**
     * @returns string
     * returns the names of all the lists present in the data
     * returned value called from fvlFacadeService
     */
    public list_names():string[]{
        return this.dataexchangeservice.listName;
    } 

    
    /**
     * @param  {string} list
     * @returns number
     * returns the total count of the logs present in all the files for the passed listname
     * returned value called from fvlFacadeService
     */
    public total_count(list:string):number{
        return this.datamanipulationservice.totalcount(list);
    }

    
    /**
     * @param  {string} file
     * @returns number
     * returns the count of the total logs given in the passed filename
     * returned value called from fvlFacadeService
     */
    public file_count(file:string):number{
        return this.datamanipulationservice.filecount(file);
    }

    
    /**
     * @param  {string} list
     * @returns string
     * returns the color associated to the passed list
     */
    public listcolor(list:string):string{
        return this.listcolors[list];
    }

    
    /**
     * @param  {string} file
     * @returns any
     * returns the data for a particular file(the one passed as argument)
     */
    public filedata(file:string):any{
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
