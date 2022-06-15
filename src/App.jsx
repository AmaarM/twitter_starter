import * as React from "react"
import Feed from "./components/Feed/Feed"
import Navbar from "./components/Navbar/Navbar"
import UserProfile from "./components/UserProfile/UserProfile"
import Advertisements from "./components/Advertisements/Advertisements"
import { codepathUserProfile, firstTweet, navLinks } from "./constants"


export default function App() {
  const[userProfile, setUserProfile] = React.useState(codepathUserProfile);
  let[tweets,setTweets] = React.useState([firstTweet]);

  let[tweetText, setTweetText] = React.useState("");


  return (
    <div className="app">
      <Navbar navLinks={navLinks}/>
      <main>
        <UserProfile userProfile={codepathUserProfile}/>
        <Feed userProfile={userProfile} tweets={tweets} setTweets={setTweets} tweetText={tweetText} setTweetText={setTweetText}/>
        <Advertisements />
      </main>
    </div>
  )
}
