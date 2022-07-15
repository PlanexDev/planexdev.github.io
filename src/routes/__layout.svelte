<script>
  import Nav from "$lib/Nav.svelte";
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>PlanexDev | Frontend Web Developer</title>
  <meta name="title" content="PlanexDev | Frontend Web Developer">
  <meta name="description" content="I'm a self-taught middle-school coder who's really interested in web development.">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://planexdev.github.io/">
  <meta property="og:title" content="PlanexDev | Frontend Web Developer">
  <meta property="og:description" content="I'm a self-taught middle-school coder who's really interested in web development.">
  <meta property="og:image" content="/cover.png">

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://planexdev.github.io/">
  <meta property="twitter:title" content="PlanexDev | Frontend Web Developer">
  <meta property="twitter:description" content="I'm a self-taught middle-school coder who's really interested in web development.">
  <meta property="twitter:image" content="/cover.png">
</svelte:head>

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
