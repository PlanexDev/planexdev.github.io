<script lang="ts">
  import FontAwesome from "svelte-fa/src/fa.svelte";
  import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";
</script>

<section>
  <a href="https://github.com/PlanexDev">
    <FontAwesome icon={faGithub} size="2x" color="rgb(168, 188, 229)" />
  </a>

  <a href="https://discordapp.com/users/698189280090259476">
    <FontAwesome icon={faDiscord} size="2x" color="rgb(168, 188, 229)" />
  </a>

  <div class="line" />
</section>

<style>
  section {
    position: fixed;
    bottom: 0;

    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }

  .line {
    position: absolute;
    top: 0;
    width: 2px;
    height: 100vh;
    z-index: -10;
    background-color: rgb(88, 105, 155);
  }

  a {
    margin-bottom: 1em;
    padding-top: 0.75em;
    padding-bottom: 0.75em;
    background-color: var(--bg);
  }

  a:last-of-type {
    margin-bottom: 5em;
  }
</style>
