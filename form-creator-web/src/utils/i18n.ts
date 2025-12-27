import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enUSLogin from './locales/en-US/login.json'
import enUSHome from './locales/en-US/home.json'

import esESLogin from './locales/es-ES/login.json'
import esESHome from './locales/es-ES/home.json'

import ptBRLogin from './locales/pt-BR/login.json'
import ptBRHome from './locales/pt-BR/home.json'

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  enUS: {
    login: enUSLogin,
    home: enUSHome,
  },
  esES: {
    login: esESLogin,
    home: esESHome,
  },
  ptBR: {
    login: ptBRLogin,
    home: ptBRHome,
  },
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'ptBR',
    lng: 'ptBR', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
