<script setup lang="ts">
const colorMode = useColorMode()

function onClick() {
  let newTheme
  switch (colorMode.preference) {
    case 'light':
      newTheme = 'dark'
      break
    case 'dark':
      newTheme = 'system'
      break
    default:
      newTheme = 'light'
      break
  }
  colorMode.preference = newTheme
}
</script>

<template>
  <div
    title="Toggle theme"
    group flex w-full items-center rounded-lg px-2 py-2 text-sm
    box-border cursor-pointer hover:bg-element
    @click="onClick()"
  >
    <ClientOnly>
      <Icon :name="colorMode.preference" size="1.2rem" mr-2 h-5 w-5 text-dim aria-hidden="true" />
      <span mr-1 lt-md:hidden>Switch theme</span>
    </ClientOnly>
  </div>
</template>
