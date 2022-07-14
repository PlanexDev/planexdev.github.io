<ul>
  <a href="/"><li>Home</li></a>
  <a href="/contact"><li>Contact</li></a>
</ul>

<style lang="scss">
  ul {
    max-width: 75vw;
    margin-left: auto;
    margin-right: auto;
    border-radius: 0 0 8px 8px;
    margin-top: 0;
    display: flex;
    justify-content: space-evenly;
    padding-left: 0;

    background-color: #222;

    a {
      color: white;
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;

      padding-top: 0.4em;
      padding-bottom: 0.6em;

      flex: 1;

      border-left: 1px solid #555;
      border-right: 1px solid #555;

      &:first-of-type {
        border-left: none;
      }

      &:last-of-type {
        border-right: none;
      }

      li {
        list-style: none;
        display: inline-block;
      }
    }
  }
</style>
