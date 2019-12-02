<script>
	import BaseNav from '../components/navigation/BaseNav.svelte';

	export let segment;
</script>

<style>
	main {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>

<BaseNav {segment}/>

<main>
	<slot></slot>
</main>