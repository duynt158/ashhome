import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";
import React, { Component } from "react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";

const client = createClient();


export default async function Page() {
  const page = await client.getSingle("home_page");
  return <SliceZone slices={page.data.slices} components={components} />;
}


export async function generateMetadata(): Promise<Metadata> {
  const settings = await client.getSingle("settings");
  const page = await client.getSingle("home_page");

  return {
    
    title: page.data.meta_title + ' ' + settings.data.site_title,
    description: page.data.meta_description
  };
}

