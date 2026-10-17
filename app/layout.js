import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import { getSiteContent } from '../lib/site-content'
import { SiteFooter, SiteHeader } from './_components/SiteShell'
import './globals.css'

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-display',
  display: 'swap',
})

const sans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export async function generateMetadata() {
  const { client } = await getSiteContent()

  return {
    title: client.negocio.nome_exibicao,
    description: client.negocio.descricao_seo,
    applicationName: client.negocio.nome,
    openGraph: {
      title: client.negocio.nome_exibicao,
      description: client.negocio.descricao_seo,
      locale: 'pt_BR',
      type: 'website',
    },
  }
}

export default async function RootLayout({ children }) {
  const { client } = await getSiteContent()

  return (
    <html lang="pt-BR" className={`${display.variable} ${sans.variable}`}>
      <body>
        <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
        <SiteHeader />
        <main id="conteudo">{children}</main>
        <SiteFooter client={client} />
      </body>
    </html>
  )
}