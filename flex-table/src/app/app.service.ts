import { Injectable } from '@angular/core';

class Data {
    id: number;
    value1: string;
    value2: string;
    value3: string;
    value4: string;
    value5: string;
    value6: string;
    value7: string;
    value8: string;
    value9: string;
    value10: string;
    value11: string;
    value12: string;
};

@Injectable()
export class DataService {
    data: Data[] = [];
    constructor() { }

    makeData() {
        this.data = Array.apply(null, Array(100)).map((val: Data, idx: number) => {
            val = {
                id: idx,
                value1: 'test',
                value2: 'test',
                value3: 'test',
                value4: 'test',
                value5: 'test',
                value6: 'test',
                value7: 'test',
                value8: 'test',
                value9: 'test',
                value10: 'test',
                value11: 'test',
                value12: 'test',
            };
            return val;
        });
    }
}