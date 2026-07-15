import Link from 'next/link';

import { certifications } from '@/features/certifications/data/certifications';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { SectionTitle } from '@/components/ui/section-title';

export default function Certifications() {
  return (
    <Section id="certifications">
      <Container>
        <SectionTitle
          eyebrow="Certificaciones"
          title="Acreditaciones que respaldan mi experiencia"
          description="Certificados clave en cloud, infraestructura y gestión de servicios que respaldan mi trabajo profesional."
        />

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {certifications.map((certificate) => (
            <Card key={certificate.id} className="overflow-hidden">
              <div className="flex h-full flex-col gap-4 p-4">
                <div>
                  <h3 className="text-foreground text-xl font-semibold">
                    {certificate.name}
                  </h3>
                  <p className="text-muted-foreground mt-2 text-sm">
                    {certificate.issuer}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <Badge variant="outline">
                    Emitido: {certificate.issueDate}
                  </Badge>

                  {certificate.credentialUrl ? (
                    <Button asChild variant="default" size="sm">
                      <Link
                        href={certificate.credentialUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Ver credencial
                      </Link>
                    </Button>
                  ) : null}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
