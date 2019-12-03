<script>
  export let segment;
</script>

<style>
  nav {
    border-block-end: 2px solid var(--on-primary);
    margin-block-end: 2rem;
  }
  ul {
    list-style-type: none;
    display: flex;
    margin: 0;
    padding: 0;
    padding-block-start: 1rem;
    padding-block-end: 1rem;
    font-size: 2rem;
  }
  li {
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10rem;
  }
  a {
    text-decoration: none;
    color: var(--on-primary);
    border-bottom: 1px solid transparent;
    transition: border-bottom .2s ease-out;
  }
  a.svgContainer, svg {
    height: 100%;
    width: 100%;
  }
  a.selected {
    border-bottom: 1px solid var(--on-primary);
  }
</style>

<nav>
  <ul>
    <li><a class="svgContainer" href="."><svg><use href="svg/logo.svg#logo"/></svg></a></li>
    <li><a class:selected="{segment === 'shows'}" href="shows">Shows</a></li>
    <li><a class:selected="{segment === 'galas'}" href="galas">Galas</a></li>
    <li><a class:selected="{segment === 'contact'}" href="contact">Kontakt</a></li>
  </ul>
</nav>