# 🎉 En Vivo 🎉
En Vivo is a chat application where all users have realtime control of a shared video player.

## Motivation
> "What might make people really bond over chat, the way they might in real life?"

Bonding over chat could be difficult for a number of reasons. [Positive body language and non-verbal cues are important when connecting with others](http://faculty.sites.uci.edu/crhlab/files/2011/03/2015-Campos-Schoebi-Gonzaga-Gable-Keltner-2015.pdf), and there are a limited number of ways to convey them over text (emojis, GIFs, etc.). It's hard to find time to actively engage in, read, and write short and long form messages. Etc.

With En Vivo, we explore a different problem. It's often complicated to facilitate shared experiences through text. Research shows that ["...people who share experiences with another person rate those experiences as more pleasant...than those who undergo the experience on their own."](https://www.eurekalert.org/pub_releases/2014-10/afps-smb100714.php) In the same way that people visit the art museum or go to movies together, what if we could tap into an activity that plenty of folks already do every day -- watching Youtube videos.



## Getting Set Up

We'll need [Node.js](https://nodejs.org/en/) to be installed to run the project locally. I develop with version 10.16.3.

1. Start by cloning this repository.

2. In the repo root directory, run `npm install` to gather all dependencies.

3. Then run `npm dev` which should start both the server and the React client.

## Technical Notes

- The node server is running with [nodemon](https://nodemon.io/) on port 5000, which will automatically restart for you when you modify and save a file.
- The frontend is using the [Next.js framework](https://nextjs.org/docs/getting-started). Any changes in the client should be hot reloaded on port 3000.

Thanks for taking the time to check out this project! 🙏
