<template>
  <div id="tab-bar">
     <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  bottom: 0rem;
  left: 0rem;
  right: 0rem;
  box-shadow: 0px 8px 11px 1px black;
}

</style>