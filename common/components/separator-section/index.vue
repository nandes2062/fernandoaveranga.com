<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 130">
    <path :fill="color" fill-opacity="1" d="M0,128L60,117.3C120,107,240,85,360,85.3C480,85,600,107,720,112C840,117,960,107,1080,90.7C1200,75,1320,53,1380,42.7L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" />
  </svg>
</template>

<script>
export default {
  name: 'SeparatorSection',
  props: {
    color: {
      type: String,
      default: '#FFFFFF'
    }
  }
}
</script>
