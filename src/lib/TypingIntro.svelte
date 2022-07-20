<script lang="ts">
  import { onMount } from "svelte";

  import Typed from "typed.js";

  onMount(() => {
    new Typed("#type", {
      strings: [
        'PlanetDe',
        'PlanexDev',
      ],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 120,
      onComplete: (self: any) => {
        self.cursor.remove();
      },
    });
  });
</script>

<div class="name">Hi, my name is</div>

<div id="type" />

<style>
  .name {
    font-size: 22px;
    font-family: "JetBrains Mono", sans-serif;
    color: #ddd;
    margin-bottom: -44px;
  }

  #type {
    display: inline-block;
    font-family: "Eurostile", sans-serif;
    margin-bottom: 0.4em;
    margin-top: 48px;
    color: rgb(61, 239, 233);
	  font-size: clamp(40px, 8vw, 80px);
  }

  :global(.typed-cursor) {
    font-size: clamp(50px, 10vw, 100px);
  }
</style>
