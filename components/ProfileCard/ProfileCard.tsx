import React from "react";
import ProfileImage from "../ProfileImage/ProfileImage";
import ProfileName from "../ProfileName/ProfileName";
import Genre from "../Genre/Genre";
import RecButton from "../RecButton/RecButton";
import UnfriendButton from "../UnfriendButton/UnfriendButton";

export default function ProfileCard() {
  return <>
  <ProfileImage/>
  <ProfileName/>
  <RecButton/>
  <Genre/>
  <UnfriendButton/>;
}
