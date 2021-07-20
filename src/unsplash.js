const axios = require("axios");

const random = async () => {
    const image = await axios.get("https://unsplash.it/1000/500", {
        responseType: "arraybuffer",
    });

    const base64 = Buffer.from(image.data).toString("base64");

    return `data:${image.headers["content-type"]};base64,${base64}`;
};

module.exports = { random };
