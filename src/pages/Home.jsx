import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { $api } from '../utils';
import VideoList from '../components/video-list';

export default function Home() {
 
  return (
    <div>
      <VideoList/>
    </div>
  )
}







