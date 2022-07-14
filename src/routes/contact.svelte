<script lang="ts">
  import FontAwesome from "svelte-fa";

  import { faGithub, faDiscord } from "@fortawesome/free-brands-svg-icons";
</script>

<h1>Contact Me!</h1>

<p>Here are my social media accounts:</p>

<div class="accounts-wrapper">
  <a href="https://github.com/PlanexDev"><FontAwesome icon={faGithub} size="3x" color="#aaa" /></a>

  <a href="https://discordapp.com/users/698189280090259476"
    ><FontAwesome icon={faDiscord} size="3x" color="#aaa" /></a
  >
</div>

<style lang="scss">
  .accounts-wrapper {
    display: flex;

    a {
      margin: 0 1em;
    }
  }
</style>
