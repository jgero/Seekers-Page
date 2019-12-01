<script>
  export let segment;
</script>

<style>
  ul {
    list-style-type: none;
    display: flex;
    margin: 0;
    margin-block-start: 1rem;
    margin-block-end: 1rem;
    padding: 0;
    height: 4rem;
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
  }
  a.svgContainer, svg {
    height: 100%;
    width: 100%;
  }
  a.selected {
    color: red;
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