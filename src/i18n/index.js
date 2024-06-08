import { messages as footerMessages } from '@edx/frontend-component-footer'
import { messages as headerMessages } from '@edx/frontend-component-header'
import { messages as paragonMessages } from '@edx/paragon'

import arMessages from './messages/ar.json'
import deMessages from './messages/de.json'
import dedeCAMessages from './messages/de_DE.json'
import es419Messages from './messages/es_419.json'
import faIRMessages from './messages/fa_IR.json'
import frMessages from './messages/fr.json'
import frCAMessages from './messages/fr_CA.json'
import hiMessages from './messages/hi.json'
import itMessages from './messages/it.json'
import ititCAMessages from './messages/it_IT.json'
import ptMessages from './messages/pt.json'
import ptBRMessages from './messages/pt_BR.json'
import ptptCAMessages from './messages/pt_PT.json'
import ruMessages from './messages/ru.json'
import ukMessages from './messages/uk.json'
import zhcnMessages from './messages/zh_CN.json'
// no need to import en messages-- they are in the defaultMessage field

const appMessages = {
  ar: arMessages,
  'es-419': es419Messages,
  fr: frMessages,
  'zh-cn': zhcnMessages,
  pt: ptMessages,
  it: itMessages,
  de: deMessages,
  hi: hiMessages,
  'fa-ir': faIRMessages,
  'fr-ca': frCAMessages,
  ru: ruMessages,
  uk: ukMessages,
  'de-de': dedeCAMessages,
  'it-it': ititCAMessages,
  'pt-pt': ptptCAMessages,
  pt_br: ptBRMessages,
  'pt-br': ptBRMessages,
}

export default [paragonMessages, appMessages, footerMessages, headerMessages]
