<script>
	import BaseNav from '../components/BaseNav.svelte';

	export let segment;
</script>

<style>
	main {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	footer {
		background-color: var(--on-primary);
    height: 20rem;
    clip-path: polygon(100% 30%, 100% 100%, 0% 100%, 0% 30%, 50% 0%);
		margin-top: 7rem;
		display: flex;
		justify-content: space-evenly;
		align-items: flex-end;
		padding-block-end: 5rem;
	}

	footer > div,
	footer > a {
		color: var(--primary);
		font-weight: bold;
	}
</style>

<BaseNav {segment}/>

<main>
	<slot></slot>
</main>

<footer>
	<a href="https://de-de.facebook.com/goldseekersshowakrobatik/">Facebook</a>
	<div>Kontaktdaten <br>hier ist die Adresse <br>Namen hier</div>
	<a href="https://www.instagram.com/goldseekers/">Instagram</a>
</footer>