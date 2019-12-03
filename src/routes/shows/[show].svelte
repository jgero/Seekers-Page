<script>
  import InvisaContent from "../../components/InvisaContent.svelte";
  import FortunaContent from "../../components/FortunaContent.svelte";
  import WikingerContent from "../../components/WikingerContent.svelte";
  import StageContent from "../../components/StageContent.svelte";

  import { stores } from '@sapper/app';
  const { page } = stores();

  let show = "";
  page.subscribe(val => {
    show = val.params.show;
  })
</script>

<style>
</style>

{#if show === "invisa"}
  <InvisaContent />
{/if}

{#if show === "fortuna"}
  <FortunaContent />
{/if}

{#if show === "wikinger"}
  <WikingerContent />
{/if}

{#if show === "stage"}
  <StageContent />
{/if}