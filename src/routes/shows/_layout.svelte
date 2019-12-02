<script>
  export let segment;
</script>

<style>
  nav {
    width: 100%;
    margin-block-end: 2rem;
  }
  ul {
    color: var(--on-primary);
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  a {
    display: block;
    width: 10rem;
    height: 10rem;
    transition: background-color .2s ease-out;
  }

  a:focus, a.selected {
    background-color: rgba(255, 255, 255, .3);
  }

  svg {
    width: 100%;
    height: 100%;
  }
</style>

<nav>
  <ul>
    <li><a href="shows/invisa" class:selected={segment === 'invisa'} id="invisa">
      <svg><use href="images/invisa.svg#invisa"/></svg>
    </a></li>
    <li><a href="shows/fortuna" class:selected={segment === 'fortuna'} id="fortuna">
      <svg><use href="images/fortuna.svg#fortuna"/></svg>
    </a></li>
    <li><a href="shows/wikinger" class:selected={segment === 'wikinger'} id="wikinger">
      <svg><use href="images/wikinger.svg#wikinger"/></svg>
    </a></li>
    <li><a href="shows/stage" class:selected={segment === 'stage'} id="stage">
      <svg><use href="images/stage.svg#stage"/></svg>
    </a></li>
  </ul>
</nav>

<slot></slot>