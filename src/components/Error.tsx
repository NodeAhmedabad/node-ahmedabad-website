import type { Component, NextErrorType } from '@/types';

const Error: Component<NextErrorType> = ({ error, reset }) => {
  const handleReset = () => {
    reset();
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="p-4">It&apos;s not you. It&apos;s us. Give it another try, please!</h2>
      <p className="mb-4">{error.message ?? ''}</p>
      <button className="mx-auto my-0 w-fit px-4 py-2" onClick={handleReset} type="button">
        Try Again
      </button>
    </div>
  );
};

export default Error;
