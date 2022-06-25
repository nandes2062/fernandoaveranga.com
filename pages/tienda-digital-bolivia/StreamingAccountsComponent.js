import StreamingAccountsData from './StreamingAccountsData.json'

export default {
  layout: 'cuentas-de-streaming-bolivia',
  asyncData () {
    const digitalCombos = StreamingAccountsData['digital-combos'].map((v) => {
      return {
        ...v,
        href: `https://api.whatsapp.com/send?phone=59162280788&text=Hola%2C%20quisiera%20obtener%20una%20cuenta%20de%20*${v.name}%20${v.type}%20por%20Bs%20${v.price}.*`
      }
    })
    const digitalAccounts = StreamingAccountsData['digital-accounts'].map((v) => {
      return {
        ...v,
        href: `https://api.whatsapp.com/send?phone=59162280788&text=Hola%2C%20quisiera%20obtener%20una%20cuenta%20de%20*${v.name}%20${v.type}%20por%20Bs%20${v.price}.*`
      }
    })
    return {
      digitalAccounts,
      digitalCombos,
      head: {
        title: 'Tienda Digital Bolivia',
        description: 'Venta de servicios digitales a precios accesibles.',
        image: '/tienda-digital-bolivia.jpg'
      }
    }
  },
  head () {
    return {
      title: this.head.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.head.description
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.head.title
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.head.image
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.head.description
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://fernandoaveranga.com/tienda-digital-bolivia'
        }
      ]
    }
  }
}
