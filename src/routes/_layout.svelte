<script>
	import BaseNav from '../components/navigation/BaseNav.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<BaseNav {segment}/>

<main>
	<slot></slot>
</main>