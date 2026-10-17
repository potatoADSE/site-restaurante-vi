
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Clock3,
  Music2,
  Utensils,
} from 'lucide-react'
import { getSiteContent } from '../lib/site-content'
import { ActionLink, HoursList, WhatsAppLink } from './_components/SiteShell'

export async function generateMetadata() {
  const { getField } = await getSiteContent()

  return {
    title: getField('home', 'SEO', 'Título SEO'),
    description: getField('home', 'SEO', 'Meta description'),
  }
}

export default async function HomePage() {
  const { client, getField } = await getSiteContent()
  const location = client.localizacao
  const hours = client.horarios_funcionamento
  const heroDescription = getField('home', 'Destaque principal', 'Texto de apresentação')
  const conceptTitle = getField('home', 'Conceito', 'Título')
  const conceptText = getField('home', 'Conceito', 'Texto')
  const chefsText = getField('home', 'Chefs', 'Texto')

  return (
    <>
      <section className="home-hero" aria-labelledby="home-title">
        <div className="hero-photo">
          <Image
            src="/images/hero-ilustrativo.jpg"
            alt="Peixe com legumes em prato escuro; fotografia ilustrativa, não representa um prato do restaurante."
            fill
            priority
            sizes="(max-width: 760px) 100vw, 62vw"
          />
          <span className="image-note">Fotografia ilustrativa</span>
        </div>
        <div className="hero-content page-width">
          <p className="eyebrow eyebrow--light">Restaurante autoral <span>·</span> Mossoró, RN</p>
          <h1 id="home-title">Tuna Mar<br /><em>e Terra</em></h1>
          <p className="hero-slogan">{client.negocio.slogan}</p>
          <p className="hero-copy">{heroDescription}</p>
          <div className="hero-actions">
            <ActionLink href="/cardapio" variant="coral">Ver cardápio</ActionLink>
            <WhatsAppLink
              client={client}
              message={client.funcionalidades.whatsapp.mensagens_sugeridas.reserva}
              variant="light"
            >
              Reservar pelo WhatsApp
            </WhatsAppLink>
          </div>
          <span className="hero-index"><ArrowDownRight aria-hidden="true" size={18} /> Uma experiência mar e terra</span>
        </div>
      </section>

      <section className="home-intro section-pad">
        <div className="section-label"><span>01</span><span>O conceito</span></div>
        <div className="home-intro-main">
          <h2>{conceptTitle}</h2>
          <div>
            <p className="intro-copy">{conceptText}</p>
            <p className="fine-copy">Uma mesa para almoçar, jantar e estar junto.</p>
          </div>
        </div>
        <div className="experience-line">
          <div><Utensils aria-hidden="true" /><span>Frutos do mar e carnes</span></div>
          <div><Music2 aria-hidden="true" /><span>Música ao vivo em ocasiões oferecidas</span></div>
          <div><Clock3 aria-hidden="true" /><span>Almoço e jantar</span></div>
        </div>
      </section>

      <section className="home-chefs">
        <div className="chefs-copy">
          <p className="eyebrow">Autoria à mesa</p>
          <h2>Uma cozinha de autoria</h2>
          <p>{chefsText}</p>
        </div>
        <div className="chef-links" aria-label="Perfis dos chefs no Instagram">
          {client.negocio.chefs.map((chef, index) => (
            <a href={chef.instagram} target="_blank" rel="noreferrer" key={chef.instagram}>
              <span className="chef-number">0{index + 1}</span>
              <span>{chef.nome_exibicao}</span>
              <ArrowUpRight aria-hidden="true" size={18} />
            </a>
          ))}
        </div>
      </section>

      <section className="home-visit section-pad">
        <div className="section-label"><span>02</span><span>Planeje sua visita</span></div>
        <div className="visit-grid">
          <div className="visit-address">
            <p className="eyebrow">{location.cidade} · {location.estado}</p>
            <h2>Encontre seu lugar à mesa.</h2>
            <p>{location.endereco}</p>
            <Link className="text-link" href="/localizacao">
              Ver localização e horários <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
          <div className="visit-hours">
            <h3><Clock3 aria-hidden="true" size={17} /> Horários de funcionamento</h3>
            <HoursList hours={hours} />
          </div>
        </div>
      </section>

      <section className="home-close" aria-label="Encerramento">
        <Image
          src="/images/ambiente-ilustrativo.jpg"
          alt="Salão de restaurante contemporâneo, fotografia ilustrativa que não representa o Tuna Mar e Terra."
          fill
          sizes="100vw"
        />
        <div className="home-close-overlay" />
        <div className="home-close-content">
          <span className="eyebrow eyebrow--light">Tuna Mar e Terra</span>
          <p>Fale conosco pelo WhatsApp</p>
          <span className="image-note">Imagem de referência ilustrativa</span>
        </div>
      </section>
    </>
  )
}
