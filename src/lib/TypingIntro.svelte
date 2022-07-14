<script lang="ts">
  import { onMount } from "svelte";

  import Typed from "typed.js";

  onMount(() => {
    new Typed("#type", {
      strings: [
        'Hi! I\'m <span class="aqua">PlanetDe</span>',
        'Hi! I\'m <span class="aqua">PlanexDev!</span>',
      ],
      typeSpeed: 30,
      backSpeed: 30,
      backDelay: 70,
      onComplete: (self: any) => {
        self.cursor.remove();
      },
    });
  });
</script>

<!-- svelte-ignore a11y-missing-content -->
<h1 id="type" />

<style>
  h1 {
    font-size: 64px;
    display: inline-block;
    color: #fff;
    font-family: "Eurostile", sans-serif;
    margin-bottom: 0.1em;
  }

  :global(.aqua) {
    color: rgb(61, 239, 233);
  }

  :global(.typed-cursor) {
    font-size: 72px;
    color: #fff;
  }
</style>
