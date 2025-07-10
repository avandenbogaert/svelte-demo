<script lang="ts">
</script>

<header class="flex items-center justify-between bg-white px-4 py-3 shadow">
    <div class="flex items-center space-x-4">
        <button class="cursor-pointer" aria-label="back">
            <i class="fas fa-chevron-left text-gray-600"></i>
        </button>

        <div class="relative">
            <button class="flex items-center space-x-1 px-2 py-1 hover:bg-gray-100 rounded">
                <span class="font-medium">Live</span>
                <i class="fas fa-caret-down text-gray-600"></i>
            </button>
        </div>

        <div class="flex items-center space-x-4">
            <div class="flex items-center space-x-1">
                <i class="fas fa-flag text-gray-600"></i>
                <span>13:00:00</span>
            </div>
            <div class="flex items-center space-x-1">
                <i class="fas fa-flag-checkered text-red-500"></i>
                <span>13:45:00</span>
            </div>
            <div class="flex items-center space-x-1">
                <i class="fas fa-clock text-gray-600"></i>
                <span>00:45:00</span>
            </div>
        </div>
    </div>

    <div class="flex items-center space-x-2">
        <img src="/user.png" alt="Avatar" class="w-8 h-8 rounded-full" />
        <button class="cursor-pointer">
            <i class="fas fa-caret-down text-gray-600"></i>
        </button>
    </div>
</header>
