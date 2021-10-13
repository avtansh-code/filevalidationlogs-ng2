import { DataExchangeService } from './dataexchange.service'
import { DataManipulationService} from './datamanipulation.service'
describe('testing data manipulation service', () => {
    let _data:object = {
			"file 1": {
				"errors": ["error1", "error2", "error3", "error4", "error5", "error6"],
				"warnings": []
			},
			"file 2": {
				"errors": ["error1", "error2", "error3", "error4"],
				"warnings": ["warning1", "warning2", "warning3", "warning4"]
			},
			"file 3": {
				"errors": ["error1", "error2", "error3"],
				"warnings": ["warning1", "warning2", "warning3", "warning4", "warning5", "warning6"]
			},
			"file 4": {
				"errors": [],
				"warnings": [],
			},
			"file 5": {
				"errors": [],
				"warnings": ["warning1", "warning2", "warning3", "warning4", "warning5"]
			},
			"file 6": {
				"errors": ["error1"],
				"warnings": ["warning1"]
			}
		};
    let _listcolors:object = {errors:"#EA4436",warnings:"#C57D00"};
    let _labelsize:string = '1.9em';
    let _textsize:string = '1em';
    let _pageSize:number = 5;
    let _textstyle = [
            {
                "font-size" : "1em",
                "color" : "#EA4436"
            },
            {
                "font-size" :  "1em",
                "color" : "#C57D00"
            }
        ];
    
    let _labelstyle = [
            {
                "background-color" : "rgba(234,68,54,0.3)",
                "border" : "0.5px solid #EA4436" ,
                "padding": '0 20px 0 20px'
            },
            {
                "background-color" : "rgba(197,125,0,0.3)",
                "border" : "0.5px solid #C57D00",
                "padding": '0 20px 0 20px'
            }
        ];
    
    let _labeltext = [
            {
                "font-size" : "1.9em",
                "color" : "#EA4436" 
            },
            {
                "font-size" :  "1.9em",
                "color" : "#C57D00"
            }
        ];
    let dataExchangeService : DataExchangeService;
    let dataManipulationService : DataManipulationService;

    beforeEach( () =>{
        dataExchangeService = new DataExchangeService;
        dataExchangeService.data = _data;
        dataExchangeService.labelSize = _labelsize;
        dataExchangeService.listColors = _listcolors;
        dataExchangeService.textSize = _textsize;
        dataExchangeService.pageSize = _pageSize;
        dataManipulationService = new DataManipulationService(dataExchangeService);
        dataManipulationService.initializeStyles();
    });

    describe('constructor', () => {
        it('should instantiate', () => {
            expect(dataManipulationService).toBeDefined();
        })
    });

    it('returns the total count of the list - errors here', () =>{
        let result =  dataManipulationService.totalCount("errors");
        expect(result).toBe(14);
        expect(typeof result).toBe('number');
    });

    it('returns the count of logs in a file - file 2 here', () =>{
        let result =  dataManipulationService.fileCount("file 2");
        expect(result).toBe(8);
        expect(typeof result).toBe('number');
    });

    it('returns the object for the text style', () =>{
        let result = dataManipulationService.textStyle;
        expect(result).toEqual(_textstyle);
    });

    it('returns the object for the label style', () =>{
        let result = dataManipulationService.labelStyle;
        expect(result).toEqual(_labelstyle);
    });

    it('returns the object for the label text style', () =>{
        let result = dataManipulationService.labelText;
        expect(result).toEqual(_labeltext);
    });
});