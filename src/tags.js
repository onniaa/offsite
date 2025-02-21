import {
	green,
	blue,
	purple,
	pink,
	indigo,
	teal,
	cyan,
} from '@mui/material/colors';

export const getTagColor = (tag) => {
	const colors = [green, blue, purple, pink, indigo, teal, cyan];
	const index = tag.charCodeAt(Math.round(tag.length / 2)) % colors.length;
	return colors[index][300];
};
