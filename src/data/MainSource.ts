import semver from 'semver';

import DocsSource from './DocsSource';

const branchBlacklist = new Set(['docs', 'webpack', 'v8']);
export default new DocsSource({
	id: 'main',
	name: 'Main library',
	global: '',
	repo: 'discordjs-twitch/discordjs-twitch',
	defaultTag: 'master',
	branchFilter: (branch: string) => !branchBlacklist.has(branch) && !branch.startsWith('dependabot/'),
	tagFilter: (tag: string) => semver.gte(tag.replace(/^v/, ''), '9.0.0'),
});
