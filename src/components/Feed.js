import React from 'react';
import MyHeader from "./MyHeader";
import MyMain from "./MyMain";
import MyFooter from "./MyFooter";

export default function Feed() {
  return (
    <div className="main_content">
      <MyHeader />
      <MyMain />
      <MyFooter />
    </div>
  )
}