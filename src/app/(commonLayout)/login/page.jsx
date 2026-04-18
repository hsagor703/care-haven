"use client"
import LoginContent from '@/component/LoginContent';
import React, { Suspense } from 'react';

const LoginPage = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <LoginContent/>
    </Suspense>
  );
};

export default page;