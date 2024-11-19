// .js extension required
import plugin from 'tailwindcss/plugin.js';

// used to be module.exports but now:
export default plugin(function ({ addUtilities }) {
	const utils = {
		'.w-edge': {
			position: 'relative',
			margin: '0 auto',
			width: '100vw',
			left: '50%',
			transform: 'translateX(-50%)'
		}
	}

  addUtilities(utils, ["responsive"])
})