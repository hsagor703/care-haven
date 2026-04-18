"use client"
import LoginContent from '@/component/Logincontent';
import React, { Suspense } from 'react';

const page = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <LoginContent/>
    </Suspense>
  );
};

export default page;