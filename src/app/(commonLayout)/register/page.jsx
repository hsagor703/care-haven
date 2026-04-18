"use client"
import RegisterContent from '@/component/RegisterContent';
import React, { Suspense } from 'react';

const RegisterPage = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <RegisterContent/>
    </Suspense>
  );
};

export default RegisterPage;