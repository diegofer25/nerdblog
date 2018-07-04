<template>
  <div>{{ $route.params.post.split('-').join(' ') }}</div>
</template>

<script>
export default {
  name: 'PostReader'
}
</script>
