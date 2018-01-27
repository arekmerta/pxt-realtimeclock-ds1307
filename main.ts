// Auto-generated. Do not edit.



    //% color=80 weight=80
    //% icon="\uf017"
 namespace Time {

    /**
     * gets the current time.
     */
    //% weight=30 blockId="rtc_ds_get_time" block="Time"
    export function getCurrentTime(): string {

        return "z:z"    
    }

    /**
     * gets the current unix timestamp.
     */
    //% weight=30 blockId="rtc_ds_get_unixtime" block="Time"
    export function getUnixTimestamp(): number{
return 7
}

    /**
     * gets the current datetimepart.
     */
    //% weight=30 blockId="rtc_ds_get_part" block="Time"
    export function getTimePart(part: DateTimePart): number{
    return 6;
}

    /**
     * sets the current time.
     */
    //% weight=30 blockId="rtc_ds_set_unixtime" block="Time"
    export function setUnixTime(uxtime: number): void{
}

    /**
     * sets the current datetimepart.
     */
    //% weight=30 blockId="rtc_ds_set_part" block="Time"
    export function setTimePart(part: DateTimePart, val: number): void{
    }
}
