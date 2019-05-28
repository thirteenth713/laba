import React from 'react';
import MyHeader from "./MyHeader";
import MyForm from "./MyForm";
import MyFooter from "./MyFooter";

export default function FeedForm() {
  return (
    <div className="main_content">
      <MyHeader />
      <MyForm />
      <MyFooter />
    </div>
  )
}