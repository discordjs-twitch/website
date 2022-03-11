<template>
	<ul>
		<li>
			<strong>{{ downloads }} downloads</strong>
		</li>

		<li>
			<strong>{{ stars }} stars</strong>
		</li>

		<li>
			<strong>{{ contributors }} contributors</strong>
		</li>
	</ul>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { useStore } from '~/store';

const store = useStore();

const downloads = computed(() => store.state.stats.downloads);
const stars = computed(() => store.state.stats.stars);
const contributors = computed(() => store.state.stats.contributors);
</script>
