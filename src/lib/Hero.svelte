<script>
  import Description from "$lib/Description.svelte";
  import TypingIntro from "$lib/TypingIntro.svelte";
</script>

<section>
    <TypingIntro />
    <Description />
</section>

<style>
    section {
        padding: 400px 200px;
    }

    @media screen and (max-width: 1080px) {
        section {
            padding: 300px 100px;
        }
    }

    @media screen and (max-width: 480px) {
        section {
            padding: 10px 30px;
        }
    }
</style>
