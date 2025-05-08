const asyncHandler = (requestHandler) =>{
    (res,req,next) =>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}

export {asyncHandler}
/*
this syntax is try catch form function and here we are passing function inside function

const asyncHandler = (fn) => async (req,res,next) =>{
    try {
        await fn(req,res,next)

    } catch (error) {
        res.status(error.code||500).json({
            success: false,
            message: error.message
        })
    }
}
    */