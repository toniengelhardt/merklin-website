<template>
  <div class="no-translate" bg-base>
    <div class="bg-gradient" absolute top-0 left-0 bottom-0 right-0 z-0 />
    <div class="container" relative flex flex-col max-w-100vw overflow-x-hidden text-base z-1>
      <main flex-1 flex-col-center>
        <div class="content" flex-1 flex items-start w-full max-w-screen-lg overflow-scroll box-border>
          <NuxtPage />
        </div>
      </main>
    </div>
  </div>
</template>

<style lang="pcss">
/* .bg-gradient {
  background:
    radial-gradient(100% 100% at 65% 5%, rgba(var(--gradient-green), 0.35) 0%, rgba(var(--gradient-green), 0.1) 52.6%, rgba(0, 0, 0, 0) 100%),
    radial-gradient(100% 100% at 100% 100%, rgba(var(--gradient-blue), 0.15) 0%, rgba(var(--gradient-blue), 0.015) 52.6%, rgba(0, 0, 0, 0) 100%),
    radial-gradient(200% 200% at 0% 100%, rgba(var(--gradient-purple), 0.25) 0%, rgba(var(--gradient-purple), 0.025) 52.6%, rgba(0, 0, 0, 0) 100%);
} */
.container {
  height: 100vh;
  height: 100svh;
  max-height: 100vh;
  max-height: 100svh;
}
</style>
