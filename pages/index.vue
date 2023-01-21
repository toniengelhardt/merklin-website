<script setup lang="ts">
useHead({
  title: 'Merklin – Open-source Ethereum wallet explorer',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'An open-source web-only EVM explorer made with Vue, Nuxt, and Ethers. Visualize wallet metrics like transaction frequency and gas burn for any Ethereum address.',
    }, {
      hid: 'keywords',
      name: 'keywords',
      content: 'open-source, web3, Ethereum, EVM, wallet explorer',
    },
  ],
})

const config = useRuntimeConfig()
const colorMode = useColorMode()
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
      <p m-0 text-2xl text-dim text-center font-bold leading-tight>
        Open-source web-only
        <NuxtLink
          to="https://ethereum.org"
          title="Ethereum project website"
          target="_blank"
          text-dim
          @click="useTrackEvent('click: Link (home)', { props: { target: 'Ethereum' } })"
        >
          Ethereum
        </NuxtLink>
        wallet explorer
      </p>
      <p mt-2 md:mt-1 mb-0 lt-md:text-sm text-dim text-center italic>
        for Android, iOS/OSX, Windows, Linux, and the web
      </p>
      <div flex-center lt-md:flex-col w-full gap-4 mt-6>
        <NuxtLink
          :to="config.public.appUrl"
          title="Open Merklin app"
          btn-action btn-lg w-full md:w-50 font-bold
          @click="useTrackEvent('click: Open App (hero)')"
        >
          <Icon name="app" size="1.5rem" text-yellow-400 /><span ml-2>Open App</span>
        </NuxtLink>
        <NuxtLink
          :to="config.public.repoUrl"
          target="_blank"
          title="Merklin GitHub repository"
          btn-action btn-lg w-full md:w-50 font-bold
          @click="useTrackEvent('click: GitHub (hero)')"
        >
          <Icon name="github" size="1.5rem" text-purple-400 /><span ml-2>Contribute</span>
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
    <div section flex-col-center>
      <p mt-0>
        — Preview —
      </p>
      <div class="preview-container" flex rounded-1.5rem border-solid border-4 border-base p-1>
        <ClientOnly>
          <img :src="`/preview-${colorMode.value}_x1280.jpg`" alt="Merklin EVM wallet explorer preview" rounded-1rem>
        </ClientOnly>
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
      <div section-content grid grid-cols-2 md:grid-cols-6 gap-8>
        <div class="network">
          <Icon name="ethereum" size="2rem" />
          <div class="network-name">
            <NuxtLink
              to="https://ethereum.org"
              title="Ethereum project website"
              target="_blank"
              @click="useTrackEvent('click: Supported Network (home)', { props: { target: 'Ethereum' } })"
            >
              Ethereum
            </NuxtLink>
          </div>
          <div class="network-layer">
            L1
          </div>
          <NuxtLink
            to="https://ethereum.org/en/developers/docs/evm"
            title="What is the Ethereum Virtual Machine (EVM)?"
            target="_blank"
            class="network-info"
            @click="useTrackEvent('click: Link (home)', { props: { target: 'EVM' } })"
          >
            EVM
          </NuxtLink>
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
              @click="useTrackEvent('click: Supported Network (home)', { props: { target: 'Optimism' } })"
            >
              Optimism
            </NuxtLink>
          </div>
          <div class="network-layer">
            L2
          </div>
          <NuxtLink
            to="https://ethereum.org/en/developers/docs/scaling/optimistic-rollups"
            title="What are Optimistic Rollups?"
            target="_blank"
            class="network-info"
            @click="useTrackEvent('click: Link (home)', { props: { target: 'Optimistic Rollups' } })"
          >
            Optimistic Rollups
          </NuxtLink>
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
              @click="useTrackEvent('click: Supported Network (home)', { props: { target: 'Arbitrum' } })"
            >
              Arbitrum
            </NuxtLink>
          </div>
          <div class="network-layer">
            L2
          </div>
          <NuxtLink
            to="https://ethereum.org/en/developers/docs/scaling/optimistic-rollups"
            title="What are Optimistic Rollups?"
            target="_blank"
            class="network-info"
            @click="useTrackEvent('click: Link (home)', { props: { target: 'Optimistic Rollups' } })"
          >
            Optimistic Rollups
          </NuxtLink>
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
              @click="useTrackEvent('click: Supported Network (home)', { props: { target: 'zkSync' } })"
            >
              zkSync
            </NuxtLink>
          </div>
          <div class="network-layer">
            L2
          </div>
          <NuxtLink
            to="https://ethereum.org/en/developers/docs/scaling/zk-rollups"
            title="What are ZK Rollups?"
            target="_blank"
            class="network-info"
            @click="useTrackEvent('click: Link (home)', { props: { target: 'ZK Rollups' } })"
          >
            ZK Rollups
          </NuxtLink>
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
              @click="useTrackEvent('click: Supported Network (home)', { props: { target: 'Polygon' } })"
            >
              Polygon
            </NuxtLink>
          </div>
          <div class="network-layer">
            L2
          </div>
          <NuxtLink
            to="https://ethereum.org/en/developers/docs/scaling/sidechains"
            title="What are Sidechains?"
            target="_blank"
            class="network-info"
            @click="useTrackEvent('click: Link (home)', { props: { target: 'Sidechain' } })"
          >
            Sidechain
          </NuxtLink>
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
              @click="useTrackEvent('click: Supported Network (home)', { props: { target: 'Gnosis' } })"
            >
              Gnosis
            </NuxtLink>
          </div>
          <div class="network-layer">
            L2
          </div>
          <NuxtLink
            to="https://ethereum.org/en/developers/docs/scaling/sidechains"
            title="What are Sidechains?"
            target="_blank"
            class="network-info"
            @click="useTrackEvent('click: Link (home)', { props: { target: 'Sidechain' } })"
          >
            Sidechain
          </NuxtLink>
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
              @click="useTrackEvent('click: Link (FAQ)', { props: { target: 'PWA' } })"
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
            Native apps are not suitable for
            <NuxtLink
              to="https://en.wikipedia.org/wiki/Web3"
              title="Learn more about web3 on Wikipedia"
              target="_blank"
              link
              @click="useTrackEvent('click: Link (FAQ)', { props: { target: 'web3' } })"
            >
              web3
            </NuxtLink>
            as they are subject to
            App Store / Play Store gate-keeping and lock out a big part of the global population.
            Instead, we go down the web-native route (PWA,
            <NuxtLink
              to="https://itnext.io/lets-build-a-native-like-web-app-nwa-22a553fee338"
              title="Let's build a Native(-like) Web App (NWA) on Medium"
              target="_blank"
              link
              @click="useTrackEvent('click: Link (FAQ)', { props: { target: 'NWA post' } })"
            >
              NWA
            </NuxtLink>)
            to deliver a great mobile experience.
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
            Why Vue/Nuxt and not React/Next?
          </p>
          <p class="answer">
            So far the web3 dev space has been dominated almost exlusively by
            React and its ecosystem. This project is an attempt to change that
            and add Vue to the web3 map as well.
          </p>
        </div>
        <div class="faq-item">
          <p class="question">
            Which web3 libraries, RPCs and APIs are used?
          </p>
          <p class="answer">
            As of now, the app relies mostly on
            <NuxtLink
              to="https://ethers.io"
              title="Ethers.js documentation"
              target="_blank"
              link
              @click="useTrackEvent('click: Link (FAQ)', { props: { target: 'ethers.js' } })"
            >
              ethers.js
            </NuxtLink>,
            and RPCs/APIs from
            <NuxtLink
              to="https://chain.link"
              title="Decentralized oracle networks"
              target="_blank"
              link
              @click="useTrackEvent('click: Link (FAQ)', { props: { target: 'Chainlink' } })"
            >
              Chainlink
            </NuxtLink>,
            <NuxtLink
              to="https://etherscan.io"
              title="Etherscan block explorer"
              target="_blank"
              link
              @click="useTrackEvent('click: Link (FAQ)', { props: { target: 'Etherscan' } })"
            >
              Etherscan
            </NuxtLink>,
            <NuxtLink
              to="https://www.alchemy.com"
              title="Alchemy web3 development platform"
              target="_blank"
              link
              @click="useTrackEvent('click: Link (FAQ)', { props: { target: 'Alchemy' } })"
            >
              Alchemy
            </NuxtLink>, and
            <NuxtLink
              to="https://www.infura.io"
              title="Infura blockchain APIs"
              target="_blank"
              link
              @click="useTrackEvent('click: Link (FAQ)', { props: { target: 'Infura' } })"
            >
              Infura
            </NuxtLink>.
            There are also some experiments with
            <NuxtLink
              to="https://wagmi.sh/core"
              title="Vanilla JS for Ethereum"
              target="_blank"
              link
              @click="useTrackEvent('click: Link (FAQ)', { props: { target: 'wagmi/core' } })"
            >
              wagmi/core
            </NuxtLink>
            and the
            <NuxtLink
              to="https://www.alchemy.com/sdk"
              title="SDK for the Alchemy web3 development platform"
              target="_blank"
              link
              @click="useTrackEvent('click: Link (FAQ)', { props: { target: 'Alchemy SDK' } })"
            >
              Alchemy SDK
            </NuxtLink>,
            and we are open to experimenting with others in pursuit of the most DX-friendly web3 stack.
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
              @click="useTrackEvent('click: Link (faq)', { props: { target: 'GitHub issues' } })"
            >
              issues
            </NuxtLink> in the
            <NuxtLink
              :to="config.public.repoUrl"
              title="Merklin GitHub repository"
              target="_blank"
              link
              @click="useTrackEvent('click: Link (faq)', { props: { target: 'GitHub repo' } })"
            >
              GitHub repo
            </NuxtLink>. If you are interested in
            working on any of those, just drop a comment. You can also create a new issue
            if you have something specific in mind.
          </p>
        </div>
      </div>
    </div>
    <div section>
      <div section-content flex-center>
        <NuxtLink
          :to="`mailto:${config.public.feedbackEmail}`"
          title="Send feedback"
          btn-default btn-lg w-70
          @click="useTrackEvent('click: Feedback (home)')"
        >
          <Icon name="email" size="1.5rem" mr-2 text-faint /> Send Feedback
        </NuxtLink>
      </div>
    </div>
    <div flex-center lt-md:flex-col gap-4>
      <div flex-center>
        Made with
        <NuxtLink
          href="https://nuxt.com"
          target="_blank"
          title="Nuxt"
          flex-center ml-2
          @click="useTrackEvent('click: Link (footer)', { props: { target: 'Nuxt' } })"
        >
          <Icon name="nuxt" />
        </NuxtLink>
        <NuxtLink
          href="https://vitejs.dev"
          target="_blank"
          title="Vite"
          flex-center ml-2
          @click="useTrackEvent('click: Link (footer)', { props: { target: 'Vite' } })"
        >
          <Icon name="vite" />
        </NuxtLink>
        <NuxtLink
          href="https://uno.antfu.me"
          target="_blank"
          title="UnoCSS"
          flex-center ml-2
          @click="useTrackEvent('click: Link (footer)', { props: { target: 'UnoCSS' } })"
        >
          <Icon name="unocss" dark:invert />
        </NuxtLink>
        <NuxtLink
          href="https://headlessui.com"
          target="_blank"
          title="Headless UI"
          flex-center ml-2
          @click="useTrackEvent('click: Link (footer)', { props: { target: 'HeadlessUI' } })"
        >
          <Icon name="headless" />
        </NuxtLink>
      </div>
      <div flex-center md:ml-2>
        Powered by
        <NuxtLink
          href="https://vercel.com"
          target="_blank"
          title="Vercel"
          flex-center ml-2
          @click="useTrackEvent('click: Link (footer)', { props: { target: 'Vercel' } })"
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
  @apply w-28 h-28;
  aspect-ratio: 1 / 1;
}
.preview-container {
  @apply w-full;
  aspect-ratio: 1280 / 800;
}
.preview-container > img {
  @apply w-full h-auto;
}
.network {
  @apply flex-col-center;
}
.network > .icon {
  @apply mb-4;
}
.network-name {
  @apply text-lg font-bold leading-tight;
}
.network-info {
  @apply text-sm text-dim;
}
.network-status {
  @apply flex-center mt-2 px-1 py-0.5 bg-element text-xs text-dim rounded;
}
.network-status > .icon {
  @apply ml-0.5;
}

.faq-item {
  @apply flex-col-center not-last:mb-8 px-4;
}
.question {
  @apply m-0 text-2xl text-center leading-relaxed;
}
.answer {
  @apply mt-2 mb-0 text-dim text-center italic leading-relaxed;
}
</style>
