<script>
  import About from "./About.svelte";

  import Contact from "./Contact.svelte";
  import Hero from "./Hero.svelte";
  import Skills from "./Skills.svelte";
</script>

<main>
  <Hero />

  <About />

  <Skills />

  <Contact />
</main>

<style>
  main {
    max-width: 85vw;
    margin: 0 auto;
  }
</style>
