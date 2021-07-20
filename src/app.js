const unsplash = require("./unsplash");
const discord = require("./discord");
const scheduler = require("node-schedule");
const fs = require("fs");

const run = async () => {
    const image = await unsplash.random();
    const response = await discord.updateBanner(image);

    if (response.data?.errors) {
        console.log("Error:", response.data.errors?.banner);
    } else {
        console.log("Successfuly changed image!");
    }
};

scheduler.scheduleJob("0 0 * * *", run);
