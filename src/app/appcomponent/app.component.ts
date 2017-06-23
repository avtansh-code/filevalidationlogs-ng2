import { Component } from '@angular/core'

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent{
    private data:object = {
		"raw_input_file_0.txt":{
			"errors":[
				"Row Number <b>21</b> : column <b>SAMPLE_#SNYGTT5_2_5</b> has <b>negative</b> value", 
				"Row Number <b>6</b> : column <b>SAMPLE_#SNYGTT5_2_10</b> has <b>negative</b> value",
				"Row Number <b>32</b> : column <b>SAMPLE_#SNYGTT5_2_5</b> has <b>negative</b> value", 
				"Row Number <b>18</b> : column <b>SAMPLE_#SNYGTT5_2_10</b> has <b>negative</b> value",
				"Row Number <b>12</b> : column <b>SAMPLE_#SNYGTT5_2_5</b> has <b>negative</b> value", 
				"Row Number <b>11</b> : column <b>SAMPLE_#SNYGTT5_2_10</b> has <b>negative</b> value",
				"Row Number <b>102</b> : column <b>SAMPLE_#SNYGTT5_2_5</b> has <b>negative</b> value", 
				"Row Number <b>44</b> : column <b>SAMPLE_#SNYGTT5_2_10</b> has <b>negative</b> value",
				"Row Number <b>73</b> : column <b>SAMPLE_#SNYGTT5_2_5</b> has <b>negative</b> value", 
				"Row Number <b>97</b> : column <b>SAMPLE_#SNYGTT5_2_10</b> has <b>negative</b> value",
				"Row Number <b>20</b> : column <b>SAMPLE_#SNYGTT5_2_5</b> has <b>negative</b> value", 
				"Row Number <b>15</b> : column <b>SAMPLE_#SNYGTT5_2_10</b> has <b>negative</b> value"
				],
			"warnings":[
				"<b>Action</b>: Missing value of columns replaced with 0<br/><b>Message</b>: Row Number <b>8192</b> : column <b>Area</b> has <b>missing</b> value",
				"<b>Action</b>: Missing value of columns replaced with 0<br/><b>Message</b>: Row Number <b>8197</b> : column <b>Area</b> has <b>missing</b> value",
				"<b>Action</b>: Missing value of columns replaced with 0<br/><b>Message</b>: Row Number <b>6</b> : column <b>Area</b> has <b>missing</b> value",
				"<b>Action</b>: Missing value of columns replaced with 0<br/><b>Message</b>: Row Number <b>7</b> : column <b>Area</b> has <b>missing</b> value",
				"<b>Action</b>: Missing value of columns replaced with 0<br/><b>Message</b>: Row Number <b>8</b> : column <b>Area</b> has <b>missing</b> value",
				"<b>Action</b>: Missing value of columns replaced with 0<br/><b>Message</b>: Row Number <b>9</b> : column <b>Area</b> has <b>missing</b> value",
				"<b>Action</b>: Missing value of columns replaced with 0<br/><b>Message</b>: Row Number <b>10</b> : column <b>Area</b> has <b>missing</b> value",
				"<b>Action</b>: Missing value of columns replaced with 0<br/><b>Message</b>: Row Number <b>11</b> : column <b>Area</b> has <b>missing</b> value",
				"<b>Action</b>: Missing value of columns replaced with 0<br/><b>Message</b>: Row Number <b>12</b> : column <b>Area</b> has <b>missing</b> value",
				"<b>Action</b>: Missing value of columns replaced with 0<br/><b>Message</b>: Row Number <b>13</b> : column <b>Area</b> has <b>missing</b> value",
				"<b>Action</b>: Missing value of columns replaced with 0<br/><b>Message</b>: Row Number <b>14</b> : column <b>Area</b> has <b>missing</b> value",
				"<b>Action</b>: Missing value of columns replaced with 0<br/><b>Message</b>: Row Number <b>20</b> : column <b>Area</b> has <b>missing</b> value",
				"<b>Action</b>: Missing value of columns replaced with 0<br/><b>Message</b>: Row Number <b>22</b> : column <b>Area</b> has <b>missing</b> value",
				"<b>Action</b>: Missing value of columns replaced with 0<br/><b>Message</b>: Row Number <b>23</b> : column <b>Area</b> has <b>missing</b> value",
				"<b>Action</b>: Missing value of columns replaced with 0<br/><b>Message</b>: Row Number <b>24</b> : column <b>Area</b> has <b>missing</b> value",
				"<b>Action</b>: Missing value of columns replaced with 0<br/><b>Message</b>: Row Number <b>25</b> : column <b>Area</b> has <b>missing</b> value",
				"<b>Action</b>: Missing value of columns replaced with 0<br/><b>Message</b>: Row Number <b>26</b> : column <b>Area</b> has <b>missing</b> value",
				"<b>Action</b>: Missing value of columns replaced with 0<br/><b>Message</b>: Row Number <b>9562</b> : column <b>Area</b> has <b>missing</b> value",
				"<b>Action</b>: Missing value of columns replaced with 0<br/><b>Message</b>: Row Number <b>30</b> : column <b>Area</b> has <b>missing</b> value",
				"<b>Action</b>: Missing value of columns replaced with 0<br/><b>Message</b>: Row Number <b>31</b> : column <b>Area</b> has <b>missing</b> value",
				"<b>Action</b>: Missing value of columns replaced with 0<br/><b>Message</b>: Row Number <b>32</b> : column <b>Area</b> has <b>missing</b> value",
				"<b>Action</b>: Missing value of columns replaced with 0<br/><b>Message</b>: Row Number <b>33</b> : column <b>Area</b> has <b>missing</b> value",
				"<b>Action</b>: Missing value of columns replaced with 0<br/><b>Message</b>: Row Number <b>34</b> : column <b>Area</b> has <b>missing</b> value",
				"<b>Action</b>: Missing value of columns replaced with 0<br/><b>Message</b>: Row Number <b>35</b> : column <b>Area</b> has <b>missing</b> value"
				]
			},
		"metadata_mq_0.xlsx":{
			"errors":[
				"Row Number <b>21</b> : column <b>SAMPLE_#SNYGTT5_2_5</b> has <b>negative</b> value", 
				"Row Number <b>6</b> : column <b>SAMPLE_#SNYGTT5_2_10</b> has <b>negative</b> value"
				],
			"warnings":[
				"<b>Action</b>: Missing value of columns replaced with 0<br/><b>Message</b>: Row Number <b>14</b> : column <b>Area</b> has <b>missing</b> value",
				"<b>Action</b>: Missing value of columns replaced with 0<br/><b>Message</b>: Row Number <b>20</b> : column <b>Area</b> has <b>missing</b> value",
				"<b>Action</b>: Missing value of columns replaced with 0<br/><b>Message</b>: Row Number <b>22</b> : column <b>Area</b> has <b>missing</b> value",
				"<b>Action</b>: Missing value of columns replaced with 0<br/><b>Message</b>: Row Number <b>23</b> : column <b>Area</b> has <b>missing</b> value",
				"<b>Action</b>: Missing value of columns replaced with 0<br/><b>Message</b>: Row Number <b>24</b> : column <b>Area</b> has <b>missing</b> value",
				"<b>Action</b>: Missing value of columns replaced with 0<br/><b>Message</b>: Row Number <b>25</b> : column <b>Area</b> has <b>missing</b> value",
				"<b>Action</b>: Missing value of columns replaced with 0<br/><b>Message</b>: Row Number <b>26</b> : column <b>Area</b> has <b>missing</b> value",
				"<b>Action</b>: Missing value of columns replaced with 0<br/><b>Message</b>: Row Number <b>9562</b> : column <b>Area</b> has <b>missing</b> value",
				"<b>Action</b>: Missing value of columns replaced with 0<br/><b>Message</b>: Row Number <b>30</b> : column <b>Area</b> has <b>missing</b> value",
				"<b>Action</b>: Missing value of columns replaced with 0<br/><b>Message</b>: Row Number <b>31</b> : column <b>Area</b> has <b>missing</b> value",
				"<b>Action</b>: Missing value of columns replaced with 0<br/><b>Message</b>: Row Number <b>32</b> : column <b>Area</b> has <b>missing</b> value",
				"<b>Action</b>: Missing value of columns replaced with 0<br/><b>Message</b>: Row Number <b>33</b> : column <b>Area</b> has <b>missing</b> value",
				"<b>Action</b>: Missing value of columns replaced with 0<br/><b>Message</b>: Row Number <b>34</b> : column <b>Area</b> has <b>missing</b> value",
				"<b>Action</b>: Missing value of columns replaced with 0<br/><b>Message</b>: Row Number <b>35</b> : column <b>Area</b> has <b>missing</b> value"
			]
		}
	};
    listcolors:object = {errors:"#EA4436",warnings:"#C27600"};

    private header:string = 'default';
    private icon:string = 'block';
    private stringData:string = JSON.stringify(this.data, null, 4);
}