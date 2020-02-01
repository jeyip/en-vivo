# 🎉 En Vivo 🎉
En Vivo is a chat application where all users have realtime control of a shared video player.

## Demo
https://res.cloudinary.com/jjcodepen/video/upload/v1580541552/Final_aw3vxv.mov

## Motivation
#### Background

> "What might make people really bond over chat, the way they might in real life?"

Bonding over chat can be difficult for a number of reasons. [Positive non-verbal cues are important when connecting with others](http://faculty.sites.uci.edu/crhlab/files/2011/03/2015-Campos-Schoebi-Gonzaga-Gable-Keltner-2015.pdf), and there are a limited number of ways to convey them over text (emojis, GIFs, etc.). It's hard to find time to actively engage in, read, and write short and long form messages. It's difficult to know what is acceptable to discuss, especially with strangers. Etc. En Vivo addresses a different and distinct challenge.

#### Problem
**It's hard to create and facilitate shared experiences through text.** Research shows that ["...people who share experiences with another person rate those experiences as more pleasant...than those who undergo the experience on their own."](https://www.eurekalert.org/pub_releases/2014-10/afps-smb100714.php) In the same way that people visit art museums or go to movies together, what if we could tap into an activity that plenty of people already do every day? Let's watch Youtube videos together! En Vivo provides a chat room alongside a Youtube video player that can be controlled by anyone on the platform. Pausing and playing the video synchronizes across all browsers to ensure that everyone is watching the same video at the same time.


## Getting Set Up

We'll need [Node.js](https://nodejs.org/en/) to be installed to run the project locally. I develop with version 10.16.3.

1. Start by cloning this repository.

2. In the repo root directory, run `npm install` to gather all dependencies.

3. Then run `npm run dev` which should start both the server and the React client.

4. Visit http://localhost:3000/ in any web browser.

5. Sign in with any username.

6. To see the realtime nature of the app, open up a second web browser at http://localhost:3000/ and sign in again.

7. Copy and paste the URL of any youtube video and paste it into the searchbar.

8. Press play on either browser.

9. Explore and have fun!

## Technical Notes

- The node server is running with [nodemon](https://nodemon.io/) on port 5000, which will automatically restart for you when you modify and save a file.
- The frontend is using the [Next.js framework](https://nextjs.org/docs/getting-started). Any changes in the client should be hot reloaded on port 3000.

Thanks for taking the time to check out this project! 🙏
