import LightRawTheme = require('material-ui/lib/styles/raw-themes/light-raw-theme');
import ThemeManager = require('material-ui/lib/styles/theme-manager');

export const raw = LightRawTheme;
export const theme = ThemeManager.getMuiTheme(raw);