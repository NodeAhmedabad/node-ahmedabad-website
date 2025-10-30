import React from 'react';

import type { Component, NextErrorType } from '@/types';

const Error: Component<NextErrorType> = ({ error, reset }) => {
  const handleReset = () => {
    reset();
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="p-4">It's not you. It's us. Give it another try, please!</h2>
      <p className="mb-4">{error.message ?? ''}</p>
      <button className="w-fit mx-auto my-0 py-2 px-4" onClick={handleReset} type="button">
        Try Again
      </button>
    </div>
  );
};

export default Error;
