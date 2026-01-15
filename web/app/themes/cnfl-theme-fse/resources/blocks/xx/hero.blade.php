{{-- resources/views/blocks/cnfl-hero.blade.php --}}
<section class="{{ $block->classes ?? '' }} py-12 bg-slate-50 border border-slate-200 rounded-xl">
  <div class="container mx-auto px-6">
    <h2 class="text-4xl font-bold mb-4">{{ $attributes->title }}</h2>
    <p class="text-lg mb-6">{{ $attributes->content }}</p>

    <wa-button variant="brand" size="large">
      <wa-icon slot="prefix" name="rocket-launch" library="fa" class="fa-solid"></wa-icon>
      Get Started with Pro
    </wa-button>
  </div>
</section>
