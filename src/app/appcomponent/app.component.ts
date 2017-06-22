import { Component } from '@angular/core'

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent{
    data:object = {
        "file 1": {
            "errors": ["<b>error1</b>", "error2", "error3", "error4", "error5", "error6"],
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
    listcolors:object = {errors:"#EA4436",warnings:"#C27600"};
}