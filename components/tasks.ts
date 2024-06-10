import {tv} from 'tailwind-variants';

export const title = tv({
	base: 'tracking-tight inline font-semibold inline-flex gap-2',
	variants: {
		size: {
			sm: 'text-3xl lg:text-4xl',
			md: 'text-[2.3rem] lg:text-5xl leading-9',
			lg: 'text-4xl lg:text-6xl',
		},
		fullWidth: {
			true: 'w-full block',
		},
	},
	defaultVariants: {
		size: 'md',
	},
});

export const subtitle = tv({
	base: 'w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-full',
	variants: {
		fullWidth: {
			true: '!w-full',
		},
	},
	defaultVariants: {
		fullWidth: true,
	},
});

export const typeWriter = tv({
	base: 'relative w-[max-content] font-mono font-semibold text-[2.3rem] lg:text-5xl leading-9 before:absolute before:inset-0 before:bg-black before:animate-typewriter text-[#FFCD1C]',
});

export const content = tv({
	base: 'grid grid-cols-2 gap-4 border border-solid border-red-500 rounded-none mt-2 justify-items-center transition-width ease-in-out delay-150',
	variants: {
		size: {
			'400': 'w-[400px]',
			'800': 'w-[800px]',
		},
	},
	defaultVariants: {
		size: '400',
	},
});
