function status(request: Request, response: Response) {
    console.log("Status API is running");
    
    return response.status(200).json({
        status: "ok"
    })
}

export default status;