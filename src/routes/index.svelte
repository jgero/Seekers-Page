<script>
	import LandingPageContent from "../components/LandingPageContent.svelte";
</script>

<style>
	header {
		text-align: center;
    color: var(--on-primary);
    background-image: url(../images/gs-background.jpeg);
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
    padding: 6rem;
    border-radius: 1rem;
	}
	h1, h2 {
		margin: 0;
		width: fit-content;
	}
	h1 {
		font-family: 'Red Hat Text';
		font-size: 15rem;
	}
	h1.bottom {
		transform: translateY(-8.5rem);
	}
	h2 {
		font-size: 2.5rem;
    transform: translateY(-12.5rem);
    letter-spacing: 3.5rem;
	}
</style>

<svelte:head>
	<title>Gold Seekers</title>
</svelte:head>

<header>
	<h1>GOLD</h1>
	<h1 class="bottom">SEEKERS</h1>
	<h2>SHWOAKROBATIK</h2>
</header>

<LandingPageContent />