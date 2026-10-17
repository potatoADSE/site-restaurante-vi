import { ArrowUpRight, MapPin } from 'lucide-react'
import { getSiteContent } from '../../lib/site-content'
import { ActionLink, PageHeading } from '../_components/SiteShell'

export async function generateMetadata() {
  const { getField } = await getSiteContent()

  return {
    title: getField('sobre', 'SEO', 'Título SEO'),
    description: getField('sobre', 'SEO', 'Meta description'),
  }
}

export default async function AboutPage() {
  const { client, getField } = await getSiteContent()
  const introduction = getField('sobre', 'Apresentação', 'Texto')
  const proposalTitle = getField('sobre', 'Proposta gastronômica', 'Título')
  const proposalText = getField('sobre', 'Proposta gastronômica', 'Texto')
  const location = client.localizacao

  return (
    <div className="about-page page-width">
      <section className="about-opening section-pad">
        <PageHeading eyebrow="Sobre o restaurante" title="Uma proposta autoral, feita de encontros." />
        <p className="about-lede">{introduction}</p>
      </section>

      <section className="about-proposal">
        <div className="about-proposal-index">01 <span>·</span> Conceito</div>
        <div>
          <h2>{proposalTitle}</h2>
          <p>{proposalText}</p>
        </div>
      </section>

      <section className="about-chefs">
        <div>
          <p className="eyebrow">Na cozinha</p>
          <h2>Os chefs por trás da proposta.</h2>
        </div>
        <ul className="about-chef-list">
          {client.negocio.chefs.map((chef) => (
            <li key={chef.instagram}>
              <a href={chef.instagram} target="_blank" rel="noreferrer">
                <span>{chef.nome_exibicao}</span>
                <ArrowUpRight aria-hidden="true" size={18} />
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="about-origin">
        <div className="about-origin-copy">
          <p className="eyebrow"><MapPin aria-hidden="true" size={14} /> Mossoró, Rio Grande do Norte</p>
          <h2>Uma mesa em Nova Betânia.</h2>
          <p>{location.endereco}</p>
          <ActionLink href={location.google_maps_url} external variant="light">Ver no Google Maps</ActionLink>
        </div>
        <p className="about-origin-note">{client.negocio.atributos_confirmados.includes('Estabelecimento identificado como pertencente a mulheres')
          ? 'Um estabelecimento pertencente a mulheres.'
          : ''}</p>
      </section>
    </div>
  )
}