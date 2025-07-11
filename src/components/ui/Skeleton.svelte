<script lang="ts">
  interface Props {
    width?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    height?: 'sm' | 'md' | 'lg';
  }

  const {
    width = 'md',
    height = 'md',
  }: Props = $props();

  const widthClasses = {
    sm: 'w-12',
    md: 'w-16',
    lg: 'w-24',
    xl: 'w-32',
    full: 'w-full'
  };

  const heightClasses = {
    sm: 'h-3',
    md: 'h-4',
    lg: 'h-5',
  };

  const skeletonClasses = `
    ${widthClasses[width]}
    ${heightClasses[height]}
    relative
    overflow-hidden
    bg-zinc-200
    rounded
  `.trim();
</script>

<div class={skeletonClasses}>
    <div class="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
</div>

<style>
    @keyframes shimmer {
        100% {
            transform: translateX(100%);
        }
    }
    .animate-shimmer {
        animation: shimmer 2.5s infinite ease;
    }
</style>
