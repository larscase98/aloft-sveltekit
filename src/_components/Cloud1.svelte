<script>
  let colors = {
    cloud: '#ffffff',
    outline: '#ecf8f8',
    shadow: '#a0dde5'
  };
</script>

<svg
  width="100"
  height="60"
  viewBox="0 0 100 60"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  class="slow-motion"
>
  <g id="cloud1">
    <g id="shadow">
      <circle id="shadow1" cx="23" cy="37" r="21" fill={colors.shadow} />
      <circle id="shadow2" cx="45" cy="36" r="21" fill={colors.shadow} />
      <circle id="shadow3" cx="75" cy="36" r="21" fill={colors.shadow} />
      <circle id="shadow4" cx="44" cy="22" r="21" fill={colors.shadow} />
    </g>
    <g id="outline">
      <circle id="outline1" cx="22" cy="36" r="20" fill={colors.outline} />
      <circle id="outline2" cx="44" cy="35" r="20" fill={colors.outline} />
      <circle id="outline3" cx="74" cy="35" r="20" fill={colors.outline} />
      <circle id="outline4" cx="43" cy="21" r="20" fill={colors.outline} />
    </g>
    <g id="white">
      <circle id="white1" cx="22" cy="36" r="18" fill={colors.cloud} />
      <circle id="white2" cx="44" cy="35" r="18" fill={colors.cloud} />
      <circle id="white3" cx="74" cy="35" r="18" fill={colors.cloud} />
      <circle id="white4" cx="43" cy="21" r="18" fill={colors.cloud} />
    </g>
  </g>
</svg>

<style>
  .slow-motion {
    position: fixed;
    overflow: hidden;
    top: 2rem;
    animation: scroll 5s linear infinite;
  }

  @keyframes scroll {
    from {
      left: -100px;
    }

    to {
      left: calc(1vw + 100px);
    }
  }
</style>
