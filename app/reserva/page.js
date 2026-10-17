import { Camera, MessageCircle } from 'lucide-react'
import { getSiteContent } from '../../lib/site-content'
import { ActionLink, PageHeading, WhatsAppLink } from '../_components/SiteShell'

export async function generateMetadata() {
  const { getField } = await getSiteContent()

  return {
    title: getField('reserva', 'SEO', 'Título SEO'),
    description: getField('reserva', 'SEO', 'Meta description'),
  }
}

export default async function ReservationPage() {
  const { client, getField } = await getSiteContent()
  const title = getField('reserva', 'Solicitação de reserva', 'Título')
  const description = getField('reserva', 'Solicitação de reserva', 'Texto')
  const whatsappMessage = client.funcionalidades.whatsapp.mensagens_sugeridas.reserva

  return (
    <div className="reservation-page page-width section-pad">
      <PageHeading eyebrow="Reservas · Tuna Mar e Terra" title={title} description={description} />

      <div className="reservation-actions">
        <div className="reservation-primary">
          <p className="eyebrow eyebrow--light">Fale com a equipe</p>
          <h2>Vamos encontrar um bom momento para sua visita.</h2>
          <p>Envie sua solicitação e aguarde a confirmação diretamente pelo atendimento.</p>
          <WhatsAppLink client={client} message={whatsappMessage} variant="coral">
            <MessageCircle aria-hidden="true" size={17} /> Solicitar reserva pelo WhatsApp
          </WhatsAppLink>
        </div>

        <div className="reservation-secondary">
          <p className="eyebrow">Outro canal</p>
          <h2>Acompanhe o restaurante.</h2>
          <p>Visite o perfil oficial para acompanhar as novidades do Tuna Mar e Terra.</p>
          <ActionLink href={client.contato.instagram_url} external variant="outline">
            <Camera aria-hidden="true" size={17} /> Instagram
          </ActionLink>
        </div>
      </div>

      <p className="reservation-footnote">
        O envio da mensagem é uma solicitação; a equipe confirmará a disponibilidade pelo WhatsApp.
      </p>
    </div>
  )
}