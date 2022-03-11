<template>
	<div class="bg-discord-blurple-500 py-20">
		<div class="max-w-3xl sm:mx-auto text-center px-8 sm:px-16 flex flex-col gap-10 md:px-12">
			<InstallButton />
		</div>
	</div>

	<div
		class="
			prose prose-discord
			dark:prose-light
			lg:prose-lg
			px-6
			mx-auto
			pb-8
			w-full
			xl:grid xl:grid-cols-2 xl:gap-x-12 xl:max-w-7xl
		"
	>
		<div>
			<h2>Why?</h2>
			<span><strong>[⭐] Simple to Use</strong></span> <br />
			<span><strong>[🔑] Writen on TypeScript</strong></span> <br />
			<span><strong>[⚙] 100% Promise-based</strong></span> <br />
			<span><strong>[🙂] Built in Declarations</strong></span> <br />
		</div>
		<div>
			<h2>Statistics</h2>
			<Stats />
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { useStore } from '~/store';
import MainSource from '~/data/MainSource';

import InstallButton from '~/components/InstallButton.vue';
import Stats from '~/components/Stats.vue';

const store = useStore();

const docs = computed(() => store.state.docs);

if (!docs.value) {
	void store.dispatch('fetchDocs', { inputSource: MainSource });
	void store.dispatch('fetchTags', { currentSource: MainSource });
}
</script>
