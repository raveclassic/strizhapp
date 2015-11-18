import LightRawTheme = require('material-ui/lib/styles/raw-themes/light-raw-theme');
import Colors = require('material-ui/lib/styles/colors');

export const theme = LightRawTheme;

theme.palette.textColor = '#727277';
theme.palette.primary1Color = Colors.lightBlue900;

export class Mixins {
	static ellipsis = {
		textOverflow: 'ellipsis',
		overflow: 'hidden',
		whiteSpace: 'nowrap'
	};
}