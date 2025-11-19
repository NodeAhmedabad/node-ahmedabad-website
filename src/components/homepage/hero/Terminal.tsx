import AnimatedText from '@/components/AnimatedText';
import Typography from '@/components/ui/Typography';
import terminal from '@/data/homepage/terminal';
import cn from '@/lib/cn';

import type { Component } from '@/types';

const Terminal: Component = () => {
  const { actions, fileName, commands } = terminal;

  return (
    <div className="overflow-hidden rounded-lg border border-gray-700 bg-slate-800 shadow-2xl">
      <div className="flex items-center border-b border-gray-700 bg-slate-900 px-4 py-3">
        <div className="flex space-x-2">
          {actions.map((action) => (
            <div key={action} className={cn('size-3 rounded-full', action)} />
          ))}
        </div>
        <div className="flex-1 text-center">
          <Typography as="span" className="font-mono" color="gray-400" variant="sm">
            {fileName}
          </Typography>
        </div>
      </div>

      <div className="flex flex-col gap-4 p-6">
        {commands.map((command) => {
          const { text, delay, isCommand } = command;

          return (
            <div key={text} className="flex gap-2">
              <Typography as="span" color={isCommand ? 'green-400' : 'gray-400'} variant="sm">
                {isCommand ? '$' : '✓'}
              </Typography>
              <AnimatedText
                className="font-mono"
                delay={delay}
                speed={60}
                text={text}
                typographyProps={{
                  as: 'span',
                  color: isCommand ? 'white' : 'gray-400',
                  variant: 'sm',
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Terminal;
