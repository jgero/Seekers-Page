<script>
  import { stores } from '@sapper/app';
  const { page } = stores();

  let show = "";
  page.subscribe(val => {
    show = val.params.show;
  })
</script>

<style>
  div {
    color: var(--on-primary);
  }
</style>

<div>
  <span>{show}</span>
</div>