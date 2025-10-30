import type statLinks from '@/data/footer/statLinks';
import type { Component } from '@/types';

type StatBlockProps = (typeof statLinks)[number];

const StatBlock: Component<StatBlockProps> = (props) => {
  const { icon: Icon, value, name } = props;

  return (
    <div className="text-center p-3 bg-slate-800 rounded-lg">
      <Icon className="w-5 h-5 text-green-400 mx-auto mb-1" />
      <div className="text-lg font-bold text-white">{value}</div>
      <div className="text-xs text-gray-400">{name}</div>
    </div>
  );
};

export default StatBlock;
