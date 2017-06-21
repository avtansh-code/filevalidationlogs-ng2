import { Injectable } from '@angular/core';

@Injectable()
export class DataExchangeService{
    private data: object;
    private listcolors: object;
    private labelsize: string;
    private textsize: string;
    private pagesize: number;

    /**
     * @param  {object} data
     * @returns void
     * receives the data variable from the file-tabs component and stores it in the service
     */
    public set Data(data:object){
        this.data = data;
    }
    
    /**
     * @returns object
     * returns the saved data variable for its use in the other components
     */
    public get Data(): object{
        return this.data;
    }

    /**
     * @param  {any} listcolor
     * @returns void
     * recives the listcolors object passed as argument to file-tabs and stores it in the service
     */
    public set listColors(listcolor: object){
        this.listcolors = listcolor;
    }

    /**
     * @returns object
     * returns the listcolors stored in the service to the compennets which need it
     */
    public get listColors(): object{
        return this.listcolors;
    }
    
    /**
     * @param  {string} labelsize
     * @returns void
     * stores the label size inputted by the user to the file-tabs
     */
    public set labelSize(labelsize: string){
        this.labelsize = labelsize;
    }

    
    /**
     * @returns string
     * returns the labelsize to the compenents which require it
     */
    public get labelSize(): string{
        return this.labelsize; 
    }
    
    /**
     * @param  {string} textsize
     * @returns void
     * receives and stores the textsize input by the user in file-tabs
     */
    public set textSize(textsize: string){
        this.textsize = textsize;
    }
    
    /**
     * @returns string
     * returns the textsize to the components which require it
     */
    public get textSize(): string{
        return this.textsize;
    }
    
    /**
     * @param  {number} pagesize
     * @returns void
     * receives and stores the pagesize for pagination purposes
     */
    public set pageSize(pagesize: number){
        this.pagesize = pagesize;
    }

    /**
     * @returns number
     * returns the pagesize to the component where the list will be displayed
     */
    public get pageSize(): number{
        return this.pagesize;
    }

    /**
     * @returns string
     * returns the array containing the name of all the files whose logs are being displayed
     */
    public get fileList(): string[]{
        return (Object.keys(this.data));
    }
    
    /**
     * @returns string
     * returns the array of the different types of logs that are being displayed - errors & warnings
     */
    public get listName(): string[]{
        const files:string[] = this.fileList;
        return (Object.keys(this.data[files[0]]));
    }
}