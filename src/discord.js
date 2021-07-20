const axios = require("axios");
const config = require("config");

const updateBanner = async (base64) => {
    try {
        const res = await axios.patch(
            "https://discord.com/api/v9/users/@me",
            {
                banner: base64,
            },
            {
                headers: {
                    authorization: config.get("user-token"),
                    "Content-Type": "application/json",
                },
            }
        );

        return res.data;
    } catch (error) {
        return error.response;
    }
};

module.exports = { updateBanner };
