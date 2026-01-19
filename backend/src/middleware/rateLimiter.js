import ratelimit from "../config/upstash.js";



const rateLimiter = async (req, res, next) => {

    try {
        const { success } = await ratelimit.limit("my-limit-key");
        // per user, so not everyone gets blocked, userid
        if (!success) {
            return res.status(429).json({
                message: "Too many requests, please try again later"
            });
        }

        next();

    } catch (error) {
        console.log("Rate limit error", error);
        next(error);
    }
};

export default rateLimiter;