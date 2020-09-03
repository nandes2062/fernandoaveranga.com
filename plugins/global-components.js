import Vue from 'vue'
import Logo from '@/components/global/Logo.vue'
import NotificationBar from '@/components/global/notification-bar'
import SeparatorSection from '@/components/global/SeparatorSection.vue'
import LaptopCellphone from '@/components/global/LaptopCellphone.vue'
const components = {
  SeparatorSection,
  Logo,
  NotificationBar,
  LaptopCellphone
}

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
