<script lang="ts">
  import { onMount } from "svelte";

  let ul: HTMLUListElement;
  let lastY = 0;

  onMount(() => {
    document.addEventListener("scroll", () => {
      const y = window.scrollY;

      if (y > 100 && y - lastY > 2 && ul.getAttribute("scrolled")) {
        ul.style.top = "-100%";
      } else {
        ul.style.top = "0";
      }

      lastY = y;

      if (y > 20) {
        ul.setAttribute("scrolled", "true");
      } else {
        ul.removeAttribute("scrolled");
      }
    });
  });
</script>

<ul bind:this={ul}>
  <li><a href="#about"><span class="number">0x01.</span> About Me</a></li>
  <li><a href="#skills"><span class="number">0x02.</span> Skills</a></li>
  <li><a href="#contact"><span class="number">0x03.</span> Contact</a></li>
</ul>

<style>
  ul {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.8em;
    display: flex;
    justify-content: flex-end;

    list-style: none;
    padding-top: 2em;

    padding-bottom: 2em;
    padding-right: 4em;
    position: fixed;
    width: calc(100vw - 4em);
    left: 0;

    transition: all 0.3s, top 0.7s;
  }

  :global(ul[scrolled]) {
    background-color: rgba(10, 25, 47, 0.85);
    backdrop-filter: blur(6px);
  }

  li {
    margin-left: 2em;
  }

  a {
    color: var(--light-slate);
    text-decoration: none;
  }

  .number {
    color: var(--light-blue);
  }
</style>
