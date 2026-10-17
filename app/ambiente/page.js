import Image from 'next/image'
import { Accessibility, Music2, UsersRound, Wifi } from 'lucide-react'
import { getSiteContent } from '../../lib/site-content'
import { ActionLink, PageHeading } from '../_components/SiteShell'

export async function generateMetadata() {
  const { getField } = await getSiteContent()

  return {
    title: getField('ambiente', 'SEO', 'Título SEO'),
    description: getField('ambiente', 'SEO', 'Meta description'),
  }
}

export default async function AmbientePage() {
  const { getField } = await getSiteContent()
  const title = getField('ambiente', 'Apresentação', 'Título')
  const introduction = getField('ambiente', 'Apresentação', 'Texto')
  const atmosphere = getField('ambiente', 'Recursos do espaço', 'Texto')
  const extra = getField('ambiente', 'Recursos do espaço', 'Texto complementar')
  const accessibility = getField('ambiente', 'Acessibilidade', 'Texto')

  return (
    <div className="ambience-page">
      <section className="ambience-heading page-width section-pad">
        <PageHeading
          eyebrow="Nosso ambiente · Mossoró"
          title={title}
          description={introduction}
        />
      </section>

      <figure className="ambience-photo">
        <Image
          src="/images/ambiente-ilustrativo.jpg"
          alt="Salão de restaurante contemporâneo; fotografia ilustrativa, não representa o Tuna Mar e Terra."
          fill
          sizes="100vw"
        />
        <figcaption>Imagem de referência ilustrativa · não retrata o salão do restaurante</figcaption>
      </figure>

      <section className="ambience-details page-width section-pad">
        <div className="ambience-main-copy">
          <p className="eyebrow">A experiência</p>
          <h2>Encontros que pedem tempo à mesa.</h2>
          <p>{atmosphere}</p>
          <p>{extra}</p>
          <ActionLink href="/reserva" variant="outline">Planejar uma visita</ActionLink>
        </div>
        <div className="ambience-facts">
          <div><Music2 aria-hidden="true" /><span>Música ao vivo em ocasiões oferecidas</span></div>
          <div><UsersRound aria-hidden="true" /><span>Para pessoas sozinhas, famílias e grupos</span></div>
          <div><Accessibility aria-hidden="true" /><span>Entrada e assentos acessíveis para cadeirantes</span></div>
          <div><Wifi aria-hidden="true" /><span>Wi-Fi gratuito</span></div>
        </div>
      </section>

      <section className="welcome-band">
        <div className="page-width welcome-band-inner">
          <p className="eyebrow eyebrow--light">Um espaço acolhedor</p>
          <p>O restaurante informa um ambiente acolhedor para pessoas LGBTQ+ e seguro para pessoas trans.</p>
        </div>
      </section>
    </div>
  )
}