<script setup lang="ts">
useHead({
  title: 'Merklin — Open-source Ethereum wallet explorer',
  meta: [{
    hid: 'description',
    name: 'description',
    content: 'Merklin is an open-source web-only EVM explorer made with Vue, Nuxt, and Ethers. Explore transaction statistics, gas burn, etc. for any Ethereum wallet address.',
  }],
})

const config = useRuntimeConfig()
const colorMode = useColorMode()
const theme = $computed(() => colorMode.value === 'system' ? 'dark' : colorMode.value)
</script>

<template>
  <div w-full p-4>
    <div section flex-col-center>
      <div class="logo">
        <img src="/icon.png" alt="Merklin Logo">
      </div>
      <h1 mt-4 mb-2 text-5xl font-black tracking-widest>
        M<span text-dim>Ξ</span>RKLIN
      </h1>
      <p m-0 text-2xl text-dim text-center font-bold>
        Open-source web-only EVM wallet explorer
      </p>
      <div flex-center lt-md:flex-col w-full gap-4 mt-6>
        <NuxtLink
          :to="config.public.appUrl"
          title="Open Merklin app"
          btn-action btn-lg w-full md:w-50 font-bold
        >
          <Icon name="app" size="1.35rem" text-yellow-500 /><span ml-1.5>App</span>
        </NuxtLink>
        <NuxtLink
          :to="config.public.repoUrl"
          target="_blank"
          title="Merklin GitHub repository"
          btn-action btn-lg w-full md:w-50 font-bold
        >
          <Icon name="github" size="1.35rem" text-rose-500 /><span ml-1.5>Github</span>
        </NuxtLink>
      </div>
      <!-- <div flex-col-center mt-12>
        <p italic>
          Paste any wallet address:
        </p>
        <input
          placeholder="0x..."
          flex-1 bg-element border-none w-140 max-w-full px-3 py-2 text-lg text-center rounded-md text-base
        >
      </div> -->
    </div>
    <div section flex-center>
      <div flex rounded-1.5rem border-solid border-2 border-light p-1>
        <img :src="`/preview-${theme}_x1280.jpg`" alt="Merklin EVM wallet explorer preview" width="100%" height="auto" rounded-1.25rem>
      </div>
    </div>
    <!-- <div section>
      <h2 section-title>
        Features
      </h2>
      <div section-content grid grid-cols-4 gap-4>
        <div>
          <div>
            <Icon name="insights" />
          </div>
          <div />
        </div>
        <div>
          <div>
            <Icon name="transaction" />
          </div>
          <div />
        </div>
        <div>
          <div>
            <Icon name="nft" />
          </div>
          <div />
        </div>
        <div>
          <div>
            <Icon name="network" />
          </div>
          <div />
        </div>
      </div>
    </div> -->
    <div section>
      <h2 section-title>
        Supported Networks
      </h2>
      <div section-content grid grid-cols-3 md:grid-cols-6 gap-4>
        <div class="network">
          <Icon name="ethereum" size="2rem" />
          <div class="network-name">
            <NuxtLink
              to="https://ethereum.org"
              title="Ethereum project website"
              target="_blank"
            >
              Ethereum
            </NuxtLink>
          </div>
          <div class="network-status">
            Ready <Icon name="check" text-ok />
          </div>
        </div>
        <div flex-col class="network">
          <Icon name="optimism" size="2rem" />
          <div class="network-name">
            <NuxtLink
              to="https://www.optimism.io"
              title="Optimism project website"
              target="_blank"
            >
              Optimism
            </NuxtLink>
          </div>
          <div class="network-status">
            Soon <Icon name="construction" text-warn />
          </div>
        </div>
        <div flex-col class="network">
          <Icon name="arbitrum" size="2rem" />
          <div class="network-name">
            <NuxtLink
              to="https://arbitrum.io"
              title="Arbitrum project website"
              target="_blank"
            >
              Arbitrum
            </NuxtLink>
          </div>
          <div class="network-status">
            Soon <Icon name="construction" text-warn />
          </div>
        </div>
        <div flex-col class="network">
          <Icon name="zksync" size="2rem" />
          <div class="network-name">
            <NuxtLink
              to="https://zksync.io"
              title="zkSync project website"
              target="_blank"
            >
              zkSync
            </NuxtLink>
          </div>
          <div class="network-status">
            Soon <Icon name="construction" text-warn />
          </div>
        </div>
        <div flex-col class="network">
          <Icon name="polygon" size="2rem" />
          <div class="network-name">
            <NuxtLink
              to="https://polygon.technology"
              title="Polygon project website"
              target="_blank"
            >
              Polygon
            </NuxtLink>
          </div>
          <div class="network-status">
            Soon <Icon name="construction" text-warn />
          </div>
        </div>
        <div flex-col class="network">
          <Icon name="gnosis" size="2rem" />
          <div class="network-name">
            <NuxtLink
              to="https://www.gnosis.io"
              title="Gnosis project website"
              target="_blank"
            >
              Gnosis
            </NuxtLink>
          </div>
          <div class="network-status">
            Soon <Icon name="construction" text-warn />
          </div>
        </div>
      </div>
    </div>
    <div section>
      <h2 section-title>
        FAQ
      </h2>
      <div section-content>
        <div class="faq-item">
          <p class="question">
            Can I use MΞRKLIN on my mobile?
          </p>
          <p class="answer">
            Yes, MΞRKLIN is a
            <NuxtLink
              to="https://web.dev/progressive-web-apps"
              title="Learn more about Progressive Web Apps"
              target="_blank"
              link
            >
              Progressive Web App (PWA)
            </NuxtLink>. It works both on
            Android and iOS just like a native app, with the only difference that
            you have to install it from your browser. The cool thing is you'll always
            have the latest version, no updates needed.
          </p>
        </div>
        <div class="faq-item">
          <p class="question">
            Why web-only?
          </p>
          <p class="answer">
            Native apps are not suitable for web3 as they are subject to
            App Store / Play Store gate-keeping and lock out a big part of the global population.
            Instead, we go down the web-native route to deliver a great mobile experience.
          </p>
        </div>
        <div class="faq-item">
          <p class="question">
            Is the app free to use?
          </p>
          <p class="answer">
            Yes.
          </p>
        </div>
        <div class="faq-item">
          <p class="question">
            How can I contribute?
          </p>
          <p class="answer">
            Take a look at
            <NuxtLink
              :to="`${config.public.repoUrl}/issues`"
              title="Merklin issues on GitHub"
              target="_blank"
              link
            >
              issues
            </NuxtLink> in the
            <NuxtLink
              :to="config.public.repoUrl"
              title="Merklin GitHub repository"
              target="_blank"
              link
            >
              GitHub repo
            </NuxtLink>. If you are interested in
            working on any of those, just drop a comment. You can also create a new issue
            if you have something specific in mind.
            <NuxtLink
              :to="`mailto:${config.public.feedbackEmail}`"
              title="Merklin issues on GitHub"
              target="_blank"
              link
            >
              Feedback
            </NuxtLink> is also always very valuable!
          </p>
        </div>
      </div>
    </div>
    <div mt-15 flex-center lt-md:flex-col gap-4>
      <div flex-center>
        Made with
        <NuxtLink
          href="https://nuxt.com"
          target="_blank"
          title="Nuxt"
          ml-2
        >
          <Icon name="nuxt" />
        </NuxtLink>
        <NuxtLink
          href="https://vitejs.dev"
          target="_blank"
          title="Vite"
          ml-2
        >
          <Icon name="vite" />
        </NuxtLink>
        <NuxtLink
          href="https://uno.antfu.me"
          target="_blank"
          title="UnoCSS"
          ml-2
        >
          <Icon name="unocss" dark:invert />
        </NuxtLink>
        <NuxtLink
          href="https://headlessui.com"
          target="_blank"
          title="Headless UI"
          ml-2
        >
          <Icon name="headless" />
        </NuxtLink>
      </div>
      <div flex-center ml-2>
        Powered by
        <NuxtLink
          href="https://vercel.com"
          target="_blank"
          title="Vercel"
          ml-2
        >
          <Icon name="vercel" />
        </NuxtLink>
      </div>
      <div flex-center>
        <ThemeToggle />
      </div>
    </div>
  </div>
</template>

<style>
.logo > img {
  @apply w-32 h-32;
}
.network {
  @apply flex-col-center;
}
.network-name {
  @apply mt-2 text-lg;
}
.network-status {
  @apply flex-center mt-2 px-1 py-0.5 bg-element text-xs text-dim rounded;
}
.network-status > .icon {
  @apply ml-0.5;
}

.faq-item {
  @apply flex-col-center not-last:mb-12;
}
.question {
  @apply m-0 text-2xl text-center leading-relaxed;
}
.answer {
  @apply mt-2 mb-0 text-dim text-center italic leading-relaxed;
}
</style>
