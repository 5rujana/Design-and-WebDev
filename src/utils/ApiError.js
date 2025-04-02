class ApiError extends Errors{
    constructor(
        statusCode,
        message = "Something has gone wrong",
        error = [],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode,
        this.message = message,
        this.error = error,
        this.data = null,
        this.success = fail
        if(stack){
            this.stack = stack
        }else{
            Error.stackTraceLimit(this,this.constuctor)
        }
    }
}

export {ApiError}