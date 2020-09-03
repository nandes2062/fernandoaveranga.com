import Vue from 'vue'
import Logo from '@/components/global/Logo.vue'
import NotificationBar from '@/components/global/notification-bar'
import SeparatorSection from '@/components/global/SeparatorSection.vue'
const components = {
  SeparatorSection,
  Logo,
  NotificationBar
}

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
