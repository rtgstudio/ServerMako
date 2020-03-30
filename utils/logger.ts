//@ts-ignore
import log from 'log-to-file';

export class makoLogger {
    
    private fileName:string 

    constructor(fileName:string){
        this.fileName=fileName
    }
  
    logger(message:string){
        log(message,this.fileName)
    }
}