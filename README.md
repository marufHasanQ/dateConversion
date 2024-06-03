
# dateConversion
A web api that changes Gregorian calender date to 
Bangla calender date.
 


## API Reference
#### General request Formmate :
#### GET /`conversion method ` /`day`/`month`/`year` 

#### Example :
```http
  http://HOSTNAME/g2b/15/6/1997
```
#### Eligeble Values For Conversion Metheod:
| Parameter  | Description                |
| :-------- | :------------------------- |
| `b2g`  | convert Bangla calender date to Gregorian calender date |
| `g2b`  | convert Gregorian calender date to Bangla calender date |


#### Output Formate :
```json
{ 
    day: 6,
    month: 8,
    year: 1429
}
```
## License


[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

## Authors

- [@marufHasanQ](https://github.com/marufHasanQ)
