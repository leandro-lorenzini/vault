module.exports = {
	packagerConfig: {
		asar: true,
		icon: './public/icons/icon'
	},
	rebuildConfig: {},
	makers: [
		{
			name: "@electron-forge/maker-squirrel",
			config: {},
		},
		{
			name: "@electron-forge/maker-zip",
			platforms: ["darwin"],
		},
		{
			name: '@electron-forge/maker-dmg',
			config: {
				format: 'ULFO'
			}
		},
		{
			name: "@electron-forge/maker-deb",
			config: {
				bin: 'Open-Vault',
			},
		},
		{
			name: "@electron-forge/maker-rpm",
			config: {
				bin: 'Open-Vault',
			},
		},
	],
	plugins: [
		{
			name: "@electron-forge/plugin-auto-unpack-natives",
			config: {},
		},
	],
};
