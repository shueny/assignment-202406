export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: 'Next.js + NextUI',
	description:
		'Make beautiful websites regardless of your design experience.',
	navItems: [
		{
			label: 'Home',
			href: '/',
		},
		{
			label: 'Task One',
			href: '/task-one',
		},
		{
			label: 'Task Two',
			href: '/task-two',
		},
		{
			label: 'Task Three',
			href: '/task-three',
		},
	],
	navMenuItems: [],
	links: {
		github: 'https://github.com/shueny',
	},
};
