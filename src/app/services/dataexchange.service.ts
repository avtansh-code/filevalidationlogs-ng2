import { Injectable } from '@angular/core';

@Injectable()
export class DataExchangeService{
    private _data: object;
    private _listColors: object;
    private _labelSize: string;
    private _textSize: string;
    private _pageSize: number;

    /**
     * @param  {object} data
     * @returns void
     * receives the data variable from the file-tabs component and stores it in the service
     */
    public set data(data:object){
        this._data = data;
    }
    
    /**
     * @returns object
     * returns the saved data variable for its use in the other components
     */
    public get data(): object{
        return this._data;
    }

    /**
     * @param  {any} listColor
     * @returns void
     * recives the list colors object passed as argument to file-tabs and stores it in the service
     */
    public set listColors(listColor: object){
        this._listColors = listColor;
    }

    /**
     * @returns object
     * returns the list colors stored in the service to the compennets which need it
     */
    public get listColors(): object{
        return this._listColors;
    }
    
    /**
     * @param  {string} labelSize
     * @returns void
     * stores the label size inputted by the user to the file-tabs
     */
    public set labelSize(labelSize: string){
        this._labelSize = labelSize;
    }

    
    /**
     * @returns string
     * returns the label size to the compenents which require it
     */
    public get labelSize(): string{
        return this._labelSize; 
    }
    
    /**
     * @param  {string} textSize
     * @returns void
     * receives and stores the text size input by the user in file-tabs
     */
    public set textSize(textSize: string){
        this._textSize = textSize;
    }
    
    /**
     * @returns string
     * returns the textsize to the components which require it
     */
    public get textSize(): string{
        return this._textSize;
    }
    
    /**
     * @param  {number} pageSize
     * @returns void
     * receives and stores the pagesize for pagination purposes
     */
    public set pageSize(pageSize: number){
        this._pageSize = pageSize;
    }

    /**
     * @returns number
     * returns the pagesize to the component where the list will be displayed
     */
    public get pageSize(): number{
        return this._pageSize;
    }

    /**
     * @returns string
     * returns the array containing the name of all the files whose logs are being displayed
     */
    public get fileList(): string[]{
        return (Object.keys(this._data));
    }
    
    /**
     * @returns string
     * returns the array of the different types of logs that are being displayed - errors & warnings
     */
    public get listName(): string[]{
        const files:string[] = this.fileList;
        return (Object.keys(this._data[files[0]]));
    }
}