import StreamingAccountsData from './StreamingAccountsData.json'

export default {
  asyncData () {
    const digitalAccounts = StreamingAccountsData['digital-accounts'].map((v) => {
      return {
        ...v,
        href: `https://api.whatsapp.com/send?phone=59162280788&text=Hola%2C%20quisiera%20obtener%20una%20cuenta%20de%20*${v.name}%20${v.type}%20por%20Bs%20${v.price}.*`
      }
    })
    return {
      digitalAccounts
    }
  },
  head () {
    return {
      title: 'Cuentas de streaming',
      meta: [
        { hid: 'description', name: 'description', content: 'Netflix, Amazon prime, Spotify, Disney plus, HBO Max, Youtube Premium, Paramount Plus, Star Plus' }
      ]
    }
  },
  pwa () {
    return {
      meta: {
        name: 'Cuentas de streaming',
        author: 'Fernando Javier Averanga Aruquipa',
        description: 'Netflix, Amazon prime, Spotify, Disney plus, HBO Max, Youtube Premium, Paramount Plus, Star Plus',
        theme_color: '#1a76c1',
        ogSiteName: 'Cuentas de streaming',
        ogTitle: 'Cuentas de streaming',
        ogDescription: 'Netflix, Amazon prime, Spotify, Disney plus, HBO Max, Youtube Premium, Paramount Plus, Star Plus',
        ogUrl: 'https://fernandoaveranga.com'
      }
    }
  }
}
