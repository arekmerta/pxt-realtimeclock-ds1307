// Auto-generated. Do not edit.



    //% color=80 weight=80
    //% icon="\uf017"
 namespace Time {

var DateTimePart = {
    Seconds : 0,
    Minutes : 1,
    Hours : 2,
    Day : 3,
    Month : 4,
    Year : 5,
};


    /**
     * gets the current time.
     */
    //% weight=30 blockId="rtc_ds_get_time" block="Get Current Time"
    export function getCurrentTime(): string {

        return "z:z"    
    }

    /**
     * gets the current unix timestamp.
     */
    //% weight=30 blockId="rtc_ds_get_unixtime" block="Get Unix Timestamp"
    export function getUnixTimestamp(): number{
return 7
}

    /**
     * gets the current datetimepart.
     */
    //% weight=30 blockId="rtc_ds_get_part" block="Get Time Part"
    export function getTimePart(part: DateTimePart): number{
    return 6;
}

    /**
     * sets the current time.
     */
    //% weight=30 blockId="rtc_ds_set_unixtime" block="Set Unix Time"
    export function setUnixTime(uxtime: number): void{
}

    /**
     * sets the current datetimepart.
     */
    //% weight=30 blockId="rtc_ds_set_part" block="Set Time Part"
    export function setTimePart(part: DateTimePart, val: number): void{
    }
}
