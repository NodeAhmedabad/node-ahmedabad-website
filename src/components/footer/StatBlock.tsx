import Typography from '@/components/ui/Typography';

import type statLinks from '@/data/footer/statLinks';
import type { Component } from '@/types';

type StatBlockProps = (typeof statLinks)[number];

const StatBlock: Component<StatBlockProps> = (props) => {
  const { icon: Icon, value, name } = props;

  return (
    <div className="rounded-lg bg-slate-800 p-3 text-center">
      <Icon className="mx-auto mb-1 size-5 text-green-400" />
      <Typography as="p" color="white" variant="lg" weight="bold">
        {value}
      </Typography>
      <Typography as="p" color="content" variant="xs">
        {name}
      </Typography>
    </div>
  );
};

export default StatBlock;
