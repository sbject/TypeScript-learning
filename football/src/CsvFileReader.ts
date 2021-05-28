import fs from 'fs';

export class CsvFileReader {
    data: string[][] = [];
    constructor(public filename:string){}

    read():void {
        this.data = fs.readFileSync(this.filename,{
            //return string and not a buffer we have add encoding
            encoding:'utf-8'
        })
        .split('\n')
        .map((row:string):string[] =>{
            return row.split(',');
        }
        )
    }
}