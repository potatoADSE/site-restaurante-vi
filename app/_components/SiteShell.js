import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  Clock3,
  MapPin,
} from 'lucide-react'
import logo from '../../cliente/logo.jpg'

const navigation = [
  { href: '/', label: 'Início' },
  { href: '/cardapio', label: 'Cardápio' },
  { href: '/ambiente', label: 'Ambiente' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/localizacao', label: 'Localização' },
  { href: '/reserva', label: 'Reserva' },
]

export function ActionLink({
  href,
  children,
  variant = 'dark',
  external = false,
  icon: Icon = ArrowUpRight,
  className = '',
}) {
  const classNames = `action-link action-link--${variant} ${className}`.trim()
  const content = (
    <>
      <span>{children}</span>
      <Icon aria-hidden="true" size={17} strokeWidth={1.7} />
    </>
  )

  if (external) {
    return (
      <a className={classNames} href={href} target="_blank" rel="noreferrer">
        {content}
      </a>
    )
  }

  return (
    <Link className={classNames} href={href}>
      {content}
    </Link>
  )
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-top">
        <Link className="brand-lockup" href="/" aria-label="Tuna Mar e Terra, início">
          <Image src={logo} alt="" priority className="brand-logo" />
          <span className="brand-name">
            <strong>Tuna</strong>
            <span>Mar e Terra</span>
          </span>
        </Link>
        <span className="header-location">Mossoró <i aria-hidden="true">/</i> RN</span>
      </div>
      <nav className="site-nav" aria-label="Navegação principal">
        {navigation.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}

function formatHour(time) {
  return `${time.slice(0, 2)}h${time.slice(3) === '00' ? '' : ` ${time.slice(3)}`}`
}

export function HoursList({ hours, compact = false }) {
  return (
    <ul className={`hours-list${compact ? ' hours-list--compact' : ''}`}>
      {hours.map((entry) => (
        <li key={entry.dia}>
          <span>{entry.dia}</span>
          <span>
            {entry.status === 'Fechado'
              ? 'Fechado'
              : `${formatHour(entry.abertura)}–${formatHour(entry.fechamento)}`}
          </span>
        </li>
      ))}
    </ul>
  )
}

export function SiteFooter({ client }) {
  const { localizacao, horarios_funcionamento: hours } = client

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link className="brand-lockup" href="/" aria-label="Tuna Mar e Terra, início">
            <Image src={logo} alt="" className="brand-logo" />
            <span className="brand-name">
              <strong>Tuna</strong>
              <span>Mar e Terra</span>
            </span>
          </Link>
          <p>{client.negocio.slogan}</p>
          <span className="footer-copyright">Restaurante autoral · Mossoró, RN</span>
        </div>

        <div className="footer-detail">
          <h2><MapPin aria-hidden="true" size={16} /> Visite-nos</h2>
          <p>{localizacao.endereco}</p>
          <Link className="text-link" href="/localizacao">
            Ver localização <ArrowRight aria-hidden="true" size={15} />
          </Link>
        </div>

        <div className="footer-detail">
          <h2><Clock3 aria-hidden="true" size={16} /> Horários</h2>
          <HoursList hours={hours} compact />
        </div>
      </div>
      <div className="footer-bottom">
        <span>Sabores do mar e da terra, em Mossoró.</span>
        <Link href="/reserva">Reservas <ArrowUpRight aria-hidden="true" size={14} /></Link>
      </div>
    </footer>
  )
}

export function PageHeading({ eyebrow, title, description, className = '' }) {
  return (
    <header className={`page-heading ${className}`.trim()}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1>{title}</h1>
      {description && <p className="page-lede">{description}</p>}
    </header>
  )
}

export function WhatsAppLink({ client, message, children, variant = 'coral' }) {
  const href = `${client.contato.whatsapp_link}?text=${encodeURIComponent(message)}`

  return (
    <ActionLink href={href} variant={variant} external icon={ArrowUpRight}>
      {children}
    </ActionLink>
  )
}