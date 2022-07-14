<script>
  import Nav from "$lib/Nav.svelte";
</script>

<Nav />

<slot />

<style global>
  @import url("https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap");

  body {
    background-color: #121212;
    padding-left: 2em;
    padding-right: 2em;
    font-family: "Titillium Web";
    font-size: 1.15em;
    color: #fff;
    margin-top: 0;
  }

  @font-face {
    font-family: "Eurostile";
    src: url("/EurostileBold.ttf");
    font-weight: bold;
  }
</style>
