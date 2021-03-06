# The Macamation folder
This folder is where I (Macley) mostly (wish to) work in.
Here i do all the automation for the project and try to make the work of Siren easier and/or make the site faster/beter.

This readme is just to explain what the folders and workflows do, so you can use it for your own projects aswell!
I try to make everything simple, flexible and easy to understand. However you should always try these scripts in a pre-production branch.
Some scripts like purgeCSS remove code, that might break the site, while the chance should be small. Just be careful with them!

## .lighthouse
This folder is automatically made by the pagespeed workflow. The purpose of this folder is to store config and budget for the lighthouse workflow.
It also has the svg file that shows a nice animation and the scores of lighthouse! Lighthouse was very hard to optimize to 100^4. I worked hard hard the site to improve it, even tho it's not my cup of tea. 
In the end I managed to get it all optimized, and learned a couple new tricks, that I hope others want to use aswell.

### budget.json
This contains the speed in miliseconds aswell as the sizes and amount of resources. It's adviced to edit it based on your needs.
It should be used in a way that it will remind you to stay efficient, not to cut content withoud much if any improvement in speed!
Just change the budget number to what you want. Use Google and the [docs](https://github.com/GoogleChrome/lighthouse/blob/master/docs/performance-budgets.md) for more information!

### lighthouserc.json
This is the configuration file for LighthouseCI. Basically it *only* checks for html files in the current directoy. It will check easy url 3 times (to get a bit of a baseline).
It *should* also advice the user to improve the site by using preload for example. URL can also be used but that would kinda defeat the point innit? Use Google and the [docs](https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md) if you think you need to edit it.

### pagespeedresultmobile.svg
Just the animation file that will display the scores from the pagespeed workflow. Use it in your README as followed:
`[![Mobile pagespeed score](.github/.lighthouse/pagespeedresultmobile.svg "Mobile pagespeed score")](LINK TO THE REPORT ON https://web.dev/measure/)`
This will not only show the scores, but if done correctly, it will direct users to the report when they click on it!

## .zap
This folder only holds the ignored rules for the OWASP workflow. These are rules I later want to ignore as they aren't fixable by us. Mainly because we use Github Pages/Cloudflare Pages.
I chose to use a SaaS solution as it was easier to host and it's less sensitive to be down. Kinda hard to beat Github on uptime with a 512mb 1 core VPS...

Just remove the .org from the file if not done already. Based on the report the ignored rules can be changed. Otherwise just comment out rules_file_name: '.github/.zap/rules.tsv' in the owaspfullsecscan.yml. 

## workflows
This is the folder that contains all the workflow files in yml format!

### generatesitemap.yml
For SEO reasons a sitemap.xml is needed. It was easy to automate and it only runs at 0:00 UTC. It's done in about 30-40 seconds and is very easy to use.
It's possible to use the `on push` but having the workflow work everytime someone pushes smth to the repo was to much in my eyes. Daily should be more then enough.

This workflow is very easy to understand and you only need to edit base-url-path: https://voxsiren.net/ to your website url.

### lighthouse.yml
As said, the config is mostly in the .lighthouse. It will always run when someone pushes smth or makes a pull. It also uploads a handy zip file after the job is done!
So it's possible to check the scores in a relatively accurate way. I sadly can't find a way to use HTTP2, but it shouldn't matter to much given it's all done local.

Optionally, the `- run: rm 404.html` part can be deleted if desired. Or changed if not all pages should be checked.

### optimizt.yml
The fine folks over at [funbox](https://github.com/funbox/optimizt) did an amazing job to make WEBP and AVIF files from JPG/JPEG/PNG files! The workflow always triggers on any change with JPG/JPEG/PNG.
Based on these changes it will make the WEBP and AVIF versions of your images and [calibreapp/image-actions](https://github.com/calibreapp/image-actions) will compress your images and webp futher.
**NOTE THAT WEBP AND AVIF FILES WILL NOT BE REPLACED**. This is not something I can do, and I hope this will be fixed by funbox. Meanwhile just remember to also delete your WEBP and AVIF files if you change the JPG/JPEG/PNG files but not it's name!

The quality can be changed by checking out both repositories documentation and by changing the OPTIMIZTCONVERTERARGS for optimizt and the parts under with in the Compress Images task.


### owaspfullsecscan.yml
This workflow basically checks the website and makes an **issue** with all the problems currently. It does this every day at 0:00 UTC. If all issues are solved the issue is closed automatically.

Make sure to specify the right website in the zap scan task in the: target part.

### pagespeed.yml
This workflow runs every day at 0:00 UTC and fetches the svg file of lighthouse. Do change the HOST env to your website, and decide if the desktop and/or mobile has to be displayed.
A beter example would be [this one](https://github.com/ankurparihar/readme-pagespeed-insights/blob/master/.github/workflows/pagespeed.yml). As it includes both and only requires the user to change the HOST env.
It will automatically make a folder based on RESUTLSFOLDER env data, and put all the reports in there and updates if there's no difference. Note that even tho their might be no difference, a commit can happen as the results are saved with three 0's after the dot.

Just change the HOST env to the right website, and use the beter example instead of the one in this repository.

### purgecss.yml
This file **CHANGES CODE** and thus should be used carefully. It's purpose is to remove all unused CSS on any website! It works as is and so far has done it's job good enough.
Other solutions could go deeper but would require so much configuration that it would be beter to use a modern language. Because the workflow removes code, it only runs 5 minutes after midnight UTC.
As it might be undesirable to optimize during development with something as critical as CSS. It can be changed to only trigger when CSS/HTML is changed, optimizt.yml does this but with JPG/JPEG/PNG.
IF this is more desired, use inspiration from there and edit the file types accordingly.

### refreshobservatoryscore.yml
Basically this workflow is only useful if a badge like [this](https://img.shields.io/mozilla-observatory/grade-score/voxsiren.net?publish) is used and the user cares enough to keep this badge up-to-date.
Just change the last part of the run part to the website it needs to check. I will check only once every three days.

# README.MD
The README.MD in the root folder is also made by me. It's largely shields.io and it's best to look there for more information. The side images are done in HTML and all the other parts are in Markdown.
All badges are from shields.io to keep colours and style consitent. A shield how I make it is made as followed:

Look on shields.io for a dyanmic badge, at best a static one like the CSS3 one I made.
`https://img.shields.io/codefactor/grade/github/TheVoxSiren/voxsiren.net/main` This is a dynamic badge to see the codefactor score on the main branch on our repo.

Next I add the logo from [simpleicons](https://simpleicons.org/).
`https://img.shields.io/codefactor/grade/github/TheVoxSiren/voxsiren.net/main` `?logo=codecov`

Add a custom color based on hex code.
`https://img.shields.io/codefactor/grade/github/TheVoxSiren/voxsiren.net/main` `?logo=codecov` `&logoColor=f5f5f5`

Wrap this inside the markdown format with a nice name.
`[CodeFactor Grade](https://img.shields.io/codefactor/grade/github/TheVoxSiren/voxsiren.net/main?logo=codecov&logoColor=f5f5f5)`

Now this get's wrapped inside the markdown link format again so that clicking on it, will actually refer to either nothing or something useful.
By default, it will refer users to the badges in a empty page... If no link can be given, just fill the last () in with (#) so that it won't open anything.
`[![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/TheVoxSiren/voxsiren.net/main?logo=codecov&logoColor=f5f5f5)](https://www.codefactor.io/repository/github/thevoxsiren/voxsiren.net)`

If you're brave, you can even add a custom icon with a base64 string. It's possible but too complicated and too much work for just some badges.

# Final note
This folder contains all my experience with Github Workflow and personally I enjoy using it. I believe if users use Github Pages or anything else which Github functions as a code hosing provider.
Using some of these workflows can improve the site's performance futher which makes everyone happy :). You also have my permission to do whatever you wish with these workflows, crediting would be nice.

# TODO
Need to be able to use CriticalCSS in Github Workflow so that each webpage contains the critical CSS automatically. Should be done in a seperate branch as pages get updated and removing inlline critical css is a pain.
Doing it in <style> should be possible, but might not work as good as inline. As of writing just getting the package to work has proven to be a challange.

