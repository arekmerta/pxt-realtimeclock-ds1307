// Auto-generated. Do not edit.



    //% color=80 weight=80
    //% icon="\uf017"
 namespace Time {

    /**
     * gets the current time.
     */
    //% blockId=rtc_ds_get_time
    //% block="the current time" shim=Time::getCurrentTime
    export function getCurrentTime(): string {

        return "z:z"    
    }

    /**
     * gets the current unix timestamp.
     */
    //% blockId=rtc_ds_get_unixtime
    //% block="the current unix timestamp" shim=Time::getUnixTimestamp
    export function getUnixTimestamp(): number;

    /**
     * gets the current datetimepart.
     */
    //% blockId=rtc_ds_get_part
    //% block="the current %part" shim=Time::getTimePart
    export function getTimePart(part: DateTimePart): number;

    /**
     * sets the current time.
     */
    //% blockId=rtc_ds_set_unixtime
    //% block="set unix time to |%uxtime" shim=Time::setUnixTime
    export function setUnixTime(uxtime: number): void;

    /**
     * sets the current datetimepart.
     */
    //% blockId=rtc_ds_set_part
    //% block="set the current %part| to |%val" shim=Time::setTimePart
    export function setTimePart(part: DateTimePart, val: number): void;
}

// Auto-generated. Do not edit. Really.
