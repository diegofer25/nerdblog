<template>
  <div>{{ $route.params.category.split('-').join(' ') }}</div>
</template>

<script>
export default {
  name: 'Category'
}
</script>
