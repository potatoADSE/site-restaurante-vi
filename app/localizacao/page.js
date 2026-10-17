import { Clock3, MapPin, ParkingCircle } from 'lucide-react'
import { getSiteContent } from '../../lib/site-content'
import { ActionLink, HoursList, PageHeading } from '../_components/SiteShell'

export async function generateMetadata() {
  const { client } = await getSiteContent()

  return {
    title: `Localização e horários | ${client.negocio.nome} em ${client.localizacao.cidade}`,
    description: `Encontre o ${client.negocio.nome} em ${client.localizacao.cidade}, confira o endereço e os horários de funcionamento e abra a rota pelo Google Maps.`,
  }
}

export default async function LocationPage() {
  const { client } = await getSiteContent()
  const location = client.localizacao
  const addressQuery = encodeURIComponent(location.endereco)
  const mapEmbed = `https://www.google.com/maps?q=${addressQuery}&output=embed`

  return (
    <div className="location-page page-width section-pad">
      <PageHeading
        eyebrow="Como chegar · Mossoró, RN"
        title="Encontre o Tuna Mar e Terra."
        description="Consulte o endereço e os horários antes de sua visita."
      />

      <div className="location-layout">
        <section className="map-panel" aria-label="Mapa do endereço do restaurante">
          <iframe
            title="Mapa do endereço do Tuna Mar e Terra em Mossoró"
            src={mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-if-downgrade"
            allowFullScreen
          />
          <p>Mapa de busca pelo endereço informado pelo restaurante. Use o botão abaixo para abrir no Google Maps e confirmar a rota.</p>
        </section>

        <div className="location-details">
          <section className="location-address">
            <h2><MapPin aria-hidden="true" size={18} /> Endereço</h2>
            <address>{location.endereco}</address>
            <ActionLink href={location.google_maps_url} external variant="dark">Abrir no Google Maps</ActionLink>
          </section>

          <section className="location-hours">
            <h2><Clock3 aria-hidden="true" size={18} /> Horários</h2>
            <HoursList hours={client.horarios_funcionamento} />
          </section>

          <section className="location-parking">
            <h2><ParkingCircle aria-hidden="true" size={18} /> Estacionamento</h2>
            <p>O restaurante informa vagas de estacionamento gratuitas e estacionamento gratuito na rua.</p>
          </section>
        </div>
      </div>
    </div>
  )
}