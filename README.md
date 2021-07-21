# discord-banner-uploader
This is one of my smaller and simpler projects. This project uses unsplash random image URl to cahnge your discord banner every day at exactly midnight (00:00). If you are interested, see the guide below:

---
## Setup

### Step 1: Cloning the repo
First you have to clone this repository. You can that by downloading the zip, or entering `git clone https://github.com/TenViki/discord-banner-uploader/` in your terminal. This should create a folder in that directory.

### Step 2: Installing all dependencies
Navigate to the created folder and enter command `npm i`. This will install (assuming you have Node package manager installed) all the dependencies. If everything went successfuly, you can continue to next step.

### Step 3: Configuring
You need to create a `config` folder inside you repository. Inside it you will have to create `default.json` file. The resulting structure should look something like this:

```
discord-banner-uploader
├ config
│ └ default.json
├ src
│ ├ app.js
│ ...
├ package.json
├ README.md
...
```
Now inside that `default.json` put this code below, and put your discord token inside:
``` json
{
    "user-token": "Your discord token will go here"   
}
```

### Step 4: Running
Now tht you have everything setup, you are now ready to run the script! in your terminal, enter `node ./src/app.js` and you are ready to go!
