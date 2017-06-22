import { Injectable } from '@angular/core';
import { DataExchangeService } from './dataexchange.service';

@Injectable()
export class DataManipulationService{
    constructor(
        private dataexchangeservice: DataExchangeService
    ){}
    private _labelText: any = [];
    private _labelStyle: any = [];
    private _textStyle: any = [];

    /**
     * @param  {string} list
     * @returns number
     * returns the total count of logs for a particular list in all the files
     */
    public totalCount(list: string): number{
        let _totalCount:number = 0;
        let data: any = this.dataexchangeservice.data;
        for (let file of this.dataexchangeservice.fileList) 
        {
            _totalCount = _totalCount + data[file][list].length;
        }
        return _totalCount;
    }

    
    /**
     * @param  {string} file
     * @returns number
     * returns the no of logs for a particular file
     */
    public fileCount(file:string):number{
        let _fileCount:number = 0;
        let data: any = this.dataexchangeservice.data;
        for (let list of this.dataexchangeservice.listName) 
        {
            _fileCount = _fileCount + data[file][list].length;
        }
        return _fileCount;
    }

    /**
     * @returns void
     * setup the html data for the download link and call the function to implement download
     */
    public downloadlinkHtml():void{

        /*Loops to build the logs file that has to be downloaded*/
        let logs:string = 'The file(s) contains';
        let length:number = this.dataexchangeservice.listName.length;
        let data: any = this.dataexchangeservice.data;
        let count:number= 0;

        for(let list of this.dataexchangeservice.listName){
            logs = `${logs} <b>${this.totalCount(list)} ${list} </b>`;
            if(count < length-1)
            {
                logs = `${logs} and`;
            }
            count++;
        }

        logs = `${logs}\n\n`;
        for (let file of this.dataexchangeservice.fileList) 
        {
            if(this.fileCount(file) > 0){
                logs = `${logs}\t<h1>${file}</h1>\n\t<div>\n`;
                for(let list of this.dataexchangeservice.listName)
                {
                    if(data[file][list].length>0)
                    {
                        logs = `${logs}\t\t<h4>${list}
                        (${data[file][list].length})</h4>\n`;
                        logs = `${logs}\t\t<ul>\n`;
                        for(let count = 0; 
                            count < data[file][list].length; 
                            count++)
                        {
                            
                            logs = `${logs}\t\t\t<li>
                            ${data[file][list][count]}
                            </li>\n`;
                        }
                        logs = `${logs}\t\t</ul><br/>\n`;
                    }
                }
                logs = `${logs}\t</div><br/><br/>\n`;
            }
        }
        this.downloadAction(logs);	        
    }

    /**
     * @param  {string} logs
     * @returns void
     * This funtion generates the action of download when the download button is clicked.
       It generates a temporary anchor tag that is used to download the required html file.
       And then it deletes that anchor tag once done.
     */
    private downloadAction(logs:string):void{
        let uri = 'data:text/html;charset=utf-8,' + encodeURIComponent(logs);
        let downloadLink = document.createElement("a");
        downloadLink.setAttribute("href", uri);
        downloadLink.setAttribute("download", "errors and warnings.html");
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }

    /**
     * @param  {string} hex
     * @returns any
     * This function is used to convert the hex value of a color to its RGB format.
       It takes in a hex string as input and outputs three variables R,G and B, 
       ie, their cooresponding values
     */
    private hexToRgb(hex:string):any {
        let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function(m, r, g, b) {
            return r + r + g + g + b + b;
        });

        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    /**
     * @returns void
     * This function is used to initialize the styling arrays(labelStyle, labelText, textStyle) 
       that are required to give the style to the label and the text that are present in ui
     */
    public initializeStyles():void{
        let r,g,b;
        for(let count = 0; count<this.dataexchangeservice.listName.length; count++){
            this._labelText[count] = {
                'color': this.dataexchangeservice.listColors[this.dataexchangeservice.listName[count]],
                'font-size': this.dataexchangeservice.labelSize
            }
            this._textStyle[count] = {
                'font-size': this.dataexchangeservice.textSize,
                'color': this.dataexchangeservice.listColors[this.dataexchangeservice.listName[count]]
            }
            r = this.hexToRgb(this.dataexchangeservice.listColors[this.dataexchangeservice.listName[count]]).r;
            g = this.hexToRgb(this.dataexchangeservice.listColors[this.dataexchangeservice.listName[count]]).g;
            b = this.hexToRgb(this.dataexchangeservice.listColors[this.dataexchangeservice.listName[count]]).b;
            this._labelStyle[count] = {
                'background-color': `rgba(${r},${g},${b},0.3)`,
                'border': `0.5px solid ${this.dataexchangeservice.listColors[this.dataexchangeservice.listName[count]]}`,
                'padding': '0 20px 0 20px'
            }
        }
    }

    /**
     * @returns any
     * returns the array which stores the styling for the text displayed(list)
     */
    public get textStyle():any{
        return this._textStyle;
    }

    
    /**
     * @returns any
     * returns the array which stores the styling for the label container
     */
    public get labelStyle():any{
        return this._labelStyle;
    }

    
    /**
     * @returns any
     * returns the array which stores the styling for the label text
     */
    public get labelText():any{
        return this._labelText;
    }
}