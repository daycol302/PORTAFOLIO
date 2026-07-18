'use client';

import Link from 'next/link';

import { certifications } from '@/features/certifications/data/certifications';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { SectionTitle } from '@/components/ui/section-title';
import { useI18n } from '@/i18n/provider';

export default function Certifications() {
  const { dictionary } = useI18n();
  const copy = dictionary.sections.certifications;
  return (
    <Section id="certifications">
      <Container>
        <SectionTitle
          eyebrow={copy[0] ?? ''}
          title={copy[1] ?? ''}
          description={copy[2] ?? ''}
        />

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {certifications.map((certificate) => (
            <Card key={certificate.id} className="overflow-hidden">
              <div className="flex h-full flex-col gap-4 p-6">
                <div>
                  <h3 className="text-xl font-bold tracking-tight">
                    {certificate.name}
                  </h3>
                  <p className="text-muted-foreground mt-2 text-sm">
                    {certificate.issuer}
                  </p>
                  <div className="mt-3">
                    <Badge
                      variant={
                        certificate.status === 'completed'
                          ? 'success'
                          : 'warning'
                      }
                    >
                      {certificate.status === 'completed'
                        ? dictionary.certifications.obtained
                        : dictionary.certifications.preparing}
                    </Badge>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <Badge variant="outline">
                    {certificate.status === 'completed'
                      ? `${dictionary.certifications.obtainedOn} ${certificate.issueDate}`
                      : dictionary.certifications.next}
                  </Badge>

                  {certificate.credentialUrl ? (
                    <Button asChild variant="default" size="sm">
                      <Link
                        href={certificate.credentialUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {dictionary.certifications.credential}
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
