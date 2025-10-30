import type statLinks from '@/data/footer/statLinks';
import type { Component } from '@/types';

type StatBlockProps = (typeof statLinks)[number];

const StatBlock: Component<StatBlockProps> = (props) => {
  const { icon: Icon, value, name } = props;

  return (
    <div className="rounded-lg bg-slate-800 p-3 text-center">
      <Icon className="mx-auto mb-1 h-5 w-5 text-green-400" />
      <div className="text-lg font-bold text-white">{value}</div>
      <div className="text-xs text-gray-400">{name}</div>
    </div>
  );
};

export default StatBlock;
