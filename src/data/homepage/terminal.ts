const terminal = {
  actions: ['bg-red-500', 'bg-yellow-500', 'bg-green-500'],
  fileName: 'node-ahmedabad.js',
  commands: [
    {
      text: 'npm install @node-ahmedabad/community',
      delay: 1000,
      isCommand: true,
    },
    {
      text: 'Installing awesome developers...',
      delay: 3200,
      isCommand: false,
    },
    {
      text: 'Setting up knowledge sharing...',
      delay: 5200,
      isCommand: false,
    },
    {
      text: 'Building connections...',
      delay: 7200,
      isCommand: false,
    },
    {
      text: 'node community.start()',
      delay: 8700,
      isCommand: true,
    },
    {
      text: 'Community is now running on port 3000!',
      delay: 10_200,
      isCommand: true,
    },
  ],
} as const;

export default terminal;
