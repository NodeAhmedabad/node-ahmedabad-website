import Typography from '@/components/ui/Typography';

import type { Component, NextErrorType } from '@/types';

const Error: Component<NextErrorType> = ({ error, reset }) => {
  const handleReset = () => {
    reset();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="flex flex-col gap-4 p-4 text-center">
        <Typography as="h1" variant="title">
          It&apos;s not you. It&apos;s us. Give it another try, please!
        </Typography>
        <Typography as="p" color="gray-600" variant="xl" weight="normal">
          {error.message ?? ''}
        </Typography>
        <div className="flex justify-center">
          <button
            className="mt-4 flex w-fit items-center justify-center rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg enabled:hover:shadow-green-500/25 disabled:opacity-40"
            onClick={handleReset}
            type="button"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
